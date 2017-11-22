/* eslint-disable */
const argv = require('yargs').argv
const promisify = require("es6-promisify")
const fs = require('fs')
const gracefulFs = require('graceful-fs')
gracefulFs.gracefulify(fs)
const glob = require('glob')

const sourceFiles = [
  '../../client/global/**/*.js',
  '../../client/global/**/*.html',
  '../../client/modules/**/*.js',
  '../../client/modules/**/*.html'
]
const locales = ['en_US', 'es_MX', 'fr_CA', 'pt_BR', 'zh_CN', 'zh_HK']
const parentLocale = 'en_US'
let problems
let currentSection

// ============================================================================
//      The results of this script should only be used as a guideline.
//      You still need to check if the tags are used through response values
//      from a backend service, or is a computed value, etc...
// ============================================================================

exports.processTextBundles = (req, res) => {
  problems = locales.map((item) => ({ locale: item, missing: [], same: [], unused: {} }) )
  const textbundles = locales.map((locale, index) => {
    return {
      locale: locales[index],
      content: exports.readTextBundle(locale)
    }
  })
  const parent = textbundles.filter(item => item.locale === 'en_US')
  const children = textbundles.filter(item => item.locale !== 'en_US')

  checkForUnusedKeys(parent)
  res.json(problems)
}

exports.readTextBundle = (locale) => JSON.parse(fs.readFileSync(`../../client/locale/${locale}//textBundle.json`, 'utf8').trim())

function checkForUnusedKeys(originalLocale) {
  return compareUnusedKeys(originalLocale[0].content)
}

function compareUnusedKeys(content) {
  if (content && typeof content === 'object') { // if object
    Object.keys(content).forEach((key) => {
      if (content[key] && typeof content[key] === 'object') { // if object
        if (key === 'geography' // gets tag values from backend
          || key === 'currency' // gets tag values from backend
          || key === 'businessCategories' // gets tag values from backend
          || key === 'customerRanges' // gets tag values from backend
          || key === 'keyManagement' // this entire section will be removed in the future
        ) { return; } // don't check these ^^ sections
        compareUnusedKeys(content[key]) // call this function again for
      } else if (Array.isArray(content[key])) { // if array
        content[key].forEach(item => compareUnusedKeys(content[item])) // call this function again for each item in the array to process the strings
      } else { // if string
        problems[0].unused[key] = true // initialize every key as unused, later remove them if they exist
        sourceFiles.forEach(fileRegEx => { // loop through the sourceFiles regex's
          const globFiles = glob.sync(fileRegEx, {}) // get a glob of all the files that match the regex
          globFiles.forEach((file) => { // loop through each of the matching files
            const result = fs.readFileSync(file, 'utf8') // read the file synchronously
            if (result.includes(key)) { // check if the file includes the tag anywhere in it. If so, remove it from the unused array
              problems[0].unused[key] = false
              delete problems[0].unused[key]
            }
          })
          console.log('# of unused tags:', Object.keys(problems[0].unused).length)
        })
      }
    })
  } else {
    console.log('not an object', content)
  }
}
const faker = require('faker');
const jsonServer = require('json-server');
const moment = require('moment');
const _ = require('lodash');

module.exports = () => {

    let feedbacks = () => {
        let feedbacksdata = [];
        let brands = [];
        for (let i = 1; i <= 20; i++) {
            let brandName = faker.random.words();
            let fedDate = moment(faker.date.past()).format('MMM DD, YYYY');

            feedbacksdata.push({
                "id": i,
                "brandId": "100_" + i,
                "brandName": brandName,
                "fedDate": fedDate,
                "showAdd": (i%5 ==0 )?false: true,
                "showPoweredBy": (i%3 ==0 )?false: true
            })

        }
        return feedbacksdata;
    };


    const data = {
        feedbacks: feedbacks()
    };
    return data;

}
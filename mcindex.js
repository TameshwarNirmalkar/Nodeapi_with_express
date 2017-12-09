const faker = require('faker');
const jsonServer = require('json-server');
const moment = require('moment');
const _ = require('lodash');
/**
 * "/merchantAdmin/private/organization/productionAccess": "/productionAccess",
    "/merchantAdmin/private/organization/productionAccess/:page/:limit": "/organizationslist?_page=:page&_limit=:limit",
    "/merchantAdmin/private/organizationlist": "/organizationslist",
    "/merchantAdmin/private/organizations": "/organizations",
    "/merchantAdmin/private/organization/:id": "/organizations/:id",
    "/merchantAdmin/private/organization/:id/DELETE": "/organizations/:id",
    "/merchantAdmin/private/me/UserAccount": "/UserAccount",
 */

module.exports = () => {
    function getUserApi() {
        return {
            "orgUsers": [{
                "firstName": "sridhar",
                "lastName": "masterpass",
                "userId": "8a1d7a695a6bed73015a70f2cdfa0005",
                "username": "Stage2autofeb03",
                "emailAddress": "sridhar.masterpass3+aist203@gmail.com",
                "organizationId": "fc58536e773047ef87b032ca72542137",
                "status": "REGISTERED",
                "userRole": "ADMINISTRATOR",
                "dateAdded": 1487953729000
            }]
        };
    }

    function getUserAccount() {
        return {
            "userId": "MP-Merch-Adm-RO",
            "firstName": null,
            "lastName": null,
            "email": null,
            "mcmId": null,
            "roles": ["ROLE_MASTERPASS_ADMINAPP_READ_ONLY"]
        };
    }

    function membershipApi() {
        return {
            "memberships": getMembership(),
            "organizations": getOrganization(),
            "userAccounts": getUserAccounts()
        };
    }

    function getMembership() {
        return [{
            "id": 1,
            "organizationId": "fc58536e773047ef87b032ca72542137",
            "userAccountId": "Stage2autofeb03",
            "userRole": "ADMINISTRATOR",
            "status": "CONNECTED",
            "statusDate": 1487953729000
        }];
    }

    function getOrganization() {
        return [{
            "id": 1,
            "threeDsEnabled": true,
            "businessProfileComplete": true,
            "name": "Stage2autofeb03",
            "country": "US",
            "subdivision": "US-AS",
            "type": "SERVICE_PROVIDER",
            "productionRequestStatus": null,
            "childOrganizationList": [{
                "threeDsEnabled": null,
                "id": "org2",
                "parentId": null,
                "name": "org2",
                "country": "USA",
                "subdivision": "Virginia",
                "type": "MERCHANT",
                "productionRequestStatus": null,
                "businessProfileComplete": null,
                "organizationClientInfoList": [],
                "sandboxClientId": "string",
                "productionClientId": "string",
                "childOrganizationList": []
            }],
            "organizationClientInfoList": [{
                    "environment": "PRODUCTION",
                    "orgId": "fc58536e773047ef87b032ca72542137",
                    "orgClientId": "wvureSagXKClz1dCUp6gVcAOoRG3coo40ZJCUMTOc8edff6d"
                },
                {
                    "environment": "SANDBOX",
                    "orgId": "fc58536e773047ef87b032ca72542137",
                    "orgClientId": "H_RqkdS8aqTYDH3EvNnOXPsaHKBe1UjTEqDu3Wf-7760f3f6"
                }
            ]
        }];
    }

    function getUserAccounts() {
        return [{
            "id": "Stage2autofeb03",
            "username": "Stage2autofeb03",
            "locale": "en_US",
            "contact": {
                "firstName": "sridhar",
                "lastName": "masterpass",
                "email": "sridhar.masterpass3+aist203@gmail.com",
                "phone": "3454353453"
            },
        }];
    }

    function getCountries() {
        return {
            "countries": [{
                "name": "Afghanistan",
                "alpha2": "AF",
                "alpha3": "AFG",
                "numeric": 4,
                "calling": "93",
                "sanctioned": false,
                "callingCode": "AF+93",
                "regionCode": "AI"
            }, {
                "name": "Albania",
                "alpha2": "AL",
                "alpha3": "ALB",
                "numeric": 8,
                "calling": "355",
                "sanctioned": false,
                "callingCode": "AL+355",
                "regionCode": "EM"
            }, {
                "name": "Algeria",
                "alpha2": "DZ",
                "alpha3": "DZA",
                "numeric": 12,
                "calling": "213",
                "sanctioned": false,
                "callingCode": "DZ+213",
                "regionCode": "A"
            }, {
                "name": "American Samoa",
                "alpha2": "AS",
                "alpha3": "ASM",
                "numeric": 16,
                "calling": "684",
                "sanctioned": false,
                "callingCode": "AS+684",
                "regionCode": "OP"
            }, {
                "name": "Andorra",
                "alpha2": "AD",
                "alpha3": "AND",
                "numeric": 20,
                "calling": "376",
                "sanctioned": false,
                "callingCode": "AD+376",
                "regionCode": "EM"
            }, {
                "name": "Angola",
                "alpha2": "AO",
                "alpha3": "AGO",
                "numeric": 24,
                "calling": "244",
                "sanctioned": false,
                "callingCode": "AO+244",
                "regionCode": "A"
            }, {
                "name": "Anguilla",
                "alpha2": "AI",
                "alpha3": "AIA",
                "numeric": 660,
                "calling": "264",
                "sanctioned": false,
                "callingCode": "AI+264",
                "regionCode": "CA"
            }, {
                "name": "Antigua And Barbuda",
                "alpha2": "AG",
                "alpha3": "ATG",
                "numeric": 28,
                "calling": "268",
                "sanctioned": false,
                "callingCode": "AG+268",
                "regionCode": "CA"
            }, {
                "name": "Argentina",
                "alpha2": "AR",
                "alpha3": "ARG",
                "numeric": 32,
                "calling": "54",
                "sanctioned": false,
                "callingCode": "AR+54",
                "regionCode": "SA"
            }, {
                "name": "Armenia",
                "alpha2": "AM",
                "alpha3": "ARM",
                "numeric": 51,
                "calling": "374",
                "sanctioned": false,
                "callingCode": "AM+374",
                "regionCode": "EM"
            }, {
                "name": "Aruba",
                "alpha2": "AW",
                "alpha3": "ABW",
                "numeric": 533,
                "calling": "297",
                "sanctioned": false,
                "callingCode": "AW+297",
                "regionCode": "CA"
            }, {
                "name": "Australia",
                "alpha2": "AU",
                "alpha3": "AUS",
                "numeric": 36,
                "calling": "61",
                "sanctioned": false,
                "subdivisions": [{
                        "code": "AU-ACT",
                        "name": "Australian Capital Territory"
                    },
                    {
                        "code": "AU-NSW",
                        "name": "New South Wales"
                    },
                    {
                        "code": "AU-NT",
                        "name": "Northern Territory"
                    },
                    {
                        "code": "AU-QLD",
                        "name": "Queensland"
                    },
                    {
                        "code": "AU-SA",
                        "name": "South Australia"
                    },
                    {
                        "code": "AU-TAS",
                        "name": "Tasmania"
                    },
                    {
                        "code": "AU-VIC",
                        "name": "Victoria"
                    },
                    {
                        "code": "AU-WA",
                        "name": "Western Australia"
                    }
                ],
                "callingCode": "AU+61",
                "regionCode": "OP"
            }, {
                "name": "Austria",
                "alpha2": "AT",
                "alpha3": "AUT",
                "numeric": 40,
                "calling": "43",
                "sanctioned": false,
                "callingCode": "AT+43",
                "regionCode": "EM"
            }, {
                "name": "Azerbaijan",
                "alpha2": "AZ",
                "alpha3": "AZE",
                "numeric": 31,
                "calling": "994",
                "sanctioned": false,
                "callingCode": "AZ+994",
                "regionCode": "EM"
            }, {
                "name": "Bahamas",
                "alpha2": "BS",
                "alpha3": "BHS",
                "numeric": 44,
                "calling": "242",
                "sanctioned": false,
                "callingCode": "BS+242",
                "regionCode": "CA"
            }, {
                "name": "Bahrain",
                "alpha2": "BH",
                "alpha3": "BHR",
                "numeric": 48,
                "calling": "973",
                "sanctioned": false,
                "callingCode": "BH+973",
                "regionCode": "EM"
            }, {
                "name": "Bangladesh",
                "alpha2": "BD",
                "alpha3": "BGD",
                "numeric": 50,
                "calling": "880",
                "sanctioned": false,
                "callingCode": "BD+880",
                "regionCode": "AI"
            }, {
                "name": "Barbados",
                "alpha2": "BB",
                "alpha3": "BRB",
                "numeric": 52,
                "calling": "246",
                "sanctioned": false,
                "callingCode": "BB+246",
                "regionCode": "CA"
            }, {
                "name": "Belarus",
                "alpha2": "BY",
                "alpha3": "BLR",
                "numeric": 112,
                "calling": "375",
                "sanctioned": false,
                "callingCode": "BY+375",
                "regionCode": "EM"
            }, {
                "name": "Belgium",
                "alpha2": "BE",
                "alpha3": "BEL",
                "numeric": 56,
                "calling": "32",
                "sanctioned": false,
                "callingCode": "BE+32",
                "regionCode": "EM"
            }, {
                "name": "Belize",
                "alpha2": "BZ",
                "alpha3": "BLZ",
                "numeric": 84,
                "calling": "501",
                "sanctioned": false,
                "callingCode": "BZ+501",
                "regionCode": "CA"
            }, {
                "name": "Benin",
                "alpha2": "BJ",
                "alpha3": "BEN",
                "numeric": 204,
                "calling": "229",
                "sanctioned": false,
                "callingCode": "BJ+229",
                "regionCode": "A"
            }, {
                "name": "Bermuda",
                "alpha2": "BM",
                "alpha3": "BMU",
                "numeric": 60,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "BM+1",
                "regionCode": "CA"
            }, {
                "name": "Bhutan",
                "alpha2": "BT",
                "alpha3": "BTN",
                "numeric": 64,
                "calling": "975",
                "sanctioned": false,
                "callingCode": "BT+975",
                "regionCode": "AI"
            }, {
                "name": "Bolivia",
                "alpha2": "BO",
                "alpha3": "Bol",
                "numeric": 68,
                "calling": "591",
                "sanctioned": false,
                "callingCode": "BO+591",
                "regionCode": "SA"
            }, {
                "name": "Bosnia And Herzegovina",
                "alpha2": "BA",
                "alpha3": "BIH",
                "numeric": 70,
                "calling": "387",
                "sanctioned": false,
                "callingCode": "BA+387",
                "regionCode": "EM"
            }, {
                "name": "Botswana",
                "alpha2": "BW",
                "alpha3": "BWA",
                "numeric": 72,
                "calling": "267",
                "sanctioned": false,
                "callingCode": "BW+267",
                "regionCode": "A"
            }, {
                "name": "Brazil",
                "alpha2": "BR",
                "alpha3": "BRA",
                "numeric": 76,
                "calling": "55",
                "sanctioned": false,
                "languages": [{
                    "code": "pt_BR",
                    "name": "Portuguese(BR)",
                    "cntrycode": "BR"
                }],
                "subdivisions": [{
                    "code": "BR-AC",
                    "name": "Acre"
                }, {
                    "code": "BR-AL",
                    "name": "Alagoas"
                }, {
                    "code": "BR-AP",
                    "name": "Amapá"
                }, {
                    "code": "BR-AM",
                    "name": "Amazonas"
                }, {
                    "code": "BR-BA",
                    "name": "Bahia"
                }, {
                    "code": "BR-DF",
                    "name": "Distrito Federal"
                }, {
                    "code": "BR-CE",
                    "name": " Ceará"
                }, {
                    "code": "BR-ES",
                    "name": " Espírito Santo"
                }, {
                    "code": "BR-GO",
                    "name": " Goiás"
                }, {
                    "code": "BR-MA",
                    "name": " Maranhão"
                }, {
                    "code": "BR-MT",
                    "name": " Mato Grosso"
                }, {
                    "code": "BR-MS",
                    "name": " Mato Grosso do Sul"
                }, {
                    "code": "BR-MG",
                    "name": " Minas Gerais"
                }, {
                    "code": "BR-PR",
                    "name": " Paraná"
                }, {
                    "code": "BR-PB",
                    "name": " Paraíba"
                }, {
                    "code": "BR-PA",
                    "name": " Pará"
                }, {
                    "code": "BR-PE",
                    "name": " Pernambuco"
                }, {
                    "code": "BR-PI",
                    "name": " Piauí"
                }, {
                    "code": "BR-RN",
                    "name": " Rio Grande do Norte"
                }, {
                    "code": "BR-RS",
                    "name": " Rio Grande do Sul"
                }, {
                    "code": "BR-RJ",
                    "name": " Rio de Janeiro"
                }, {
                    "code": "BR-RO",
                    "name": " Rondônia"
                }, {
                    "code": "BR-RR",
                    "name": " Roraima"
                }, {
                    "code": "BR-SC",
                    "name": " Santa Catarina"
                }, {
                    "code": "BR-SE",
                    "name": " Sergipe"
                }, {
                    "code": "BR-SP",
                    "name": " São Paulo"
                }, {
                    "code": "BR-TO",
                    "name": " Tocantins"
                }],
                "callingCode": "BR+55",
                "regionCode": "SA"
            }, {
                "name": "British Virgin Islands",
                "alpha2": "VG",
                "alpha3": "VGB",
                "numeric": 92,
                "calling": "284",
                "sanctioned": false,
                "callingCode": "VG+284",
                "regionCode": "CA"
            }, {
                "name": "Brunei Darussalam",
                "alpha2": "BN",
                "alpha3": "BRN",
                "numeric": 96,
                "calling": "673",
                "sanctioned": false,
                "callingCode": "BN+673",
                "regionCode": "AI"
            }, {
                "name": "Bulgaria",
                "alpha2": "BG",
                "alpha3": "BGR",
                "numeric": 100,
                "calling": "59",
                "sanctioned": false,
                "callingCode": "BG+59",
                "regionCode": "EM"
            }, {
                "name": "Burkina Faso",
                "alpha2": "BF",
                "alpha3": "BFA",
                "numeric": 854,
                "calling": "226",
                "sanctioned": false,
                "callingCode": "BF+226",
                "regionCode": "A"
            }, {
                "name": "Burundi",
                "alpha2": "BI",
                "alpha3": "BDI",
                "numeric": 108,
                "calling": "257",
                "sanctioned": false,
                "callingCode": "BI+257",
                "regionCode": "A"
            }, {
                "name": "Cambodia",
                "alpha2": "KH",
                "alpha3": "KHM",
                "numeric": 116,
                "calling": "855",
                "sanctioned": false,
                "callingCode": "KH+855",
                "regionCode": "AI"
            }, {
                "name": "Cameroon",
                "alpha2": "CM",
                "alpha3": "CMR",
                "numeric": 120,
                "calling": "237",
                "sanctioned": false,
                "callingCode": "CM+237",
                "regionCode": "A"
            }, {
                "name": "Canada",
                "alpha2": "CA",
                "alpha3": "CAN",
                "numeric": 124,
                "calling": "1",
                "sanctioned": false,
                "languages": [{
                    "code": "fr_CA",
                    "name": "French(CA)",
                    "cntrycode": "CA"
                }],
                "subdivisions": [{
                    "code": "CA-AB",
                    "name": "Alberta"
                }, {
                    "code": "CA-BC",
                    "name": "British Columbia"
                }, {
                    "code": "CA-MB",
                    "name": "Manitoba"
                }, {
                    "code": "CA-NB",
                    "name": "New Brunswick"
                }, {
                    "code": "CA-NL",
                    "name": "Newfoundland and Labrador"
                }, {
                    "code": "CA-NT",
                    "name": "Northwest Territories"
                }, {
                    "code": "CA-NS",
                    "name": "Nova Scotia"
                }, {
                    "code": "CA-NU",
                    "name": "Nunavaut"
                }, {
                    "code": "CA-ON",
                    "name": "Ontario"
                }, {
                    "code": "CA-PE",
                    "name": "Prince Edward Island"
                }, {
                    "code": "CA-QC",
                    "name": "Quebec"
                }, {
                    "code": "CA-SK",
                    "name": "Saskatchewan"
                }, {
                    "code": "CA-YT",
                    "name": "Yukon"
                }],
                "callingCode": "CA+1",
                "regionCode": "NA"
            }, {
                "name": "Cape Verde",
                "alpha2": "CV",
                "alpha3": "CPV",
                "numeric": 132,
                "calling": "238",
                "sanctioned": false,
                "callingCode": "CV+238",
                "regionCode": "A"
            }, {
                "name": "Cayman Islands",
                "alpha2": "KY",
                "alpha3": "CYM",
                "numeric": 136,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "KY+1",
                "regionCode": "CA"
            }, {
                "name": "Central African Republic",
                "alpha2": "CF",
                "alpha3": "CAF",
                "numeric": 140,
                "calling": "236",
                "sanctioned": false,
                "callingCode": "CF+236",
                "regionCode": "A"
            }, {
                "name": "Chad",
                "alpha2": "TD",
                "alpha3": "TCD",
                "numeric": 148,
                "calling": "235",
                "sanctioned": false,
                "callingCode": "TD+235",
                "regionCode": "A"
            }, {
                "name": "Chile",
                "alpha2": "CL",
                "alpha3": "CHL",
                "numeric": 152,
                "calling": "56",
                "sanctioned": false,
                "callingCode": "CL+56",
                "regionCode": "SA"
            }, {
                "name": "China",
                "alpha2": "CN",
                "alpha3": "CHN",
                "numeric": 156,
                "calling": "86",
                "sanctioned": false,
                "languages": [{
                    "code": "zh_CN",
                    "name": "Chinese(CN)",
                    "cntrycode": "CN"
                }],
                "callingCode": "CN+86",
                "regionCode": "AI"
            }, {
                "name": "Christmas Island",
                "alpha2": "CX",
                "alpha3": "CXR",
                "numeric": 162,
                "calling": "61",
                "sanctioned": false,
                "callingCode": "CX+61",
                "regionCode": "OP"
            }, {
                "name": "Cocos (Keeling) Islands",
                "alpha2": "CC",
                "alpha3": "CCK",
                "numeric": 166,
                "calling": "891",
                "sanctioned": false,
                "callingCode": "CC+891",
                "regionCode": "OP"
            }, {
                "name": "Colombia",
                "alpha2": "CO",
                "alpha3": "COL",
                "numeric": 170,
                "calling": "57",
                "sanctioned": false,
                "callingCode": "CO+57",
                "regionCode": "SA"
            }, {
                "name": "Congo (Brazzaville)",
                "alpha2": "CG",
                "alpha3": "COG",
                "numeric": 178,
                "calling": "242",
                "sanctioned": false,
                "callingCode": "CG+242",
                "regionCode": "A"
            }, {
                "name": "Cook Islands",
                "alpha2": "CK",
                "alpha3": "COK",
                "numeric": 184,
                "calling": "682",
                "sanctioned": false,
                "callingCode": "CK+682",
                "regionCode": "OP"
            }, {
                "name": "Costa Rica",
                "alpha2": "CR",
                "alpha3": "CRI",
                "numeric": 188,
                "calling": "506",
                "sanctioned": false,
                "callingCode": "CR+506",
                "regionCode": "CA"
            }, {
                "name": "Croatia",
                "alpha2": "HR",
                "alpha3": "HRV",
                "numeric": 191,
                "calling": "385",
                "sanctioned": false,
                "callingCode": "HR+385",
                "regionCode": "EM"
            }, {
                "name": "Cuba",
                "alpha2": "CU",
                "alpha3": "CUB",
                "numeric": 192,
                "calling": "53",
                "sanctioned": true,
                "callingCode": "CU+53",
                "regionCode": "SA"
            }, {
                "name": "Cyprus",
                "alpha2": "CY",
                "alpha3": "CYP",
                "numeric": 196,
                "calling": "357",
                "sanctioned": false,
                "callingCode": "CY+357",
                "regionCode": "EM"
            }, {
                "name": "Czech Republic",
                "alpha2": "CZ",
                "alpha3": "CZE",
                "numeric": 203,
                "calling": "420",
                "sanctioned": false,
                "callingCode": "CZ+420",
                "regionCode": "EM"
            }, {
                "name": "Côte D'Ivoire",
                "alpha2": "CI",
                "alpha3": "CIV",
                "numeric": 384,
                "calling": "225",
                "sanctioned": false,
                "callingCode": "CI+225",
                "regionCode": "A"
            }, {
                "name": "Democratic Republic Of The Congo",
                "alpha2": "CD",
                "alpha3": "COD",
                "numeric": 180,
                "calling": "243",
                "sanctioned": false,
                "callingCode": "CD+243",
                "regionCode": "A"
            }, {
                "name": "Denmark",
                "alpha2": "DK",
                "alpha3": "DNK",
                "numeric": 208,
                "calling": "45",
                "sanctioned": false,
                "callingCode": "DK+45",
                "regionCode": "EM"
            }, {
                "name": "Djibouti",
                "alpha2": "DJ",
                "alpha3": "DJI",
                "numeric": 262,
                "calling": "253",
                "sanctioned": false,
                "callingCode": "DJ+253",
                "regionCode": "A"
            }, {
                "name": "Dominica",
                "alpha2": "DM",
                "alpha3": "DMA",
                "numeric": 212,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "DM+1",
                "regionCode": "CA"
            }, {
                "name": "Dominican Republic",
                "alpha2": "DO",
                "alpha3": "DOM",
                "numeric": 214,
                "calling": "809",
                "sanctioned": false,
                "callingCode": "DO+809",
                "regionCode": "CA"
            }, {
                "name": "Ecuador",
                "alpha2": "EC",
                "alpha3": "ECU",
                "numeric": 218,
                "calling": "593",
                "sanctioned": false,
                "callingCode": "EC+593",
                "regionCode": "SA"
            }, {
                "name": "Egypt",
                "alpha2": "EG",
                "alpha3": "EGY",
                "numeric": 818,
                "calling": "20",
                "sanctioned": false,
                "callingCode": "EG+20",
                "regionCode": "A"
            }, {
                "name": "El Salvador",
                "alpha2": "SV",
                "alpha3": "SLV",
                "numeric": 222,
                "calling": "503",
                "sanctioned": false,
                "callingCode": "SV+503",
                "regionCode": "CA"
            }, {
                "name": "Equatorial Guinea",
                "alpha2": "GQ",
                "alpha3": "GNQ",
                "numeric": 226,
                "calling": "240",
                "sanctioned": false,
                "callingCode": "GQ+240",
                "regionCode": "A"
            }, {
                "name": "Eritrea",
                "alpha2": "ER",
                "alpha3": "ERI",
                "numeric": 232,
                "calling": "291",
                "sanctioned": false,
                "callingCode": "ER+291",
                "regionCode": "A"
            }, {
                "name": "Estonia",
                "alpha2": "EE",
                "alpha3": "EST",
                "numeric": 233,
                "calling": "372",
                "sanctioned": false,
                "callingCode": "EE+372",
                "regionCode": "EM"
            }, {
                "name": "Ethiopia",
                "alpha2": "ET",
                "alpha3": "ETH",
                "numeric": 231,
                "calling": "251",
                "sanctioned": false,
                "callingCode": "ET+251",
                "regionCode": "A"
            }, {
                "name": "Faroe Islands",
                "alpha2": "FO",
                "alpha3": "FRO",
                "numeric": 234,
                "calling": "298",
                "sanctioned": false,
                "callingCode": "FO+298",
                "regionCode": "EM"
            }, {
                "name": "Federated States Of Micronesia",
                "alpha2": "FM",
                "alpha3": "FSM",
                "numeric": 583,
                "calling": "691",
                "sanctioned": false,
                "callingCode": "FM+691",
                "regionCode": "OP"
            }, {
                "name": "Fiji",
                "alpha2": "FJ",
                "alpha3": "FJI",
                "numeric": 242,
                "calling": "679",
                "sanctioned": false,
                "callingCode": "FJ+679",
                "regionCode": "OP"
            }, {
                "name": "Finland",
                "alpha2": "FI",
                "alpha3": "FIN",
                "numeric": 246,
                "calling": "358",
                "sanctioned": false,
                "callingCode": "FI+358",
                "regionCode": "EM"
            }, {
                "name": "France",
                "alpha2": "FR",
                "alpha3": "FRA",
                "numeric": 250,
                "calling": "33",
                "sanctioned": false,
                "callingCode": "FR+33",
                "regionCode": "EM"
            }, {
                "name": "French Guiana",
                "alpha2": "GF",
                "alpha3": "GUF",
                "numeric": 254,
                "calling": "594",
                "sanctioned": false,
                "callingCode": "GF+594",
                "regionCode": "SA"
            }, {
                "name": "French Polynesia",
                "alpha2": "PF",
                "alpha3": "PYF",
                "numeric": 258,
                "calling": "689",
                "sanctioned": false,
                "callingCode": "PF+689",
                "regionCode": "OP"
            }, {
                "name": "Gabon",
                "alpha2": "GA",
                "alpha3": "GAB",
                "numeric": 266,
                "calling": "241",
                "sanctioned": false,
                "callingCode": "GA+241",
                "regionCode": "A"
            }, {
                "name": "Gambia",
                "alpha2": "GM",
                "alpha3": "GMB",
                "numeric": 270,
                "calling": "220",
                "sanctioned": false,
                "callingCode": "GM+220",
                "regionCode": "A"
            }, {
                "name": "Georgia",
                "alpha2": "GE",
                "alpha3": "GEO",
                "numeric": 268,
                "calling": "995",
                "sanctioned": false,
                "callingCode": "GE+995",
                "regionCode": "EM"
            }, {
                "name": "Germany",
                "alpha2": "DE",
                "alpha3": "DEU",
                "numeric": 276,
                "calling": "49",
                "sanctioned": false,
                "callingCode": "DE+49",
                "regionCode": "EM"
            }, {
                "name": "Ghana",
                "alpha2": "GH",
                "alpha3": "GHA",
                "numeric": 288,
                "calling": "233",
                "sanctioned": false,
                "callingCode": "GH+233",
                "regionCode": "A"
            }, {
                "name": "Gibraltar",
                "alpha2": "GI",
                "alpha3": "GIB",
                "numeric": 292,
                "calling": "350",
                "sanctioned": false,
                "callingCode": "GI+350",
                "regionCode": "EM"
            }, {
                "name": "Greece",
                "alpha2": "GR",
                "alpha3": "GRC",
                "numeric": 300,
                "calling": "30",
                "sanctioned": false,
                "callingCode": "GR+30",
                "regionCode": "EM"
            }, {
                "name": "Greenland",
                "alpha2": "GL",
                "alpha3": "GRL",
                "numeric": 304,
                "calling": "299",
                "sanctioned": false,
                "callingCode": "GL+299",
                "regionCode": "EM"
            }, {
                "name": "Grenada",
                "alpha2": "GD",
                "alpha3": "GRD",
                "numeric": 308,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "GD+1",
                "regionCode": "CA"
            }, {
                "name": "Guadeloupe",
                "alpha2": "GP",
                "alpha3": "GLP",
                "numeric": 312,
                "calling": "590",
                "sanctioned": false,
                "callingCode": "GP+590",
                "regionCode": "CA"
            }, {
                "name": "Guam",
                "alpha2": "GU",
                "alpha3": "GUM",
                "numeric": 316,
                "calling": "671",
                "sanctioned": false,
                "callingCode": "GU+671",
                "regionCode": "OP"
            }, {
                "name": "Guatemala",
                "alpha2": "GT",
                "alpha3": "GTM",
                "numeric": 320,
                "calling": "502",
                "sanctioned": false,
                "callingCode": "GT+502",
                "regionCode": "CA"
            }, {
                "name": "Guinea",
                "alpha2": "GN",
                "alpha3": "GIN",
                "numeric": 324,
                "calling": "224",
                "sanctioned": false,
                "callingCode": "GN+224",
                "regionCode": "A"
            }, {
                "name": "Guinea-Bissau",
                "alpha2": "GW",
                "alpha3": "GNB",
                "numeric": 624,
                "calling": "245",
                "sanctioned": false,
                "callingCode": "GW+245",
                "regionCode": "A"
            }, {
                "name": "Guyana",
                "alpha2": "GY",
                "alpha3": "GUY",
                "numeric": 328,
                "calling": "592",
                "sanctioned": false,
                "callingCode": "GY+592",
                "regionCode": "SA"
            }, {
                "name": "Haiti",
                "alpha2": "HT",
                "alpha3": "HTI",
                "numeric": 332,
                "calling": "509",
                "sanctioned": false,
                "callingCode": "HT+509",
                "regionCode": "CA"
            }, {
                "name": "Holy See (Vatican City State)",
                "alpha2": "VA",
                "alpha3": "VAT",
                "numeric": 336,
                "calling": "379",
                "sanctioned": false,
                "callingCode": "VA+379",
                "regionCode": "EM"
            }, {
                "name": "Honduras",
                "alpha2": "HN",
                "alpha3": "HND",
                "numeric": 340,
                "calling": "504",
                "sanctioned": false,
                "callingCode": "HN+504",
                "regionCode": "CA"
            }, {
                "name": "Hong Kong",
                "alpha2": "HK",
                "alpha3": "HKG",
                "numeric": 344,
                "calling": "852",
                "sanctioned": false,
                "languages": [{
                    "code": "zh_HK",
                    "name": "Chinese(HK)",
                    "cntrycode": "HK"
                }],
                "callingCode": "HK+852",
                "regionCode": "AI"
            }, {
                "name": "Hungary",
                "alpha2": "HU",
                "alpha3": "HUN",
                "numeric": 348,
                "calling": "36",
                "sanctioned": false,
                "callingCode": "HU+36",
                "regionCode": "EM"
            }, {
                "name": "Iceland",
                "alpha2": "IS",
                "alpha3": "ISL",
                "numeric": 352,
                "calling": "354",
                "sanctioned": false,
                "callingCode": "IS+354",
                "regionCode": "EM"
            }, {
                "name": "India",
                "alpha2": "IN",
                "alpha3": "IND",
                "numeric": 356,
                "calling": "91",
                "sanctioned": false,
                "callingCode": "IN+91",
                "regionCode": "AI"
            }, {
                "name": "Indonesia",
                "alpha2": "ID",
                "alpha3": "IDN",
                "numeric": 360,
                "calling": "62",
                "sanctioned": false,
                "callingCode": "ID+62",
                "regionCode": "AI"
            }, {
                "name": "Iraq",
                "alpha2": "IQ",
                "alpha3": "IRQ",
                "numeric": 368,
                "calling": "964",
                "sanctioned": false,
                "callingCode": "IQ+964",
                "regionCode": "EM"
            }, {
                "name": "Ireland",
                "alpha2": "IE",
                "alpha3": "IRL",
                "numeric": 458,
                "calling": "353",
                "sanctioned": false,
                "callingCode": "IE+353",
                "regionCode": "EM"
            }, {
                "name": "Islamic Republic Of Iran",
                "alpha2": "IR",
                "alpha3": "IRN",
                "numeric": 364,
                "calling": "98",
                "sanctioned": true,
                "callingCode": "IR+98",
                "regionCode": "EM"
            }, {
                "name": "Israel",
                "alpha2": "IL",
                "alpha3": "ISR",
                "numeric": 276,
                "calling": "972",
                "sanctioned": false,
                "callingCode": "IL+972",
                "regionCode": "EM"
            }, {
                "name": "Italy",
                "alpha2": "IT",
                "alpha3": "ITA",
                "numeric": 380,
                "calling": "39",
                "sanctioned": false,
                "callingCode": "IT+39",
                "regionCode": "EM"
            }, {
                "name": "Jamaica",
                "alpha2": "JM",
                "alpha3": "JAM",
                "numeric": 388,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "JM+1",
                "regionCode": "CA"
            }, {
                "name": "Japan",
                "alpha2": "JP",
                "alpha3": "JPN",
                "numeric": 392,
                "calling": "81",
                "sanctioned": false,
                "languages": [{
                    "code": "ja_JP",
                    "name": "Japanese(JP)",
                    "cntrycode": "JP"
                }],
                "subdivisions": [{
                    "code": "JP-23",
                    "name": "Aichi"
                }, {
                    "code": "JP-05",
                    "name": "Akita"
                }, {
                    "code": "JP-02",
                    "name": "Aomori"
                }, {
                    "code": "JP-12",
                    "name": "Chiba"
                }, {
                    "code": "JP-38",
                    "name": "Ehime"
                }, {
                    "code": "JP-18",
                    "name": "Fukui"
                }, {
                    "code": "JP-40",
                    "name": "Fukuoka"
                }, {
                    "code": "JP-07",
                    "name": "Fukushima"
                }, {
                    "code": "JP-21",
                    "name": "Gifu"
                }, {
                    "code": "JP-10",
                    "name": "Gunma"
                }, {
                    "code": "JP-34",
                    "name": "Hiroshima"
                }, {
                    "code": "JP-01",
                    "name": "Hokkaido"
                }, {
                    "code": "JP-28",
                    "name": "Hyogo"
                }, {
                    "code": "JP-08",
                    "name": "Ibaraki"
                }, {
                    "code": "JP-17",
                    "name": "Ishikawa"
                }, {
                    "code": "JP-03",
                    "name": "Iwate"
                }, {
                    "code": "JP-37",
                    "name": "Kagawa"
                }, {
                    "code": "JP-46",
                    "name": "Kagoshima"
                }, {
                    "code": "JP-14",
                    "name": "Kanagawa"
                }, {
                    "code": "JP-39",
                    "name": "Kochi"
                }, {
                    "code": "JP-43",
                    "name": "Kumamoto"
                }, {
                    "code": "JP-26",
                    "name": "Kyoto"
                }, {
                    "code": "JP-24",
                    "name": "Mie"
                }, {
                    "code": "JP-04",
                    "name": "Miyagi"
                }, {
                    "code": "JP-45",
                    "name": "Miyazaki"
                }, {
                    "code": "JP-20",
                    "name": "Nagano"
                }, {
                    "code": "JP-42",
                    "name": "Nagasaki"
                }, {
                    "code": "JP-29",
                    "name": "Nara"
                }, {
                    "code": "JP-15",
                    "name": "Niigata"
                }, {
                    "code": "JP-44",
                    "name": "Oita"
                }, {
                    "code": "JP-33",
                    "name": "Okayama"
                }, {
                    "code": "JP-47",
                    "name": "Okinawa"
                }, {
                    "code": "JP-27",
                    "name": "Osaka"
                }, {
                    "code": "JP-41",
                    "name": "Saga"
                }, {
                    "code": "JP-11",
                    "name": "Saitama"
                }, {
                    "code": "JP-25",
                    "name": "Shiga"
                }, {
                    "code": "JP-32",
                    "name": "Shimane"
                }, {
                    "code": "JP-22",
                    "name": "Shizuoka"
                }, {
                    "code": "JP-09",
                    "name": "Tochigi"
                }, {
                    "code": "JP-36",
                    "name": "Tokushima"
                }, {
                    "code": "JP-13",
                    "name": "Tokyo"
                }, {
                    "code": "JP-31",
                    "name": "Tottori"
                }, {
                    "code": "JP-16",
                    "name": "Toyama"
                }, {
                    "code": "JP-30",
                    "name": "Wakayama"
                }, {
                    "code": "JP-06",
                    "name": "Yamagata"
                }, {
                    "code": "JP-35",
                    "name": "Yamaguchi"
                }, {
                    "code": "JP-19",
                    "name": "Yamanashi"
                }],
                "callingCode": "JP+81",
                "regionCode": "AI"
            }, {
                "name": "Jordan",
                "alpha2": "JO",
                "alpha3": "JOR",
                "numeric": 400,
                "calling": "962",
                "sanctioned": false,
                "callingCode": "JO+962",
                "regionCode": "EM"
            }, {
                "name": "Kazakhstan",
                "alpha2": "KZ",
                "alpha3": "KAZ",
                "numeric": 398,
                "calling": "7",
                "sanctioned": false,
                "callingCode": "KZ+7",
                "regionCode": "EM"
            }, {
                "name": "Kenya",
                "alpha2": "KE",
                "alpha3": "KEN",
                "numeric": 404,
                "calling": "254",
                "sanctioned": false,
                "callingCode": "KE+254",
                "regionCode": "A"
            }, {
                "name": "Kiribati",
                "alpha2": "KI",
                "alpha3": "KIR",
                "numeric": 296,
                "calling": "686",
                "sanctioned": false,
                "callingCode": "KI+686",
                "regionCode": "OP"
            }, {
                "name": "Kuwait",
                "alpha2": "KW",
                "alpha3": "KWT",
                "numeric": 414,
                "calling": "965",
                "sanctioned": false,
                "callingCode": "KW+965",
                "regionCode": "EM"
            }, {
                "name": "Kyrgyzstan",
                "alpha2": "KG",
                "alpha3": "KGZ",
                "numeric": 417,
                "calling": "996",
                "sanctioned": false,
                "callingCode": "KG+996",
                "regionCode": "AI"
            }, {
                "name": "Lao Pdr",
                "alpha2": "LA",
                "alpha3": "LAO",
                "numeric": 418,
                "calling": "856",
                "sanctioned": false,
                "callingCode": "LA+856",
                "regionCode": "AI"
            }, {
                "name": "Latvia",
                "alpha2": "LV",
                "alpha3": "LVA",
                "numeric": 428,
                "calling": "371",
                "sanctioned": false,
                "callingCode": "LV+371",
                "regionCode": "EM"
            }, {
                "name": "Lebanon",
                "alpha2": "LB",
                "alpha3": "LBN",
                "numeric": 422,
                "calling": "961",
                "sanctioned": false,
                "callingCode": "LB+961",
                "regionCode": "EM"
            }, {
                "name": "Lesotho",
                "alpha2": "LS",
                "alpha3": "LSO",
                "numeric": 426,
                "calling": "266",
                "sanctioned": false,
                "callingCode": "LS+266",
                "regionCode": "A"
            }, {
                "name": "Liberia",
                "alpha2": "LR",
                "alpha3": "LBR",
                "numeric": 430,
                "calling": "231",
                "sanctioned": false,
                "callingCode": "LR+231",
                "regionCode": "A"
            }, {
                "name": "Libya",
                "alpha2": "LY",
                "alpha3": "LBY",
                "numeric": 434,
                "calling": "218",
                "sanctioned": false,
                "callingCode": "LY+218",
                "regionCode": "A"
            }, {
                "name": "Liechtenstein",
                "alpha2": "LI",
                "alpha3": "LIE",
                "numeric": 438,
                "calling": "423",
                "sanctioned": false,
                "callingCode": "LI+423",
                "regionCode": "EM"
            }, {
                "name": "Lithuania",
                "alpha2": "LT",
                "alpha3": "LTU",
                "numeric": 440,
                "calling": "370",
                "sanctioned": false,
                "callingCode": "LT+370",
                "regionCode": "EM"
            }, {
                "name": "Luxembourg",
                "alpha2": "LU",
                "alpha3": "LUX",
                "numeric": 442,
                "calling": "352",
                "sanctioned": false,
                "callingCode": "LU+352",
                "regionCode": "EM"
            }, {
                "name": "Macao, Special Administrative Region Of China",
                "alpha2": "MO",
                "alpha3": "MAC",
                "numeric": 446,
                "calling": "853",
                "sanctioned": false,
                "callingCode": "MO+853",
                "regionCode": "AI"
            }, {
                "name": "Madagascar",
                "alpha2": "MG",
                "alpha3": "MDG",
                "numeric": 450,
                "calling": "261",
                "sanctioned": false,
                "callingCode": "MG+261",
                "regionCode": "A"
            }, {
                "name": "Malawi",
                "alpha2": "MW",
                "alpha3": "MWI",
                "numeric": 454,
                "calling": "265",
                "sanctioned": false,
                "callingCode": "MW+265",
                "regionCode": "A"
            }, {
                "name": "Malaysia",
                "alpha2": "MY",
                "alpha3": "MYS",
                "numeric": 458,
                "calling": "60",
                "sanctioned": false,
                "callingCode": "MY+60",
                "regionCode": "AI"
            }, {
                "name": "Maldives",
                "alpha2": "MV",
                "alpha3": "MDV",
                "numeric": 462,
                "calling": "960",
                "sanctioned": false,
                "callingCode": "MV+960",
                "regionCode": "AI"
            }, {
                "name": "Mali",
                "alpha2": "ML",
                "alpha3": "MLI",
                "numeric": 466,
                "calling": "223",
                "sanctioned": false,
                "callingCode": "ML+223",
                "regionCode": "A"
            }, {
                "name": "Malta",
                "alpha2": "MT",
                "alpha3": "MLT",
                "numeric": 470,
                "calling": "356",
                "sanctioned": false,
                "callingCode": "MT+356",
                "regionCode": "EM"
            }, {
                "name": "Marshall Islands",
                "alpha2": "MH",
                "alpha3": "MHL",
                "numeric": 584,
                "calling": "692",
                "sanctioned": false,
                "callingCode": "MH+692",
                "regionCode": "OP"
            }, {
                "name": "Martinique",
                "alpha2": "MQ",
                "alpha3": "MTQ",
                "numeric": 474,
                "calling": "596",
                "sanctioned": false,
                "callingCode": "MQ+596",
                "regionCode": "CA"
            }, {
                "name": "Mauritania",
                "alpha2": "MR",
                "alpha3": "MRT",
                "numeric": 478,
                "calling": "222",
                "sanctioned": false,
                "callingCode": "MR+222",
                "regionCode": "A"
            }, {
                "name": "Mauritius",
                "alpha2": "MU",
                "alpha3": "MUS",
                "numeric": 480,
                "calling": "230",
                "sanctioned": false,
                "callingCode": "MU+230",
                "regionCode": "A"
            }, {
                "name": "Mexico",
                "alpha2": "MX",
                "alpha3": "MEX",
                "numeric": 484,
                "calling": "52",
                "sanctioned": false,
                "languages": [{
                    "code": "es_MX",
                    "name": "Spanish(MX)",
                    "cntrycode": "MX"
                }],
                "callingCode": "MX+52",
                "regionCode": "NA"
            }, {
                "name": "Moldova",
                "alpha2": "MD",
                "alpha3": "MDA",
                "numeric": 498,
                "calling": "373",
                "sanctioned": false,
                "callingCode": "MD+373",
                "regionCode": "EM"
            }, {
                "name": "Monaco",
                "alpha2": "MC",
                "alpha3": "MCO",
                "numeric": 492,
                "calling": "377",
                "sanctioned": false,
                "callingCode": "MC+377",
                "regionCode": "EM"
            }, {
                "name": "Mongolia",
                "alpha2": "MN",
                "alpha3": "MNG",
                "numeric": 496,
                "calling": "976",
                "sanctioned": false,
                "callingCode": "MN+976",
                "regionCode": "AI"
            }, {
                "name": "Montenegro",
                "alpha2": "ME",
                "alpha3": "MNE",
                "numeric": 499,
                "calling": "382",
                "sanctioned": false,
                "callingCode": "ME+382",
                "regionCode": "EM"
            }, {
                "name": "Montserrat",
                "alpha2": "MS",
                "alpha3": "MSR",
                "numeric": 500,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "MS+1",
                "regionCode": "CA"
            }, {
                "name": "Morocco",
                "alpha2": "MA",
                "alpha3": "MAR",
                "numeric": 504,
                "calling": "212",
                "sanctioned": false,
                "callingCode": "MA+212",
                "regionCode": "A"
            }, {
                "name": "Mozambique",
                "alpha2": "MZ",
                "alpha3": "MOZ",
                "numeric": 508,
                "calling": "258",
                "sanctioned": false,
                "callingCode": "MZ+258",
                "regionCode": "A"
            }, {
                "name": "Namibia",
                "alpha2": "NA",
                "alpha3": "NAM",
                "numeric": 516,
                "calling": "264",
                "sanctioned": false,
                "callingCode": "NA+264",
                "regionCode": "A"
            }, {
                "name": "Nepal",
                "alpha2": "NP",
                "alpha3": "NPL",
                "numeric": 524,
                "calling": "977",
                "sanctioned": false,
                "callingCode": "NP+977",
                "regionCode": "AI"
            }, {
                "name": "Netherlands",
                "alpha2": "NL",
                "alpha3": "NLD",
                "numeric": 528,
                "calling": "31",
                "sanctioned": false,
                "callingCode": "NL+31",
                "regionCode": "EM"
            }, {
                "name": "New Caledonia",
                "alpha2": "NC",
                "alpha3": "NCL",
                "numeric": 540,
                "calling": "687",
                "sanctioned": false,
                "callingCode": "NC+687",
                "regionCode": "OP"
            }, {
                "name": "New Zealand",
                "alpha2": "NZ",
                "alpha3": "NZL",
                "numeric": 554,
                "calling": "64",
                "sanctioned": false,
                "callingCode": "NZ+64",
                "regionCode": "OP"
            }, {
                "name": "Nicaragua",
                "alpha2": "NI",
                "alpha3": "NIC",
                "numeric": 558,
                "calling": "505",
                "sanctioned": false,
                "callingCode": "NI+505",
                "regionCode": "CA"
            }, {
                "name": "Niger",
                "alpha2": "NE",
                "alpha3": "NER",
                "numeric": 562,
                "calling": "227",
                "sanctioned": false,
                "callingCode": "NE+227",
                "regionCode": "A"
            }, {
                "name": "Nigeria",
                "alpha2": "NG",
                "alpha3": "NGA",
                "numeric": 566,
                "calling": "234",
                "sanctioned": false,
                "callingCode": "NG+234",
                "regionCode": "A"
            }, {
                "name": "Norfolk Island",
                "alpha2": "NF",
                "alpha3": "NFK",
                "numeric": 574,
                "calling": "672",
                "sanctioned": false,
                "callingCode": "NF+672",
                "regionCode": "OP"
            }, {
                "name": "North Korea",
                "alpha2": "KP",
                "alpha3": "PRK",
                "numeric": 408,
                "calling": "850",
                "sanctioned": true,
                "callingCode": "KP+850",
                "regionCode": "AI"
            }, {
                "name": "Northern Mariana Islands",
                "alpha2": "MP",
                "alpha3": "MNP",
                "numeric": 580,
                "calling": "670",
                "sanctioned": false,
                "callingCode": "MP+670",
                "regionCode": "OP"
            }, {
                "name": "Norway",
                "alpha2": "NO",
                "alpha3": "NOR",
                "numeric": 578,
                "calling": "47",
                "sanctioned": false,
                "callingCode": "NO+47",
                "regionCode": "EM"
            }, {
                "name": "Oman",
                "alpha2": "OM",
                "alpha3": "OMN",
                "numeric": 512,
                "calling": "968",
                "sanctioned": false,
                "callingCode": "OM+968",
                "regionCode": "EM"
            }, {
                "name": "Pakistan",
                "alpha2": "PK",
                "alpha3": "PAK",
                "numeric": 586,
                "calling": "92",
                "sanctioned": false,
                "callingCode": "PK+92",
                "regionCode": "AI"
            }, {
                "name": "Palau",
                "alpha2": "PW",
                "alpha3": "PLW",
                "numeric": 585,
                "calling": "680",
                "sanctioned": false,
                "callingCode": "PW+680",
                "regionCode": "OP"
            }, {
                "name": "Panama",
                "alpha2": "PA",
                "alpha3": "PAN",
                "numeric": 591,
                "calling": "507",
                "sanctioned": false,
                "callingCode": "PA+507",
                "regionCode": "CA"
            }, {
                "name": "Papua New Guinea",
                "alpha2": "PG",
                "alpha3": "PNG",
                "numeric": 598,
                "calling": "675",
                "sanctioned": false,
                "callingCode": "PG+675",
                "regionCode": "OP"
            }, {
                "name": "Paraguay",
                "alpha2": "PY",
                "alpha3": "PRY",
                "numeric": 600,
                "calling": "595",
                "sanctioned": false,
                "callingCode": "PY+595",
                "regionCode": "SA"
            }, {
                "name": "Peru",
                "alpha2": "PE",
                "alpha3": "PER",
                "numeric": 604,
                "calling": "51",
                "sanctioned": false,
                "callingCode": "PE+51",
                "regionCode": "SA"
            }, {
                "name": "Philippines",
                "alpha2": "PH",
                "alpha3": "PHL",
                "numeric": 608,
                "calling": "63",
                "sanctioned": false,
                "callingCode": "PH+63",
                "regionCode": "AI"
            }, {
                "name": "Poland",
                "alpha2": "PL",
                "alpha3": "POL",
                "numeric": 616,
                "calling": "48",
                "sanctioned": false,
                "callingCode": "PL+48",
                "regionCode": "EM"
            }, {
                "name": "Portugal",
                "alpha2": "PT",
                "alpha3": "PRT",
                "numeric": 620,
                "calling": "351",
                "sanctioned": false,
                "callingCode": "PT+351",
                "regionCode": "EM"
            }, {
                "name": "Province Of China Taiwan",
                "alpha2": "TW",
                "alpha3": "TWN",
                "numeric": 158,
                "calling": "886",
                "sanctioned": false,
                "callingCode": "TW+886",
                "regionCode": "AI"
            }, {
                "name": "Puerto Rico",
                "alpha2": "PR",
                "alpha3": "PRI",
                "numeric": 630,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "PR+1",
                "regionCode": "CA"
            }, {
                "name": "Qatar",
                "alpha2": "QA",
                "alpha3": "QAT",
                "numeric": 634,
                "calling": "974",
                "sanctioned": false,
                "callingCode": "QA+974",
                "regionCode": "EM"
            }, {
                "name": "Republic Of Korea",
                "alpha2": "KR",
                "alpha3": "KOR",
                "numeric": 410,
                "calling": "82",
                "sanctioned": false,
                "callingCode": "KR+82",
                "regionCode": "AI"
            }, {
                "name": "Republic Of Macedonia",
                "alpha2": "MK",
                "alpha3": "MKD",
                "numeric": 807,
                "calling": "389",
                "sanctioned": false,
                "callingCode": "MK+389",
                "regionCode": "EM"
            }, {
                "name": "Romania",
                "alpha2": "RO",
                "alpha3": "ROM",
                "numeric": 642,
                "calling": "40",
                "sanctioned": false,
                "callingCode": "RO+40",
                "regionCode": "EM"
            }, {
                "name": "Russian Federation",
                "alpha2": "RU",
                "alpha3": "RUS",
                "numeric": 643,
                "calling": "7",
                "sanctioned": false,
                "callingCode": "RU+7",
                "regionCode": "EM"
            }, {
                "name": "Rwanda",
                "alpha2": "RW",
                "alpha3": "RWA",
                "numeric": 646,
                "calling": "250",
                "sanctioned": false,
                "callingCode": "RW+250",
                "regionCode": "A"
            }, {
                "name": "Réunion",
                "alpha2": "RE",
                "alpha3": "REU",
                "numeric": 638,
                "calling": "262",
                "sanctioned": false,
                "callingCode": "RE+262",
                "regionCode": "A"
            }, {
                "name": "Saint Kitts And Nevis",
                "alpha2": "KN",
                "alpha3": "KNA",
                "numeric": 659,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "KN+1",
                "regionCode": "CA"
            }, {
                "name": "Saint Lucia",
                "alpha2": "LC",
                "alpha3": "LCA",
                "numeric": 662,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "LC+1",
                "regionCode": "CA"
            }, {
                "name": "San Marino",
                "alpha2": "SM",
                "alpha3": "SMR",
                "numeric": 674,
                "calling": "378",
                "sanctioned": false,
                "callingCode": "SM+378",
                "regionCode": "EM"
            }, {
                "name": "Saudi Arabia",
                "alpha2": "SA",
                "alpha3": "SAU",
                "numeric": 682,
                "calling": "966",
                "sanctioned": false,
                "callingCode": "SA+966",
                "regionCode": "EM"
            }, {
                "name": "Senegal",
                "alpha2": "SN",
                "alpha3": "SEN",
                "numeric": 686,
                "calling": "221",
                "sanctioned": false,
                "callingCode": "SN+221",
                "regionCode": "A"
            }, {
                "name": "Serbia",
                "alpha2": "RS",
                "alpha3": "SRB",
                "numeric": 688,
                "calling": "381",
                "sanctioned": false,
                "callingCode": "RS+381",
                "regionCode": "EM"
            }, {
                "name": "Seychelles",
                "alpha2": "SC",
                "alpha3": "SYC",
                "numeric": 690,
                "calling": "248",
                "sanctioned": false,
                "callingCode": "SC+248",
                "regionCode": "A"
            }, {
                "name": "Sierra Leone",
                "alpha2": "SL",
                "alpha3": "SLE",
                "numeric": 694,
                "calling": "232",
                "sanctioned": false,
                "callingCode": "SL+232",
                "regionCode": "A"
            }, {
                "name": "Singapore",
                "alpha2": "SG",
                "alpha3": "SGP",
                "numeric": 702,
                "calling": "65",
                "sanctioned": false,
                "callingCode": "SG+65",
                "regionCode": "AI"
            }, {
                "name": "Slovakia",
                "alpha2": "SK",
                "alpha3": "SVK",
                "numeric": 703,
                "calling": "421",
                "sanctioned": false,
                "callingCode": "SK+421",
                "regionCode": "EM"
            }, {
                "name": "Slovenia",
                "alpha2": "SI",
                "alpha3": "SVN",
                "numeric": 705,
                "calling": "386",
                "sanctioned": false,
                "callingCode": "SI+386",
                "regionCode": "EM"
            }, {
                "name": "Somalia",
                "alpha2": "SO",
                "alpha3": "SOM",
                "numeric": 706,
                "calling": "252",
                "sanctioned": false,
                "callingCode": "SO+252",
                "regionCode": "A"
            }, {
                "name": "South Africa",
                "alpha2": "ZA",
                "alpha3": "ZAF",
                "numeric": 729,
                "calling": "27",
                "sanctioned": false,
                "callingCode": "ZA+27",
                "regionCode": "A"
            }, {
                "name": "Spain",
                "alpha2": "ES",
                "alpha3": "ESP",
                "numeric": 724,
                "calling": "34",
                "sanctioned": false,
                "callingCode": "ES+34",
                "regionCode": "EM"
            }, {
                "name": "Sri Lanka",
                "alpha2": "LK",
                "alpha3": "LKA",
                "numeric": 144,
                "calling": "94",
                "sanctioned": false,
                "callingCode": "LK+94",
                "regionCode": "AI"
            }, {
                "name": "Sudan",
                "alpha2": "SD",
                "alpha3": "SDN",
                "numeric": 736,
                "calling": "249",
                "sanctioned": true,
                "callingCode": "SD+249",
                "regionCode": "A"
            }, {
                "name": "Suriname ",
                "alpha2": "SR",
                "alpha3": "SUR",
                "numeric": 740,
                "calling": "597",
                "sanctioned": false,
                "callingCode": "SR+597",
                "regionCode": "SA"
            }, {
                "name": "Swaziland",
                "alpha2": "SZ",
                "alpha3": "SWZ",
                "numeric": 748,
                "calling": "268",
                "sanctioned": false,
                "callingCode": "SZ+268",
                "regionCode": "A"
            }, {
                "name": "Sweden",
                "alpha2": "SE",
                "alpha3": "SWE",
                "numeric": 752,
                "calling": "46",
                "sanctioned": false,
                "callingCode": "SE+46",
                "regionCode": "EM"
            }, {
                "name": "Switzerland",
                "alpha2": "CH",
                "alpha3": "CHE",
                "numeric": 756,
                "calling": "41",
                "sanctioned": false,
                "callingCode": "CH+41",
                "regionCode": "EM"
            }, {
                "name": "Syrian Arab Republic (Syria)",
                "alpha2": "SY",
                "alpha3": "SYR",
                "numeric": 760,
                "calling": "963",
                "sanctioned": true,
                "callingCode": "SY+963",
                "regionCode": "EM"
            }, {
                "name": "Tajikistan",
                "alpha2": "TJ",
                "alpha3": "TJK",
                "numeric": 762,
                "calling": "992",
                "sanctioned": false,
                "callingCode": "TJ+992",
                "regionCode": "EM"
            }, {
                "name": "Tanzania ",
                "alpha2": "TZ",
                "alpha3": "TZA",
                "numeric": 834,
                "calling": "255",
                "sanctioned": false,
                "callingCode": "TZ+255",
                "regionCode": "A"
            }, {
                "name": "Thailand",
                "alpha2": "TH",
                "alpha3": "THA",
                "numeric": 764,
                "calling": "66",
                "sanctioned": false,
                "callingCode": "TH+66",
                "regionCode": "AI"
            }, {
                "name": "Togo",
                "alpha2": "TG",
                "alpha3": "TGO",
                "numeric": 768,
                "calling": "228",
                "sanctioned": false,
                "callingCode": "TG+228",
                "regionCode": "A"
            }, {
                "name": "Trinidad And Tobago",
                "alpha2": "TT",
                "alpha3": "TTO",
                "numeric": 780,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "TT+1",
                "regionCode": "CA"
            }, {
                "name": "Tunisia",
                "alpha2": "TN",
                "alpha3": "TUN",
                "numeric": 788,
                "calling": "216",
                "sanctioned": false,
                "callingCode": "TN+216",
                "regionCode": "A"
            }, {
                "name": "Turkey",
                "alpha2": "TR",
                "alpha3": "TUR",
                "numeric": 792,
                "calling": "90",
                "sanctioned": false,
                "callingCode": "TR+90",
                "regionCode": "EM"
            }, {
                "name": "Turkmenistan",
                "alpha2": "TM",
                "alpha3": "TKM",
                "numeric": 795,
                "calling": "993",
                "sanctioned": false,
                "callingCode": "TM+993",
                "regionCode": "EM"
            }, {
                "name": "Turks And Caicos Islands",
                "alpha2": "TC",
                "alpha3": "TCA",
                "numeric": 796,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "TC+1",
                "regionCode": "CA"
            }, {
                "name": "Uganda",
                "alpha2": "UG",
                "alpha3": "UGA",
                "numeric": 800,
                "calling": "256",
                "sanctioned": false,
                "callingCode": "UG+256",
                "regionCode": "A"
            }, {
                "name": "Ukraine",
                "alpha2": "UA",
                "alpha3": "UKR",
                "numeric": 804,
                "calling": "380",
                "sanctioned": false,
                "callingCode": "UA+380",
                "regionCode": "EM"
            }, {
                "name": "United Arab Emirates",
                "alpha2": "AE",
                "alpha3": "ARE",
                "numeric": 784,
                "calling": "971",
                "sanctioned": false,
                "callingCode": "AE+971",
                "regionCode": "EM"
            }, {
                "name": "United Kingdom",
                "alpha2": "GB",
                "alpha3": "GBR",
                "numeric": 826,
                "calling": "44",
                "sanctioned": false,
                "subdivisions": [{
                    "code": "GB-ABE",
                    "name": "Aberdeen City"
                }, {
                    "code": "GB-ABD",
                    "name": "Aberdeenshire"
                }, {
                    "code": "GB-ANS",
                    "name": "Angus"
                }, {
                    "code": "GB-ANT",
                    "name": "Antrim"
                }, {
                    "code": "GB-ARD",
                    "name": "Ards"
                }, {
                    "code": "GB-AGB",
                    "name": "Argyll and Bute"
                }, {
                    "code": "GB-ARM",
                    "name": "Armagh"
                }, {
                    "code": "GB-BLA",
                    "name": "Ballymena"
                }, {
                    "code": "GB-BLY",
                    "name": "Ballymoney"
                }, {
                    "code": "GB-BNB",
                    "name": "Banbridge"
                }, {
                    "code": "GB-BAS",
                    "name": "Bath and North East Somerset"
                }, {
                    "code": "GB-BDF",
                    "name": "Bedford"
                }, {
                    "code": "GB-BFS",
                    "name": "Belfast"
                }, {
                    "code": "GB-BBD",
                    "name": "Blackburn with Darwen"
                }, {
                    "code": "GB-BPL",
                    "name": "Blackpool"
                }, {
                    "code": "GB-BGW",
                    "name": "Blaenau Gwent"
                }, {
                    "code": "GB-BMH",
                    "name": "Bournemouth"
                }, {
                    "code": "GB-BRC",
                    "name": "Bracknell Forest"
                }, {
                    "code": "GB-BGE",
                    "name": "Bridgend"
                }, {
                    "code": "GB-BNH",
                    "name": "Brighton and Hove"
                }, {
                    "code": "GB-BST",
                    "name": "Bristol, City of"
                }, {
                    "code": "GB-BKM",
                    "name": "Buckinghamshire"
                }, {
                    "code": "GB-CAY",
                    "name": "Caerphilly"
                }, {
                    "code": "GB-CAM",
                    "name": "Cambridgeshire"
                }, {
                    "code": "GB-CRF",
                    "name": "Cardiff"
                }, {
                    "code": "GB-CMN",
                    "name": "Carmarthenshire"
                }, {
                    "code": "GB-CKF",
                    "name": "Carrickfergus"
                }, {
                    "code": "GB-CSR",
                    "name": "Castlereagh"
                }, {
                    "code": "GB-CBF",
                    "name": "Central Bedfordshire"
                }, {
                    "code": "GB-CGN",
                    "name": "Ceredigion"
                }, {
                    "code": "GB-CHE",
                    "name": "Cheshire East"
                }, {
                    "code": "GB-CHW",
                    "name": "Cheshire West and Chester"
                }, {
                    "code": "GB-CLK",
                    "name": "Clackmannanshire"
                }, {
                    "code": "GB-CLR",
                    "name": "Coleraine"
                }, {
                    "code": "GB-CWY",
                    "name": "Conwy"
                }, {
                    "code": "GB-CKT",
                    "name": "Cookstown"
                }, {
                    "code": "GB-CON",
                    "name": "Cornwall"
                }, {
                    "code": "GB-CGV",
                    "name": "Craigavon"
                }, {
                    "code": "GB-CMA",
                    "name": "Cumbria"
                }, {
                    "code": "GB-DAL",
                    "name": "Darlington"
                }, {
                    "code": "GB-DEN",
                    "name": "Denbighshire"
                }, {
                    "code": "GB-DER",
                    "name": "Derby"
                }, {
                    "code": "GB-DBY",
                    "name": "Derbyshire"
                }, {
                    "code": "GB-DRY",
                    "name": "Derry"
                }, {
                    "code": "GB-DEV",
                    "name": "Devon"
                }, {
                    "code": "GB-DOR",
                    "name": "Dorset"
                }, {
                    "code": "GB-DOW",
                    "name": "Down"
                }, {
                    "code": "GB-DGY",
                    "name": "Dumfries and Galloway"
                }, {
                    "code": "GB-DND",
                    "name": "Dundee City"
                }, {
                    "code": "GB-DGN",
                    "name": "Dungannon and South Tyrone"
                }, {
                    "code": "GB-DUR",
                    "name": "Durham, County "
                }, {
                    "code": "GB-EAY",
                    "name": "East Ayrshire"
                }, {
                    "code": "GB-EDU",
                    "name": "East Dunbartonshire"
                }, {
                    "code": "GB-ELN",
                    "name": "East Lothian"
                }, {
                    "code": "GB-ERW",
                    "name": "East Renfrewshire"
                }, {
                    "code": "GB-ERY",
                    "name": "East Riding of Yorkshire"
                }, {
                    "code": "GB-ESX",
                    "name": "East Sussex"
                }, {
                    "code": "GB-EDH",
                    "name": "Edinburgh, City of"
                }, {
                    "code": "GB-ELS",
                    "name": "Eilean Siar"
                }, {
                    "code": "GB-ESS",
                    "name": "Essex"
                }, {
                    "code": "GB-FAL",
                    "name": "Falkirk"
                }, {
                    "code": "GB-FER",
                    "name": "Fermanagh"
                }, {
                    "code": "GB-FIF",
                    "name": "Fife"
                }, {
                    "code": "GB-FLN",
                    "name": "Flintshire"
                }, {
                    "code": "GB-GLG",
                    "name": "Glasgow City"
                }, {
                    "code": "GB-GLS",
                    "name": "Gloucestershire"
                }, {
                    "code": "GB-GWN",
                    "name": "Gwynedd"
                }, {
                    "code": "GB-HAL",
                    "name": "Halton"
                }, {
                    "code": "GB-HAM",
                    "name": "Hampshire"
                }, {
                    "code": "GB-HPL",
                    "name": "Hartlepool"
                }, {
                    "code": "GB-HEF",
                    "name": "Herefordshire"
                }, {
                    "code": "GB-HRT",
                    "name": "Hertfordshire"
                }, {
                    "code": "GB-HLD",
                    "name": "Highland"
                }, {
                    "code": "GB-IVC",
                    "name": "Inverclyde"
                }, {
                    "code": "GB-AGY",
                    "name": "Isle of Anglesey"
                }, {
                    "code": "GB-IOW",
                    "name": "Isle of Wight"
                }, {
                    "code": "GB-KEN",
                    "name": "Kent"
                }, {
                    "code": "GB-KHL",
                    "name": "Kingston upon Hull"
                }, {
                    "code": "GB-LAN",
                    "name": "Lancashire"
                }, {
                    "code": "GB-LRN",
                    "name": "Larne"
                }, {
                    "code": "GB-LCE",
                    "name": "Leicester"
                }, {
                    "code": "GB-LEC",
                    "name": "Leicestershire"
                }, {
                    "code": "GB-LMV",
                    "name": "Limavady"
                }, {
                    "code": "GB-LIN",
                    "name": "Lincolnshire"
                }, {
                    "code": "GB-LSB",
                    "name": "Lisburn"
                }, {
                    "code": "GB-LUT",
                    "name": "Luton"
                }, {
                    "code": "GB-MFT",
                    "name": "Magherafelt"
                }, {
                    "code": "GB-MDW",
                    "name": "Medway"
                }, {
                    "code": "GB-MTY",
                    "name": "Merthyr Tydfil"
                }, {
                    "code": "GB-MDB",
                    "name": "Middlesbrough"
                }, {
                    "code": "GB-MLN",
                    "name": "Midlothian"
                }, {
                    "code": "GB-MIK",
                    "name": "Milton Keynes"
                }, {
                    "code": "GB-MON",
                    "name": "Monmouthshire"
                }, {
                    "code": "GB-MRY",
                    "name": "Moray"
                }, {
                    "code": "GB-MYL",
                    "name": "Moyle"
                }, {
                    "code": "GB-NTL",
                    "name": "Neath Port Talbot"
                }, {
                    "code": "GB-NWP",
                    "name": "Newport"
                }, {
                    "code": "GB-NYM",
                    "name": "Newry and Mourne District"
                }, {
                    "code": "GB-NTA",
                    "name": "Newtownabbey"
                }, {
                    "code": "GB-NFK",
                    "name": "Norfolk"
                }, {
                    "code": "GB-NAY",
                    "name": "North Ayrshire"
                }, {
                    "code": "GB-NDN",
                    "name": "North Down"
                }, {
                    "code": "GB-NEL",
                    "name": "North East Lincolnshire"
                }, {
                    "code": "GB-NLK",
                    "name": "North Lanarkshire"
                }, {
                    "code": "GB-NLN",
                    "name": "North Lincolnshire"
                }, {
                    "code": "GB-NSM",
                    "name": "North Somerset"
                }, {
                    "code": "GB-NYK",
                    "name": "North Yorkshire"
                }, {
                    "code": "GB-NTH",
                    "name": "Northamptonshire"
                }, {
                    "code": "GB-NBL",
                    "name": "Northumberland"
                }, {
                    "code": "GB-NGM",
                    "name": "Nottingham"
                }, {
                    "code": "GB-NTT",
                    "name": "Nottinghamshire "
                }, {
                    "code": "GB-OMH",
                    "name": "Omagh"
                }, {
                    "code": "GB-ORK",
                    "name": "Orkney Islands"
                }, {
                    "code": "GB-OXF",
                    "name": "Oxfordshire"
                }, {
                    "code": "GB-PEM",
                    "name": "Pembrokeshire"
                }, {
                    "code": "GB-PKN",
                    "name": "Perth and Kinross"
                }, {
                    "code": "GB-PTE",
                    "name": "Peterborough"
                }, {
                    "code": "GB-PLY",
                    "name": "Plymouth"
                }, {
                    "code": "GB-POL",
                    "name": "Poole"
                }, {
                    "code": "GB-POR",
                    "name": "Portsmouth"
                }, {
                    "code": "GB-POW",
                    "name": "Powys"
                }, {
                    "code": "GB-RDG",
                    "name": "Reading"
                }, {
                    "code": "GB-RCC",
                    "name": "Redcar and Cleveland"
                }, {
                    "code": "GB-RFW",
                    "name": "Renfrewshire"
                }, {
                    "code": "GB-RCT",
                    "name": "Rhondda, Cynon, Taff"
                }, {
                    "code": "GB-RUT",
                    "name": "Rutland"
                }, {
                    "code": "GB-SCB",
                    "name": "Scottish Borders, The"
                }, {
                    "code": "GB-ZET",
                    "name": "Shetland Islands"
                }, {
                    "code": "GB-SHR",
                    "name": "Shropshire"
                }, {
                    "code": "GB-SLG",
                    "name": "Slough"
                }, {
                    "code": "GB-SOM",
                    "name": "Somerset"
                }, {
                    "code": "GB-SAY",
                    "name": "South Ayrshire"
                }, {
                    "code": "GB-SGC",
                    "name": "South Gloucestershire"
                }, {
                    "code": "GB-SLK",
                    "name": "South Lanarkshire"
                }, {
                    "code": "GB-STH",
                    "name": "Southampton"
                }, {
                    "code": "GB-SOS",
                    "name": "Southend-on-Sea"
                }, {
                    "code": "GB-STS",
                    "name": "Staffordshire"
                }, {
                    "code": "GB-STG",
                    "name": "Stirling"
                }, {
                    "code": "GB-STT",
                    "name": "Stockton-on-Tees"
                }, {
                    "code": "GB-STE",
                    "name": "Stoke-on-Trent"
                }, {
                    "code": "GB-STB",
                    "name": "Strabane"
                }, {
                    "code": "GB-SFK",
                    "name": "Suffolk"
                }, {
                    "code": "GB-SRY",
                    "name": "Surrey"
                }, {
                    "code": "GB-SWA",
                    "name": "Swansea"
                }, {
                    "code": "GB-SWD",
                    "name": "Swindon"
                }, {
                    "code": "GB-TFW",
                    "name": "Telford and Wrekin"
                }, {
                    "code": "GB-THR",
                    "name": "Thurrock"
                }, {
                    "code": "GB-TOB",
                    "name": "Torbay"
                }, {
                    "code": "GB-TOF",
                    "name": "Torfaen"
                }, {
                    "code": "GB-VGL",
                    "name": "Vale of Glamorgan, The"
                }, {
                    "code": "GB-WRT",
                    "name": "Warrington"
                }, {
                    "code": "GB-WAR",
                    "name": "Warwickshire"
                }, {
                    "code": "GB-WBK",
                    "name": "West Berkshire"
                }, {
                    "code": "GB-WDU",
                    "name": "West Dunbartonshire"
                }, {
                    "code": "GB-WLN",
                    "name": "West Lothian"
                }, {
                    "code": "GB-WSX",
                    "name": "West Sussex"
                }, {
                    "code": "GB-WIL",
                    "name": "Wiltshire"
                }, {
                    "code": "GB-WNM",
                    "name": "Windsor and Maidenhead"
                }, {
                    "code": "GB-WOK",
                    "name": "Wokingham"
                }, {
                    "code": "GB-WOR",
                    "name": "Worcestershire "
                }, {
                    "code": "GB-WRX",
                    "name": "Wrexham"
                }, {
                    "code": "GB-YOR",
                    "name": "York"
                }],
                "callingCode": "GB+44",
                "regionCode": "EM"
            }, {
                "name": "United States Of America",
                "alpha2": "US",
                "alpha3": "USA",
                "numeric": 1,
                "calling": "1",
                "sanctioned": false,
                "languages": [{
                    "code": "en_US",
                    "name": "English(US)",
                    "cntrycode": "US"
                }],
                "subdivisions": [{
                    "code": "US-AL",
                    "name": "Alabama"
                }, {
                    "code": "US-AK",
                    "name": "Alaska"
                }, {
                    "code": "US-AS",
                    "name": "American Samoa"
                }, {
                    "code": "US-AZ",
                    "name": "Arizona"
                }, {
                    "code": "US-AR",
                    "name": "Arkansas"
                }, {
                    "code": "US-CA",
                    "name": "California"
                }, {
                    "code": "US-CO",
                    "name": "Colorado"
                }, {
                    "code": "US-CT",
                    "name": "Connecticut"
                }, {
                    "code": "US-DE",
                    "name": "Delaware"
                }, {
                    "code": "US-DC",
                    "name": "District of Columbia"
                }, {
                    "code": "US-FL",
                    "name": "Florida"
                }, {
                    "code": "US-GA",
                    "name": "Georgia"
                }, {
                    "code": "US-GU",
                    "name": "Guam"
                }, {
                    "code": "US-HI",
                    "name": "Hawaii"
                }, {
                    "code": "US-ID",
                    "name": "Idaho"
                }, {
                    "code": "US-IL",
                    "name": "Illinois"
                }, {
                    "code": "US-IN",
                    "name": "Indiana"
                }, {
                    "code": "US-IA",
                    "name": "Iowa"
                }, {
                    "code": "US-KS",
                    "name": "Kansas"
                }, {
                    "code": "US-KY",
                    "name": "Kentucky"
                }, {
                    "code": "US-LA",
                    "name": "Louisiana"
                }, {
                    "code": "US-ME",
                    "name": "Maine"
                }, {
                    "code": "US-MD",
                    "name": "Maryland"
                }, {
                    "code": "US-MA",
                    "name": "Massachusetts"
                }, {
                    "code": "US-MI",
                    "name": "Michigan"
                }, {
                    "code": "US-MN",
                    "name": "Minnesota"
                }, {
                    "code": "US-MS",
                    "name": "Mississippi"
                }, {
                    "code": "US-MO",
                    "name": "Missouri"
                }, {
                    "code": "US-MT",
                    "name": "Montana"
                }, {
                    "code": "US-NE",
                    "name": "Nebraska"
                }, {
                    "code": "US-NV",
                    "name": "Nevada"
                }, {
                    "code": "US-NH",
                    "name": "New Hampshire"
                }, {
                    "code": "US-NJ",
                    "name": "New Jersey"
                }, {
                    "code": "US-NM",
                    "name": "New Mexico"
                }, {
                    "code": "US-NY",
                    "name": "New York"
                }, {
                    "code": "US-NC",
                    "name": "North Carolina"
                }, {
                    "code": "US-ND",
                    "name": "North Dakota"
                }, {
                    "code": "US-MP",
                    "name": "Northern Mariana Islands"
                }, {
                    "code": "US-OH",
                    "name": "Ohio"
                }, {
                    "code": "US-OK",
                    "name": "Oklahoma"
                }, {
                    "code": "US-OR",
                    "name": "Oregon"
                }, {
                    "code": "US-PA",
                    "name": "Pennsylvania"
                }, {
                    "code": "US-PR",
                    "name": "Puerto Rico"
                }, {
                    "code": "US-RI",
                    "name": "Rhode Island"
                }, {
                    "code": "US-SC",
                    "name": "South Carolina"
                }, {
                    "code": "US-SD",
                    "name": "South Dakota"
                }, {
                    "code": "US-TN",
                    "name": "Tennessee"
                }, {
                    "code": "US-TX",
                    "name": "Texas"
                }, {
                    "code": "US-UM",
                    "name": "United States Minor Outlying Islands"
                }, {
                    "code": "US-UT",
                    "name": "Utah"
                }, {
                    "code": "US-VT",
                    "name": "Vermont"
                }, {
                    "code": "US-VI",
                    "name": "Virgin Islands"
                }, {
                    "code": "US-VA",
                    "name": "Virginia"
                }, {
                    "code": "US-WA",
                    "name": "Washington"
                }, {
                    "code": "US-WV",
                    "name": "West Virginia"
                }, {
                    "code": "US-WI",
                    "name": "Wisconsin"
                }, {
                    "code": "US-WY",
                    "name": "Wyoming"
                }],
                "callingCode": "US+1",
                "regionCode": "NA"
            }, {
                "name": "Uruguay",
                "alpha2": "UY",
                "alpha3": "URY",
                "numeric": 858,
                "calling": "598",
                "sanctioned": false,
                "callingCode": "UY+598",
                "regionCode": "SA"
            }, {
                "name": "Uzbekistan",
                "alpha2": "UZ",
                "alpha3": "UZB",
                "numeric": 860,
                "calling": "998",
                "sanctioned": false,
                "callingCode": "UZ+998",
                "regionCode": "EM"
            }, {
                "name": "Vanuatu",
                "alpha2": "VU",
                "alpha3": "VUT",
                "numeric": 548,
                "calling": "678",
                "sanctioned": false,
                "callingCode": "VU+678",
                "regionCode": "OP"
            }, {
                "name": "Venezuela ",
                "alpha2": "VE",
                "alpha3": "VEN",
                "numeric": 862,
                "calling": "58",
                "sanctioned": false,
                "callingCode": "VE+58",
                "regionCode": "SA"
            }, {
                "name": "Viet Nam",
                "alpha2": "VN",
                "alpha3": "VNM",
                "numeric": 704,
                "calling": "84",
                "sanctioned": false,
                "callingCode": "VN+84",
                "regionCode": "AI"
            }, {
                "name": "Virgin Islands, Us",
                "alpha2": "VI",
                "alpha3": "VIR",
                "numeric": 850,
                "calling": "1",
                "sanctioned": false,
                "callingCode": "VI+1",
                "regionCode": "CA"
            }, {
                "name": "Wallis And Futuna Islands",
                "alpha2": "WF",
                "alpha3": "WLF",
                "numeric": 876,
                "calling": "681",
                "sanctioned": false,
                "callingCode": "WF+681",
                "regionCode": "OP"
            }, {
                "name": "Yemen",
                "alpha2": "YE",
                "alpha3": "YEM",
                "numeric": 887,
                "calling": "967",
                "sanctioned": false,
                "callingCode": "YE+967",
                "regionCode": "EM"
            }, {
                "name": "Zambia",
                "alpha2": "ZM",
                "alpha3": "ZMB",
                "numeric": 894,
                "calling": "260",
                "sanctioned": false,
                "callingCode": "ZM+260",
                "regionCode": "A"
            }, {
                "name": "Zimbabwe",
                "alpha2": "ZW",
                "alpha3": "ZWE",
                "numeric": 716,
                "calling": "263",
                "sanctioned": false,
                "callingCode": "ZW+263",
                "regionCode": "A"
            }]
        };
    }

    function getCustomerRanges() {
        return {
            "customerRanges": [{
                "code": "009",
                "lowCount": 1,
                "highCount": 20
            }, {
                "code": "010",
                "lowCount": 21,
                "highCount": 100
            }, {
                "code": "011",
                "lowCount": 101,
                "highCount": 200
            }, {
                "code": "012",
                "lowCount": 201,
                "highCount": 1000
            }, {
                "code": "013",
                "lowCount": 1001,
                "highCount": 10000
            }, {
                "code": "014",
                "lowCount": 10001,
                "highCount": 50000
            }, {
                "code": "015",
                "lowCount": 50001,
                "highCount": 100000
            }, {
                "code": "016",
                "lowCount": 100001,
                "highCount": null
            }]
        }
    }

    function getAcqruirerRelationship() {
        return [{
                "id": 1,
                "merchantAcqCode": "ae310e9131ab47179aee6be5bb3f4035",
                "status": {
                    "status": "SUBMITTED_UNKNOWN_ACQUIRER"
                },
                "assignedMerchantId": "121212121222222",
                "unknownAcqFlag": true,
                "acquirerId": 121212121212,
                "paymentBrandCode": "Visa",
                "currencyCodes": [{
                    "currencyCode": "DFT"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 2,
                "merchantAcqCode": "9a4ae188be244f2e9740a3ef6e92797a",
                "status": {
                    "status": "SUBMITTED_UNKNOWN_ACQUIRER"
                },
                "assignedMerchantId": "565675678768",
                "unknownAcqFlag": true,
                "acquirerId": 11111111,
                "paymentBrandCode": "MasterCard",
                "currencyCodes": [{
                    "currencyCode": "DFT"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 3,
                "merchantAcqCode": "3c46f16cfd5d49359f5502e0cf4bbc61",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "hey45",
                "unknownAcqFlag": false,
                "acquirerId": 123457,
                "paymentBrandCode": "VISA",
                "currencyCodes": [{
                    "currencyCode": "DFT"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 4,
                "merchantAcqCode": "a848fdcf6abf4f4cb9aff76c175eab7a",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "hfgjgh(*",
                "unknownAcqFlag": false,
                "acquirerId": 465733,
                "paymentBrandCode": "VISA",
                "currencyCodes": [{
                    "currencyCode": "DZD"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 5,
                "merchantAcqCode": "34c7349e887140ea8d85b3a61f4a8f1b",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "%424",
                "unknownAcqFlag": false,
                "acquirerId": 1234,
                "paymentBrandCode": "VISA",
                "currencyCodes": [{
                    "currencyCode": "BMD"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 6,
                "merchantAcqCode": "57b245a42ae946abab6ebb6fab2d2873",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "fghdfgh",
                "unknownAcqFlag": false,
                "acquirerId": 543048,
                "paymentBrandCode": "MASTERCARD",
                "currencyCodes": [{
                    "currencyCode": "DFT"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 7,
                "merchantAcqCode": "b625e8e65608495f8b8730c6ab5f75dd",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "ffgh687678",
                "unknownAcqFlag": false,
                "acquirerId": 492900,
                "paymentBrandCode": "VISA",
                "currencyCodes": [{
                    "currencyCode": "AMD"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 8,
                "merchantAcqCode": "d3c54ed9b310482aa2a3a75b00363de6",
                "status": {
                    "status": "SUBMITTED"
                },
                "assignedMerchantId": "#########",
                "unknownAcqFlag": false,
                "acquirerId": 547660,
                "paymentBrandCode": "MASTERCARD",
                "currencyCodes": [{
                    "currencyCode": "AWG"
                }],
                "readonly": true,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 9,
                "merchantAcqCode": "c56d6c6462c74b9a86564f0c7e7e351b",
                "status": {
                    "status": "SUBMITTED"
                },
                "assignedMerchantId": "########",
                "unknownAcqFlag": false,
                "acquirerId": 554619,
                "paymentBrandCode": "MASTERCARD",
                "currencyCodes": [{
                    "currencyCode": "AFA"
                }],
                "readonly": true,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 10,
                "merchantAcqCode": "a36efe4af8f54d4686acce0e793b07ab",
                "status": {
                    "status": "SUBMITTED"
                },
                "assignedMerchantId": "5435535test",
                "unknownAcqFlag": false,
                "acquirerId": 542182,
                "paymentBrandCode": "MASTERCARD",
                "currencyCodes": [{
                    "currencyCode": "ARS"
                }],
                "readonly": true,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 11,
                "merchantAcqCode": "3b209a8f6acd4529af40aa1329b5c671",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "d#",
                "unknownAcqFlag": false,
                "acquirerId": 411111,
                "paymentBrandCode": "VISA",
                "currencyCodes": [{
                    "currencyCode": "PAB"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            },
            {
                "id": 12,
                "merchantAcqCode": "d7e14b29add74d598886d64a12cc1c27",
                "status": {
                    "status": "ACTIVE"
                },
                "assignedMerchantId": "fjfhgdfjhgfdg",
                "unknownAcqFlag": false,
                "acquirerId": 531615,
                "paymentBrandCode": "MASTERCARD",
                "currencyCodes": [{
                    "currencyCode": "DOP"
                }],
                "readonly": false,
                "updateHistory": null,
                "passwordProvided": false
            }
        ]
    }

    function getCurrency() {
        return {
            currencies: [{
                    "code": "AUB",
                    "value": "AUSTRALLIA"
                },
                {
                    "code": "IND",
                    "value": "INDIA"
                },
                {
                    "code": "DOL",
                    "value": "DOLBY"
                }
            ]
        };
    }

    function getPaymentBrands() {
        return {
            "paymentBrands": [{
                    "code": "VISA",
                    "name": "Visa",
                    "desc": "Visa",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "MASTERCARD",
                    "name": "Mastercard",
                    "desc": "Mastercard",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "AMEX",
                    "name": "American Express",
                    "desc": "American Express",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "DINERS",
                    "name": "Diners Club",
                    "desc": "Diners Club",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "JCP",
                    "name": "JCP",
                    "desc": "JCP",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "DISCOVER",
                    "name": "Discover",
                    "desc": "Discover",
                    "threeDsEnableSwitch": true
                },
                {
                    "code": "MAESTRO",
                    "name": "Maestro",
                    "desc": "Maestro",
                    "threeDsEnableSwitch": true
                }
            ]
        }
    }

    function getAcquirer() {
        return {
            "acquirers": [{
                    "id": "418029",
                    "name": "418029",
                    "cardBrand": "VISA"
                },
                {
                    "id": "496040",
                    "name": "ABI Bank - 496040",
                    "cardBrand": "VISA"
                },
                {
                    "id": "512188",
                    "name": "ABI Bank - 512188",
                    "cardBrand": "MASTERCARD"
                },
                {
                    "id": "461614",
                    "name": "ABN Bank - 461614",
                    "cardBrand": "VISA"
                },
                {
                    "id": "542454",
                    "name": "ABN Amro - 542454",
                    "cardBrand": "MASTERCARD"
                },
                {
                    "id": "88888888",
                    "name": "VISA Sample",
                    "cardBrand": "VISA"
                },
                {
                    "id": "543048",
                    "name": "Mastercard Sample",
                    "cardBrand": "MASTERCARD"
                },
                {
                    "id": "112",
                    "name": "Unknown Sample",
                    "cardBrand": "MASTERCARD"
                }
            ]
        }

    }

    function getAdvanceCheckout() {
        return {
            "advancedCheckout": {
                "error": [{
                    "code": "404",
                    "field": "No Card Brands are Advanced Checkout enabled",
                    "message": "Not Found"
                }],
                "code": "404",
                "message": "Not Found"
            }
        }
    }

    function getAllowdCardType() {
        return {
            "data": {}
        }
    }

    function getMerchantOrgDetails() {
        return {
            "id": 0,
            "merchant": {
                "pciCompliant": false,
                "businessType": "12",
                "pspOrgId": "d5fa1517c57643db92f901b44142644a"
            },
            "profileCompleted": false,
            "fbuMerchant": false,
            "countryOfIncorporationAustralia": false,
            "address": {
                "city": "DELHI",
                "zipCode": "45465",
                "countryOfIncorporation": "DE",
                "countrySubdivision": "Germany",
                "address1": "Delhi",
                "address2": "NCR"
            },
            "phone": {
                "countryCode": "US+1",
                "number": "436455676"
            },
            "orgTypeText": "MERCHANT",
            "organizationExtracted": {
                "profileCompleted": true,
                "legalBusinessName": "ViratKohli",
                "taxId": "676786787",
                "website": "http://ViratKohli.com"
            },
            "testFlag": false,
            "pciCompliant": true
        } 
    }

    function getServiceProviderOrgDetails() {
        return {
            "id": 0,
            "serviceProvider": {
                "providerType": "2",
                "numOfMerServed": "010",
                "visible": true,
                "pspOptIn": true
            },
            "organizationDzAccount": {
                "dzOrgUserName": "MCWqqgqrxhofwbedkivx",
                "orgId": "7ee66195c71344e197e205ecdb687109",
                "appId": 272027
            },
            "sandboxClientId": "WXYePrZde_IymJ35AN-e3TWoPBOtPotctU2lisNdc68a6f92",
            "fbuMerchant": false,
            "profileCompleted": true,
            "countryOfIncorporationAustralia": false,
            "address": {
                "city": "Albanian City",
                "zipCode": "411037",
                "countryOfIncorporation": "DE",
                "address1": "Business Bay Yerwada",
                "countrySubdivision": "Germany"
            },
            "phone": {
                "countryCode": "AL+355",
                "number": "9623256395"
            },
            "orgTypeText": "SERVICE_PROVIDER",
            "organizationExtracted": {
                "legalBusinessName": "Albanian Service Provider",
                "website": "http://paytm.com"
            },
            "organizationClientList": [{
                    "orgClientId": "WXYePrZde_IymJ35AN-e3TWoPBOtPotctU2lisNdc68a6f92",
                    "orgId": "7ee66195c71344e197e205ecdb687109",
                    "environment": "SANDBOX"
                },
                {
                    "orgClientId": "-9vUXEU6X69MBC6muiMYOMtGhlg8VvMGNso7MR3Ne27f2421",
                    "orgId": "7ee66195c71344e197e205ecdb687109",
                    "environment": "PRODUCTION"
                }
            ],
            "testFlag": false,
            "pciCompliant": false,
            "organizationProductionAccessRequestInfo": {
                "acquirerBankName": null,
                "acquirerBankId": null,
                "merchantAcquirerId": null,
                "organizationContactInformation": {
                    "contactFirstName": "Merchant 4",
                    "contactLastName": "Merchant 4",
                    "contactEmail": "harshad.pingle+harpin4@gmail.com"
                }
            }
        }
    }

    function getNewOrgDetails() {
        return {
            "id": 0,
            "organizationDzAccount": {
                "dzOrgUserName": "MCWqqgqrxhofwbedkivx",
                "orgId": "7ee66195c71344e197e205ecdb687109",
                "appId": 272027
            },
            "sandboxClientId": "WXYePrZde_IymJ35AN-e3TWoPBOtPotctU2lisNdc68a6f92",
            "fbuMerchant": false,
            "profileCompleted": false,
            "countryOfIncorporationAustralia": false,
            "orgTypeText": "MERCHANT",
            "organizationExtracted": {
                "legalBusinessName": "Tameshwar Business"
            },
            "organizationClientList": [{
                "orgClientId": "WXYePrZde_IymJ35AN-e3TWoPBOtPotctU2lisNdc68a6f92",
                "orgId": "7ee66195c71344e197e205ecdb687109",
                "environment": "SANDBOX"
            }],
            "testFlag": false,
            "pciCompliant": true
        }
    }

    function getCategories() {
        return {
            "categories": [{
                "code": "2",
                "name": "Merchant Acquirer",
                "description": "Merchant Acquirer",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "3",
                "name": "Hosted Application Provider",
                "description": "Hosted Application Provider",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "4",
                "name": "eCommerce/Shopping Cart Provider",
                "description": "eCommerce/Shopping Cart Provider",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "5",
                "name": "mCommerce Enabler",
                "description": "mCommerce Enabler",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "6",
                "name": "Technology Partner/System Integrator/Digital Agency",
                "description": "Technology Partner/System Integrator/Digital Agency",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "7",
                "name": "Airline Booking Platforms",
                "description": "Airline Booking Platforms",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "8",
                "name": "POS/mPOS Providers",
                "description": "POS/mPOS Providers",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "9",
                "name": "Other",
                "description": "Other",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "1",
                "name": "Payment Gateway",
                "description": "Payment Gateway",
                "businessType": "SRV_PRVDR"
            }, {
                "code": "10",
                "name": "Accommodations",
                "description": "Accommodations",
                "businessType": "MRCHNT"
            }, {
                "code": "11",
                "name": "Amusement, Recreation Activities",
                "description": "Amusement, Recreation Activities",
                "businessType": "MRCHNT"
            }, {
                "code": "12",
                "name": "Arts and Craft Stores",
                "description": "Arts and Craft Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "13",
                "name": "Automotive Retail",
                "description": "Automotive Retail",
                "businessType": "MRCHNT"
            }, {
                "code": "14",
                "name": "Baby",
                "description": "Baby",
                "businessType": "MRCHNT"
            }, {
                "code": "15",
                "name": "Book Stores",
                "description": "Book Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "16",
                "name": "Business to Business",
                "description": "Business to Business",
                "businessType": "MRCHNT"
            }, {
                "code": "17",
                "name": "Camera/Photography Supplies",
                "description": "Camera/Photography Supplies",
                "businessType": "MRCHNT"
            }, {
                "code": "18",
                "name": "Communications, Telecommunications, Cable Services",
                "description": "Communications, Telecommunications, Cable Services",
                "businessType": "MRCHNT"
            }, {
                "code": "19",
                "name": "Computer/Software Stores",
                "description": "Computer/Software Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "20",
                "name": "Cosmetics and Beauty Services",
                "description": "Cosmetics and Beauty Services",
                "businessType": "MRCHNT"
            }, {
                "code": "21",
                "name": "Department Stores",
                "description": "Department Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "22",
                "name": "Eating Places",
                "description": "Eating Places",
                "businessType": "MRCHNT"
            }, {
                "code": "23",
                "name": "Financial Services",
                "description": "Financial Services",
                "businessType": "MRCHNT"
            }, {
                "code": "24",
                "name": "Florists",
                "description": "Florists",
                "businessType": "MRCHNT"
            }, {
                "code": "25",
                "name": "Giftware/Houseware/Card Shops",
                "description": "Giftware/Houseware/Card Shops",
                "businessType": "MRCHNT"
            }, {
                "code": "26",
                "name": "Government Services",
                "description": "Government Services",
                "businessType": "MRCHNT"
            }, {
                "code": "27",
                "name": "Health/Beauty/Medical Supplies",
                "description": "Health/Beauty/Medical Supplies",
                "businessType": "MRCHNT"
            }, {
                "code": "28",
                "name": "Home Improvement Centers",
                "description": "Home Improvement Centers",
                "businessType": "MRCHNT"
            }, {
                "code": "29",
                "name": "Mail Order/Telephone Order Providers",
                "description": "Mail Order/Telephone Order Providers",
                "businessType": "MRCHNT"
            }, {
                "code": "30",
                "name": "Maintenance and Repair Services",
                "description": "Maintenance and Repair Services",
                "businessType": "MRCHNT"
            }, {
                "code": "31",
                "name": "Manufacturing",
                "description": "Manufacturing",
                "businessType": "MRCHNT"
            }, {
                "code": "32",
                "name": "Miscellaneous",
                "description": "Miscellaneous",
                "businessType": "MRCHNT"
            }, {
                "code": "33",
                "name": "Miscellaneous Apparel",
                "description": "Miscellaneous Apparel",
                "businessType": "MRCHNT"
            }, {
                "code": "34",
                "name": "Miscellaneous Educational Services",
                "description": "Miscellaneous Educational Services",
                "businessType": "MRCHNT"
            }, {
                "code": "35",
                "name": "Miscellaneous Entertainment Recreation",
                "description": "Miscellaneous Entertainment Recreation",
                "businessType": "MRCHNT"
            }, {
                "code": "36",
                "name": "Miscellaneous Personal Services",
                "description": "Miscellaneous Personal Services",
                "businessType": "MRCHNT"
            }, {
                "code": "37",
                "name": "Miscellaneous Professional Services",
                "description": "Miscellaneous Professional Services",
                "businessType": "MRCHNT"
            }, {
                "code": "38",
                "name": "Miscellaneous Vehicle Sales",
                "description": "Miscellaneous Vehicle Sales",
                "businessType": "MRCHNT"
            }, {
                "code": "39",
                "name": "Music and Videos",
                "description": "Music and Videos",
                "businessType": "MRCHNT"
            }, {
                "code": "40",
                "name": "Nonprofit",
                "description": "Nonprofit",
                "businessType": "MRCHNT"
            }, {
                "code": "41",
                "name": "Other Transportation Services",
                "description": "Other Transportation Services",
                "businessType": "MRCHNT"
            }, {
                "code": "42",
                "name": "Pet Stores",
                "description": "Pet Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "43",
                "name": "Religious, Civic, and Professional Organizations",
                "description": "Religious, Civic, and Professional Organizations",
                "businessType": "MRCHNT"
            }, {
                "code": "44",
                "name": "Software Production, Network Services and Data Processing",
                "description": "Software Production, Network Services and Data Processing",
                "businessType": "MRCHNT"
            }, {
                "code": "45",
                "name": "Sporting Goods/Apparel/Footware",
                "description": "Sporting Goods/Apparel/Footware",
                "businessType": "MRCHNT"
            }, {
                "code": "46",
                "name": "T+E Airlines",
                "description": "T+E Airlines",
                "businessType": "MRCHNT"
            }, {
                "code": "47",
                "name": "T+E Vehicle Rental",
                "description": "T+E Vehicle Rental",
                "businessType": "MRCHNT"
            }, {
                "code": "48",
                "name": "Toy Stores",
                "description": "Toy Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "49",
                "name": "Travel Agencies and Tour Operators",
                "description": "Travel Agencies and Tour Operators",
                "businessType": "MRCHNT"
            }, {
                "code": "50",
                "name": "Unknown",
                "description": "Unknown",
                "businessType": "MRCHNT"
            }, {
                "code": "51",
                "name": "Utilities",
                "description": "Utilities",
                "businessType": "MRCHNT"
            }, {
                "code": "52",
                "name": "Variety/General Merchandise Stores",
                "description": "Variety/General Merchandise Stores",
                "businessType": "MRCHNT"
            }, {
                "code": "53",
                "name": "Wholesale Trade",
                "description": "Wholesale Trade",
                "businessType": "MRCHNT"
            }]
        };
    }

    function pspServiceProviders() {
        return {
            "serviceProviders": [{
                    "organizationId": "ca51a92555d94d7ba9d0549436afee47",
                    "legalBusinessName": "hhhh"
                },
                {
                    "organizationId": "5c113ee9d6b7402babd56d4671409cb6",
                    "legalBusinessName": "Pink Floyd"
                },
                {
                    "organizationId": "d5fa1517c57643db92f901b44142644a",
                    "legalBusinessName": "VAIBHAVSERVICE"
                }
            ]
        }
    }

    function initialIntegrationInfo() {
        return {
            "checkoutId": "e3d846f0092b4db98ffc347331c5f8e7",
            "originUrl": null,
            "sandboxKey": "c7533dabc0f44fce9e63f29d450549710000000000000000",
            "sandboxAlias": "defaultSandboxKey",
            "sandboxPasscode": null,
            "sandboxCallbackUrl": "http://masterpass.com",
            "legalBusinessName": "stage1MerCircusWorld",
            "prodExpressCheckoutAllowed": true
        };
    }

    function getUserAccountForAdminPortal() {
        return {
            "userId": "MP-Merch-Adm-Prod",
            "firstName": "MP-Merch-Adm-Prod",
            "lastName": null,
            "email": null,
            "mcmId": null,
            "roles": [
                "ROLE_PRODUCTION_APPROVAL_RW",
                "ROLE_ORGANIZATION_MANAGEMENT_RO",
                "ROLE_BUSINESS_INFORMATION_RO",
                "ROLE_PRODUCTION_APPROVAL_RO",
                "ROLE_MASTERPASS_MERCHANT_ADMIN_PRODUCTION",
                "ROLE_MASTERPASS_ADMINAPP_READ_ONLY"
            ]
        };
    }

    function getOrgManagementData() {
        return {  
            "content": [   {    
                "orgId": "c17e3a2a4fc54de5be351da8d2a82620",
                    "legalBusinessName": "Avenger1Stage3Devloper",
                    "organizationType": "MERCHANT",
                    "status": "APPROVED",
                    "statusDate": 1503386861000   
            },     {    
                "orgId": "ea509ee36242442fa88f71753beda2e1",
                    "legalBusinessName": "Avenger2Stage3Devloper",
                    "organizationType": "MERCHANT",
                    "status": "APPROVED",
                    "statusDate": 1503386870000   
            }  ],
              "number": 0,
              "size": 25,
              "totalPages": 2,
              "numberOfElements": 25,
              "totalElements": 40,
              "first": true,
              "last": false,
              "sort": [   {    
                "direction": "ASC",
                    "property": "organizationExtracted.legalBusinessName",
                    "ignoreCase": false,
                    "nullHandling": "NATIVE",
                    "ascending": true   
            }  ]
        }
    }

    function getBusinessInfo() {
        return [{   
            "id": "c17e3a2a4fc54de5be351da8d2a82620",
               "orgTypeText": "FBU_MERCHANT",
               "cardinalMerchantId": "P396996298",
               "pciCompliant": false,
               "legalBusinessName": "\"quot;PRACOWNIA OPTYCZNA DIUK\"quot; S.C. LECHNA ROMAN, LECHNA MARCIN",
               "taxId": "111111111",
               "website": "http://www.markoweokulary.pl",
               "address1": "Kołłątaja 32",
               "address2": null,
               "city": "Wrocław",
               "countryOfIncorporation": "PL",
               "zipCode": "50005",
               "phoneNumber": "616306005",
               "ext": null,
               "businessType": null,
               "companyId": "",
               "countryCode": "48",
               "state": null,
               "acquirerBankId": null,
               "merchantAcquirerId": null,
               "acquirerBankName": null,
               "pspList": [    {     
                "organizationId": "c17e3a2a4fc54de5be351da8d2a82620",
                     "pspMerchantId": null,
                     "pspName": "My Service"    
            }   ],
               "prodApprovalRequest": {      
                "requestStatus": "APPROVED"     
            },
               "reason": null,
               "additionalNotes": null
        }];
    }

    function sandboxKey() {
        return [{
                "keyId": "c7533dabc0f44fce9e63f29d450549710000000000000000",
                "alias": "defaultSandboxKey",
                "environment": "SANDBOX",
                "expiry": 1532120552000,
                "organizationClientId": "Tm8qdDKwxUiOu_mFx6Wt-Ew_mCmuAU2UhVUQWHKM84db7cd1",
                "onboardingSandboxPrivateKeyAvailable": false,
                "onboardingSandboxPrivateKeyPasscode": null
            },
            {
                "keyId": "ae048a854bf942769052e8c954f0f1960000000000000000",
                "alias": "LifeMap",
                "environment": "SANDBOX",
                "expiry": 1534555963000,
                "organizationClientId": "Tm8qdDKwxUiOu_mFx6Wt-Ew_mCmuAU2UhVUQWHKM84db7cd1",
                "onboardingSandboxPrivateKeyAvailable": false,
                "onboardingSandboxPrivateKeyPasscode": null
            }
        ];
    }

    function productionKey() {
        return [{
                "keyId": "41f69b0744864a40a93b5afe053b40c70000000000000000",
                "alias": "InteriorDesign",
                "environment": "PRODUCTION",
                "expiry": 1534557116000,
                "organizationClientId": "YEpS06QUGAAt6jxQEApaW2TSU6Xq1x3jFz7BXLWx976f7f4f",
                "onboardingSandboxPrivateKeyAvailable": false,
                "onboardingSandboxPrivateKeyPasscode": null
            },
            {
                "keyId": "de42577845194192afddcc9fbcb179ad0000000000000000",
                "alias": "ChryslerNeon1994",
                "environment": "PRODUCTION",
                "expiry": 1534557181000,
                "organizationClientId": "YEpS06QUGAAt6jxQEApaW2TSU6Xq1x3jFz7BXLWx976f7f4f",
                "onboardingSandboxPrivateKeyAvailable": false,
                "onboardingSandboxPrivateKeyPasscode": null
            }
        ];
    }

    function hasLegacyKeyLinks() {
        return {
            "hasLegacyKeyLinks": false
        };
    }

    const data = {
        acquirerRelationships: getAcqruirerRelationship(),
        currencies: getCurrency(),
        acquirer: getAcquirer(),
        paymentBrands: getPaymentBrands(),
        advancedCheckout: getAdvanceCheckout(),
        allowdCardType: getAllowdCardType(),
        countries: getCountries(),
        customerRanges: getCustomerRanges(),
        categories: getCategories(),
        membership: membershipApi(),
        memberships: getMembership(),
        organizations: getOrganization(),
        userAccounts: getUserAccounts(),
        merchantOrgDetails: getNewOrgDetails(), //getNewOrgDetails() getMerchantOrgDetails() getServiceProviderOrgDetails(),
        pspServiceProviders: pspServiceProviders(),
        initialIntegrationInfo: initialIntegrationInfo(),
        portalNotification: {
            merchantPortalNotificationMessages: [{
                portalNotificationId:  44,
                notificationEnabled:  true,
                notificationText:   "Stage 1 has R8 code and will be targeted for R8 release"
            }]
        },
        productionAccess: {
            totalPages: 0,
            totalElements: 0
        },
        adminorganizationslist: [],
        adminorganizations: [],
        UserAccount: getUserAccountForAdminPortal(),
        users: getUserApi(),
        searchResult: getOrgManagementData(),
        businessInfo: getBusinessInfo(),
        SANDBOX: sandboxKey(),
        PRODUCTION: productionKey(),
        hasLegacyKeyLinks: hasLegacyKeyLinks()
    };

    // Create 100 orgs id: i, name: `user${i}`
    // Production Access  
    for (let i = 1; i <= 100; i++) {
        let legalBusinessName = faker.random.words();
        let requestedDate = moment(faker.date.past()).format('x');
        let orgTypeText = faker.company.bsBuzz();

        data.adminorganizationslist.push({
            "id": i,
            "organizationId": "057113e299614dfd91f2fbf598c0468_" + i,
            "legalBusinessName": legalBusinessName,
            "requestedDate": requestedDate,
            "orgTypeText": orgTypeText
        })
        // Generate organizations

        data.adminorganizations.push({
            "id": "057113e299614dfd91f2fbf598c0468_" + i,
            // "organizationId": "057113e299614dfd91f2fbf598c0468_" + i,
            "legalBusinessName": legalBusinessName,
            "requestedDate": requestedDate,
            "orgTypeText": orgTypeText,
            "countryOfIncorporation": faker.address.stateAbbr(),
            "zipCode": faker.address.zipCode(),
            "city": faker.address.city(),
            "address1": faker.address.streetName(),
            "address2": faker.address.streetSuffix() + ' ' + faker.address.streetPrefix() + ' ' + faker.address.secondaryAddress(),
            "countrySubdivision": faker.address.stateAbbr(),
            "countryCode": faker.address.countryCode(),
            "phoneNumber": faker.phone.phoneNumber(),
            "ext": faker.random.number(),
            "taxId": faker.random.number(),
            "ausCoNum": faker.random.number(),
            "website": faker.internet.email(),
            "pciCompliant": faker.random.boolean(),
            "pspOrgId": "org" + faker.random.number(),
            "businessCategory": faker.commerce.productName()
        });

    } /** for loop end */

    data.productionAccess.totalPages = data.adminorganizationslist.length / 25;
    data.productionAccess.totalElements = data.adminorganizationslist.length;

    return data;

}
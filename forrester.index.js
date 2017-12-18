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

    let brandsItems = () => {
        return [
                {
                    "totalCount": 434,
                    "lastReviewedAt": [
                        1513060341000
                    ],
                    "respondedMobsCount": 24,
                    "mobCount": 61,
                    "timestamp": 1486059453485,
                    "latestMob": 1512968426613,
                    "loveCount": 329,
                    "hateCount": 43,
                    "ioiId": "ftap-company-starbucks",
                    "okCount": 62,
                    "title": "Starbucks",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 247,
                    "lastReviewedAt": [
                        1513077200000
                    ],
                    "respondedMobsCount": 17,
                    "mobCount": 33,
                    "timestamp": 1493746848949,
                    "latestMob": 1511515573060,
                    "loveCount": 186,
                    "hateCount": 22,
                    "ioiId": "ftap-company-acme",
                    "okCount": 39,
                    "title": "Acme",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 192,
                    "lastReviewedAt": [
                        1512995951000
                    ],
                    "respondedMobsCount": 9,
                    "mobCount": 40,
                    "timestamp": 1489068258267,
                    "latestMob": 1512995962159,
                    "loveCount": 104,
                    "hateCount": 29,
                    "ioiId": "ftap-company-testcolor",
                    "okCount": 59,
                    "title": "TestColor",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 172,
                    "lastReviewedAt": [
                        1513075746000
                    ],
                    "respondedMobsCount": 15,
                    "mobCount": 24,
                    "timestamp": 1489099953559,
                    "latestMob": 1511951606598,
                    "loveCount": 120,
                    "hateCount": 26,
                    "ioiId": "ftap-company-acmecorp",
                    "okCount": 26,
                    "title": "Acme Corp",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 139,
                    "lastReviewedAt": [
                        1513073258000
                    ],
                    "respondedMobsCount": 4,
                    "mobCount": 23,
                    "timestamp": 1502908300265,
                    "latestMob": 1510295921452,
                    "loveCount": 34,
                    "hateCount": 50,
                    "ioiId": "ftap-company-tapapp",
                    "okCount": 55,
                    "title": "Tap app",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 74,
                    "lastReviewedAt": [
                        1511763714000
                    ],
                    "respondedMobsCount": 3,
                    "mobCount": 7,
                    "timestamp": 1509630739891,
                    "latestMob": 1510018954691,
                    "loveCount": 71,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day12",
                    "okCount": 3,
                    "title": "Day12",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 62,
                    "lastReviewedAt": [
                        1512623940000
                    ],
                    "respondedMobsCount": 6,
                    "mobCount": 15,
                    "timestamp": 1490345707706,
                    "latestMob": 1509985653882,
                    "loveCount": 38,
                    "hateCount": 11,
                    "ioiId": "ftap-company-levis",
                    "okCount": 13,
                    "title": "Levis",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 61,
                    "lastReviewedAt": [
                        1510570411000
                    ],
                    "mobCount": 8,
                    "timestamp": 1488275427341,
                    "latestMob": 1509999516931,
                    "loveCount": 34,
                    "hateCount": 12,
                    "ioiId": "ftap-company-hahahh",
                    "okCount": 15,
                    "title": "Hahahh",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 49,
                    "lastReviewedAt": [
                        1510912624000
                    ],
                    "respondedMobsCount": 2,
                    "mobCount": 11,
                    "timestamp": 1490354339902,
                    "latestMob": 1510726977625,
                    "loveCount": 34,
                    "hateCount": 5,
                    "ioiId": "ftap-company-honda",
                    "okCount": 10,
                    "title": "Honda",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 43,
                    "lastReviewedAt": [
                        1511335559000
                    ],
                    "respondedMobsCount": 5,
                    "mobCount": 9,
                    "timestamp": 1488363622852,
                    "latestMob": 1510675326191,
                    "loveCount": 22,
                    "hateCount": 17,
                    "ioiId": "ftap-company-test1",
                    "okCount": 4,
                    "title": "Test 1",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 35,
                    "lastReviewedAt": [
                        1511878260000
                    ],
                    "respondedMobsCount": 3,
                    "mobCount": 9,
                    "timestamp": 1509085158522,
                    "latestMob": 1510134156435,
                    "loveCount": 9,
                    "hateCount": 6,
                    "ioiId": "ftap-company-warrenbuffet",
                    "okCount": 20,
                    "title": "Warren Buffet",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 33,
                    "lastReviewedAt": [
                        1513007996000
                    ],
                    "mobCount": 2,
                    "timestamp": 1509629726448,
                    "latestMob": 1513008003313,
                    "loveCount": 33,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day11",
                    "okCount": 0,
                    "title": "Day11",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 33,
                    "lastReviewedAt": [
                        1507878777000
                    ],
                    "respondedMobsCount": 5,
                    "mobCount": 0,
                    "timestamp": 1507801774896,
                    "latestMob": 1507878782811,
                    "loveCount": 11,
                    "hateCount": 14,
                    "ioiId": "ftap-company-newcustombrand",
                    "okCount": 8,
                    "title": "New Custom Brand",
                    "hasResponse": true,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 23,
                    "lastReviewedAt": [
                        1509962406000
                    ],
                    "mobCount": 2,
                    "timestamp": 1509555393500,
                    "latestMob": 1509962326359,
                    "loveCount": 23,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day6",
                    "okCount": 0,
                    "title": "Day6",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 21,
                    "lastReviewedAt": [
                        1512036487000
                    ],
                    "mobCount": 1,
                    "timestamp": 1505347459521,
                    "loveCount": 5,
                    "hateCount": 5,
                    "ioiId": "ftap-company-panerabread",
                    "okCount": 11,
                    "title": "Panera Bread",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 20,
                    "lastReviewedAt": [
                        1510895112000
                    ],
                    "mobCount": 7,
                    "timestamp": 1508919582475,
                    "latestMob": 1509953254282,
                    "loveCount": 8,
                    "hateCount": 5,
                    "ioiId": "ftap-company-brandbyjenni",
                    "okCount": 7,
                    "title": "Brand by Jenni",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 20,
                    "lastReviewedAt": [
                        1510651721000
                    ],
                    "mobCount": 6,
                    "timestamp": 1509690218048,
                    "latestMob": 1510604204971,
                    "loveCount": 3,
                    "hateCount": 7,
                    "ioiId": "ftap-company-brand3nov11:53am",
                    "okCount": 10,
                    "title": "brand 3Nov 11:53 AM",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 19,
                    "lastReviewedAt": [
                        1510833117000
                    ],
                    "respondedMobsCount": 3,
                    "mobCount": 4,
                    "timestamp": 1501487492360,
                    "latestMob": 1509436144359,
                    "loveCount": 19,
                    "hateCount": 0,
                    "ioiId": "ftap-company-rollsroycephantomviii",
                    "okCount": 0,
                    "title": "Rolls Royce Phantom VIII",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 19,
                    "lastReviewedAt": [
                        1510330194000
                    ],
                    "respondedMobsCount": 3,
                    "mobCount": 3,
                    "timestamp": 1509781572822,
                    "latestMob": 1509802052221,
                    "loveCount": 5,
                    "hateCount": 8,
                    "ioiId": "ftap-company-cafecoffeeday",
                    "okCount": 6,
                    "title": "Cafe coffee day",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 18,
                    "lastReviewedAt": [
                        1510719392000
                    ],
                    "respondedMobsCount": 4,
                    "mobCount": 1,
                    "timestamp": 1509346806323,
                    "latestMob": 1509347899371,
                    "loveCount": 12,
                    "hateCount": 6,
                    "ioiId": "ftap-company-tweeter",
                    "okCount": 0,
                    "title": "Tweeter",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 17,
                    "lastReviewedAt": [
                        1510651572000
                    ],
                    "mobCount": 2,
                    "timestamp": 1499757686705,
                    "latestMob": 1499926388506,
                    "loveCount": 16,
                    "hateCount": 1,
                    "ioiId": "ftap-company-tomcruise-misionimpossible",
                    "okCount": 0,
                    "title": "Tom Cruise - Mision Impossible",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 17,
                    "lastReviewedAt": [
                        1510570448000
                    ],
                    "respondedMobsCount": 1,
                    "mobCount": 4,
                    "timestamp": 1490354752941,
                    "latestMob": 1510570458268,
                    "loveCount": 8,
                    "hateCount": 6,
                    "ioiId": "ftap-company-apple🍎",
                    "okCount": 3,
                    "title": "Apple 🍎",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 16,
                    "lastReviewedAt": [
                        1509950660000
                    ],
                    "mobCount": 1,
                    "timestamp": 1509618044389,
                    "latestMob": 1509950671609,
                    "loveCount": 16,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day9",
                    "okCount": 0,
                    "title": "Day9",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 15,
                    "lastReviewedAt": [
                        1510131434000
                    ],
                    "mobCount": 3,
                    "timestamp": 1495008390115,
                    "latestMob": 1509668885958,
                    "loveCount": 14,
                    "hateCount": 0,
                    "ioiId": "ftap-company-maseratighibli",
                    "okCount": 1,
                    "title": "Maserati Ghibli",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 13,
                    "lastReviewedAt": [
                        1510743580000
                    ],
                    "mobCount": 0,
                    "timestamp": 1509541482980,
                    "loveCount": 12,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day3",
                    "okCount": 1,
                    "title": "Day3",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 13,
                    "lastReviewedAt": [
                        1510570507000
                    ],
                    "mobCount": 3,
                    "timestamp": 1490354523092,
                    "latestMob": 1509669092317,
                    "loveCount": 1,
                    "hateCount": 0,
                    "ioiId": "ftap-company-suzuki",
                    "okCount": 12,
                    "title": "Suzuki",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 13,
                    "lastReviewedAt": [
                        1509979310000
                    ],
                    "mobCount": 2,
                    "timestamp": 1509896019093,
                    "latestMob": 1509963100417,
                    "loveCount": 5,
                    "hateCount": 0,
                    "ioiId": "ftap-company-day16",
                    "okCount": 8,
                    "title": "Day16",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 13,
                    "lastReviewedAt": [
                        1509668848000
                    ],
                    "mobCount": 3,
                    "timestamp": 1505347459515,
                    "latestMob": 1509668859635,
                    "loveCount": 1,
                    "hateCount": 7,
                    "ioiId": "ftap-company-abril.com.br",
                    "okCount": 5,
                    "title": "Abril.com.br",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 12,
                    "lastReviewedAt": [
                        1511332595000
                    ],
                    "mobCount": 0,
                    "timestamp": 1486059453471,
                    "latestMob": 1509101136502,
                    "loveCount": 0,
                    "hateCount": 6,
                    "ioiId": "ftap-company-starbuffetinc",
                    "okCount": 6,
                    "title": "Star Buffet Inc",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 12,
                    "lastReviewedAt": [
                        1510570579000
                    ],
                    "respondedMobsCount": 1,
                    "mobCount": 4,
                    "timestamp": 1509356335385,
                    "latestMob": 1509668832936,
                    "loveCount": 9,
                    "hateCount": 0,
                    "ioiId": "ftap-company-brandtestnow",
                    "okCount": 3,
                    "title": "Brandtestnow",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 12,
                    "lastReviewedAt": [
                        1507573982000
                    ],
                    "respondedMobsCount": 2,
                    "mobCount": 0,
                    "timestamp": 1507551732990,
                    "latestMob": 1507556889715,
                    "loveCount": 8,
                    "hateCount": 0,
                    "ioiId": "ftap-company-astonmartindb11",
                    "okCount": 4,
                    "title": "Aston Martin DB11",
                    "hasResponse": true,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 11,
                    "lastReviewedAt": [
                        1509666756000
                    ],
                    "mobCount": 4,
                    "timestamp": 1488276267120,
                    "latestMob": 1509663570297,
                    "loveCount": 7,
                    "hateCount": 1,
                    "ioiId": "ftap-company-kill",
                    "okCount": 3,
                    "title": "Kill",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 10,
                    "lastReviewedAt": [
                        1510072441000
                    ],
                    "mobCount": 2,
                    "timestamp": 1490598869242,
                    "latestMob": 1509512586285,
                    "loveCount": 5,
                    "hateCount": 0,
                    "ioiId": "ftap-company-puma",
                    "okCount": 5,
                    "title": "Puma",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 10,
                    "lastReviewedAt": [
                        1510052454000
                    ],
                    "respondedMobsCount": 1,
                    "mobCount": 1,
                    "timestamp": 1509981109155,
                    "latestMob": 1509981249488,
                    "loveCount": 1,
                    "hateCount": 7,
                    "ioiId": "ftap-company-tonic",
                    "okCount": 2,
                    "title": "Tonic",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 10,
                    "lastReviewedAt": [
                        1508918201000
                    ],
                    "mobCount": 2,
                    "timestamp": 1508825336092,
                    "latestMob": 1508825595265,
                    "loveCount": 10,
                    "hateCount": 0,
                    "ioiId": "ftap-company-tatamotors",
                    "okCount": 0,
                    "title": "Tata Motors",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 9,
                    "lastReviewedAt": [
                        1510124786000
                    ],
                    "mobCount": 0,
                    "timestamp": 1503043740190,
                    "loveCount": 9,
                    "hateCount": 0,
                    "ioiId": "ftap-company-testbrandforfilter",
                    "okCount": 0,
                    "title": "Test Brand for Filter",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 9,
                    "lastReviewedAt": [
                        1509447380000
                    ],
                    "mobCount": 0,
                    "timestamp": 1497426820567,
                    "loveCount": 6,
                    "hateCount": 3,
                    "ioiId": "ftap-company-rolex",
                    "okCount": 0,
                    "title": "Rolex",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1510124973000
                    ],
                    "mobCount": 1,
                    "timestamp": 1510123621720,
                    "latestMob": 1510123717118,
                    "loveCount": 3,
                    "hateCount": 0,
                    "ioiId": "ftap-company-brand8nov",
                    "okCount": 5,
                    "title": "Brand 8 Nov",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1509806218000
                    ],
                    "mobCount": 1,
                    "timestamp": 1494313991472,
                    "latestMob": 1509666899804,
                    "loveCount": 2,
                    "hateCount": 0,
                    "ioiId": "ftap-company-spacex",
                    "okCount": 6,
                    "title": "SpaceX",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1509601390000
                    ],
                    "mobCount": 2,
                    "timestamp": 1494312656266,
                    "loveCount": 1,
                    "hateCount": 5,
                    "ioiId": "ftap-company-teslamotors",
                    "okCount": 2,
                    "title": "Tesla motors",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1509595765000
                    ],
                    "mobCount": 2,
                    "timestamp": 1486050610108,
                    "latestMob": 1509512607879,
                    "loveCount": 1,
                    "hateCount": 0,
                    "ioiId": "ftap-company-bondysjeep",
                    "okCount": 7,
                    "title": "Bondys Jeep",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1509435409000
                    ],
                    "respondedMobsCount": 3,
                    "mobCount": 3,
                    "timestamp": 1500620720718,
                    "latestMob": 1501486087182,
                    "loveCount": 8,
                    "hateCount": 0,
                    "ioiId": "ftap-company-louisphillipe",
                    "okCount": 0,
                    "title": "Louis Phillipe",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 8,
                    "lastReviewedAt": [
                        1503039107000
                    ],
                    "mobCount": 1,
                    "timestamp": 1503038286967,
                    "latestMob": 1503039119347,
                    "loveCount": 5,
                    "hateCount": 0,
                    "ioiId": "ftap-company-fiatspider",
                    "okCount": 3,
                    "title": "Fiat Spider",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 7,
                    "lastReviewedAt": [
                        1512036110000
                    ],
                    "mobCount": 1,
                    "timestamp": 1512034935207,
                    "latestMob": 1512035639855,
                    "loveCount": 0,
                    "hateCount": 0,
                    "ioiId": "ftap-company-panerabreadcoolest",
                    "okCount": 7,
                    "title": "Panera bread coolest",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 7,
                    "lastReviewedAt": [
                        1508234848000
                    ],
                    "mobCount": 1,
                    "timestamp": 1508135334791,
                    "latestMob": 1508234858983,
                    "loveCount": 4,
                    "hateCount": 3,
                    "ioiId": "ftap-company-mobformationtest",
                    "okCount": 0,
                    "title": "Mob formation test",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 7,
                    "lastReviewedAt": [
                        1507633133000
                    ],
                    "respondedMobsCount": 1,
                    "mobCount": 0,
                    "timestamp": 1507629472020,
                    "latestMob": 1507629685682,
                    "loveCount": 7,
                    "hateCount": 0,
                    "ioiId": "ftap-company-brandupdatedtime",
                    "okCount": 0,
                    "title": "Brand updated time",
                    "hasResponse": true,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 7,
                    "lastReviewedAt": [
                        1501490075000
                    ],
                    "mobCount": 1,
                    "timestamp": 1486050610108,
                    "loveCount": 5,
                    "hateCount": 2,
                    "ioiId": "ftap-company-bmw",
                    "okCount": 0,
                    "title": "BMW",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 6,
                    "lastReviewedAt": [
                        1509667187000
                    ],
                    "mobCount": 0,
                    "timestamp": 1504682745646,
                    "loveCount": 6,
                    "hateCount": 0,
                    "ioiId": "ftap-company-lamborghinihurican",
                    "okCount": 0,
                    "title": "Lamborghini Hurican",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": false,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 6,
                    "lastReviewedAt": [
                        1509602940000
                    ],
                    "mobCount": 1,
                    "timestamp": 1509434274668,
                    "latestMob": 1509437601945,
                    "loveCount": 6,
                    "hateCount": 0,
                    "ioiId": "ftap-company-jamesbond",
                    "okCount": 0,
                    "title": "James Bond",
                    "respondedMobsCount": 0,
                    "hasResponse": false,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                },
                {
                    "totalCount": 6,
                    "lastReviewedAt": [
                        1507548250000
                    ],
                    "respondedMobsCount": 1,
                    "mobCount": 2,
                    "timestamp": 1498639052420,
                    "latestMob": 1505841964230,
                    "loveCount": 1,
                    "hateCount": 5,
                    "ioiId": "ftap-company-rollsroycesweptail",
                    "okCount": 0,
                    "title": "Rolls Royce Sweptail",
                    "hasResponse": true,
                    "hasMob": true,
                    "isFriend": false,
                    "isReviewedByMe": false
                }
            ];
    }


    const data = {
        feedbacks: feedbacks(),
        Items: brandsItems()
    };
    return data;

}
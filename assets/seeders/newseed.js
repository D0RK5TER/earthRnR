'use strict';

/**  @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { User } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
import {
    addressSample, nameSample, priceSample,
    cityStateSample, descriptSample, descriptVsample,
    reviews,
    images,
    cheap, cheapsmall, mid, midsmall, big, bigsmall,
    dates,
    bookingSkeleton, spotimageSkeleton, reviewSkeleton,
    reviewimageSkeleton, spotSkeleton,
    getRandom

} from '../../utils/seeddata';

const randomSpots = []
const randomReviews = []
const randomReviewImage = []
const imgs = []
const randomBookings = []

module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = 'Users'
        await queryInterface.bulkInsert(options, [
            {
                firstName: 'Dexter',
                lastName: 'Asssf',
                email: 'user0@user.net',
                username: 'D0rk5ter',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Faye',
                lastName: 'Assaf',
                email: 'user1@user.co',
                username: 'Jauxman',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'user2@user.co',
                username: 'MMMCMM',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Linda',
                lastName: 'Belcher',
                email: 'user3@user.co',
                username: 'RKOman',
                hashedPassword: bcrypt.hashSync('password')
            },
            //   {
            //     firstName: 'Prap',
            //     lastName: 'Tinnabavorn',
            //     email: 'user4@user.co',
            //     username: 'pRapper',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Matt',
            //     lastName: 'Kleinsmith',
            //     email: 'user5@user.co',
            //     username: 'Ketmasta',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Trevor',
            //     lastName: 'Moore',
            //     email: 'user6@user.co',
            //     username: 'MoreT',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Tyler',
            //     lastName: 'Short',
            //     email: 'user7@user.co',
            //     username: 'ShortTee',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Tohm',
            //     lastName: 'Lev',
            //     email: 'user8@user.co',
            //     username: 'TohmsDiner',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Chris',
            //     lastName: 'Cohen',
            //     email: 'user9@user.co',
            //     username: 'CCplease',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Mauro',
            //     lastName: 'Alvarez',
            //     email: 'user10@user.co',
            //     username: 'MoMar',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Jozua',
            //     lastName: 'Lewis',
            //     email: 'user11@user.co',
            //     username: 'JozinYou',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Haris',
            //     lastName: 'Ahmed',
            //     email: 'user12@user.co',
            //     username: 'Hairzz',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Nora',
            //     lastName: 'Stokes',
            //     email: 'user13@user.co',
            //     username: 'Snokes',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Dave',
            //     lastName: 'Sexton',
            //     email: 'user14@user.co',
            //     username: 'SextonD',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Grey',
            //     lastName: 'Nance',
            //     email: 'user15@user.co',
            //     username: 'Grance',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Roy',
            //     lastName: 'Lee',
            //     email: 'user16@user.co',
            //     username: 'Leeroy',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Jade',
            //     lastName: 'Tran',
            //     email: 'user17@user.co',
            //     username: 'JadoTran',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Efrain',
            //     lastName: 'Niafe',
            //     email: 'user18@user.co',
            //     username: 'effinRain',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Sarah',
            //     lastName: 'Dunlop',
            //     email: 'user19@user.co',
            //     username: 'SunLop',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Xena',
            //     lastName: 'Kitty',
            //     email: 'user20@user.co',
            //     username: 'CatFish',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },
            //   {
            //     firstName: 'Alex',
            //     lastName: 'Kim',
            //     email: 'user21@user.co',
            //     username: 'Kilex',
            //     hashedPassword: bcrypt.hashSync('password')
            //   },

        ]
            ,
            {})



        ////////////////////USER END///////////////////////////////////////////////////
        options.tableName = 'Spots'

        let ownerSample = await User.findAll();
        ownerSample = JSON.parse(JSON.stringify(ownerSample))

        while (randomSpots.length < 3) {
            let newRandom = { ...spotSkeleton }
            let owner = ownerSample[getRandom(ownerSample.length - 1)]
            let stateCity = cityStateSample[getRandom(cityStateSample.length - 1)]
            let address = addressSample[getRandom(addressSample.length - 1)]
            let price = priceSample[getRandom(priceSample.length - 1)]
            let descriptIntro = descriptSample[getRandom(descriptSample.length - 1)]
            let description1 = descriptVsample[getRandom(descriptVsample.length - 1)]
            let description2 = descriptVsample[getRandom(descriptVsample.length - 1)]
            while (description1 === description2) description2 = descriptVsample[getRandom(descriptVsample.length - 1)]
            let description3 = descriptVsample[getRandom(descriptVsample.length - 1)]
            while (description3 === description1 || description3 === description2) description3 = descriptVsample[getRandom(descriptVsample.length - 1)]
            description3 = description3.slice(0, -1)
            description3 = 'and ' + description3 + '.'
            newRandom.ownerId = owner.id
            newRandom.name = `${nameSample[getRandom(nameSample.length - 1)]}`
            newRandom.city = stateCity.city
            newRandom.state = stateCity.state
            newRandom.address = address
            newRandom.price = price
            newRandom.description = `${newRandom.name} ${descriptIntro} ${description1} ${description2} ${description3}`
            randomSpots.push(newRandom)
        }

        await queryInterface.bulkInsert(options, randomSpots, {})

        ////////////////////SPOTS END///////////////////////////////////////////////////
        options.tableName = 'Reviews'
        let userSample = await User.findAll();
        userSample = JSON.parse(JSON.stringify(userSample))
        spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))
        for (let spot of spotSample) {
            // let newRandom = { ...reviewSkeleton }
            let notowner = userSample.filter(x => spot.ownerId !== x.id)
            notowner = notowner.map(x => x = x.id)
            let numRevs = getRandom(5)
            if (numRevs === 0) continue
            // let randomizer = []
            // console.log(notowner, 'notowner')
            let userids = []
            while (numRevs > 0) {
                let ran = getRandom(notowner.length - 1)
                notowner[ran][0] ? userids.push(notowner.splice(ran, 1)) : userids.push(notowner.splice(ran, 1))[0]
                --numRevs
            }
            // console.log('userids>', userids)
            userids.forEach(x => {
                let newRandom = { ...reviewSkeleton }
                x = x[0]
                newRandom.userId = x
                newRandom.spotId = spot.id
                let review = reviews[getRandom(reviews.length - 1)]
                let star = review.slice(-1)
                star = +star
                // review = review.slice(-1)
                // console.log(review, '11')
                newRandom.review = review.slice(0, -1)
                newRandom.stars = star
                // console.log(newRandom)
                randomReviews.push(newRandom)
            })
        }
        options.tableName = 'Reviews'
        await queryInterface.bulkInsert(options, randomSpots, {})
        // console.log(randomReviews)
        // console.log(randomReviews)
        ////////////////////Reviews END///////////////////////////////////////////////////
        let reviewSample = await Review.findAll();
        reviewSample = JSON.parse(JSON.stringify(reviewSample))
        let revids = reviewSample.map(x => x = x.id)
        revids.forEach(x => {
            let z = { ...reviewimageSkeleton }
            let ran = images[getRandom(images.length - 1)]
            z.reviewId = x
            z.url = ran
            randomReviewImage.push(z)
        })
        // console.log(revids)
        options.tableName = 'ReviewImages'
        await queryInterface.bulkInsert(options, randomReviewImage, {})

        ////////////////////REVIMG END///////////////////////////////////////////////////
        let spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))

        for (let s of spotSample) {
            let newimg = { ...spotimageSkeleton }
            if (s.price < 100) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = cheap[getRandom(cheap.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = cheapsmall[getRandom(cheapsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            } else if (s.price < 300) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = mid[getRandom(mid.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = midsmall[getRandom(midsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            } else {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = big[getRandom(big.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = bigsmall[getRandom(bigsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            }
        }
        options.tableName = 'SpotImages'
        await queryInterface.bulkInsert(options, imgs, {})

        ////////////////////spotIMG END///////////////////////////////////////////////////

        spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))
        userSample = await User.findAll();
        userSample = JSON.parse(JSON.stringify(userSample))
        spotSample.forEach(x => {
            let notowner = userSample.filter(ux => x.ownerId !== ux.id)
            notowner = notowner.map(lux => lux = lux.id)
            let numBoo = getRandom(dates.length - 1)
            while (numBoo > -1) {
                let newRandom = { ...bookingSkeleton }
                newRandom.startDate += dates[numBoo][0]
                newRandom.endDate += dates[numBoo][1]
                newRandom.spotId = x.id
                newRandom.userId = notowner[numBoo]
                randomBookings.push(newRandom)
                --numBoo
            }
        })
        options.tableName = 'Bookings'
        await queryInterface.bulkInsert(options, randomBookings, {})





    },

    async down(queryInterface, Sequelize) {


        options.tableName = 'Bookings'
        await queryInterface.bulkDelete(options, {})
        options.tableName = 'SpotImages'
        await queryInterface.bulkDelete(options, {})
        options.tableName = 'ReviewImages'
        await queryInterface.bulkDelete(options, {})
        options.tableName = 'Reviews'
        await queryInterface.bulkDelete(options, {})
        options.tableName = 'Spots'
        await queryInterface.bulkDelete(options, {})
        options.tableName = 'Users'
        await queryInterface.bulkDelete(options, {});
    },
};

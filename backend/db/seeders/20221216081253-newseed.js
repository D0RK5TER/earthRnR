'use strict';

/**  @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { User, Spot, Review } = require('../models')
const {
    addressSample, nameSample, priceSample,
    cityStateSample, descriptSample, descriptVsample,
    reviews,
    images,
    cheap, cheapsmall, mid, midsmall, big, bigsmall,
    topWorld, topWorldSmall, lake, lakeSmall, rv, rvSmall,
    dirt, dirtSmall, treeh, treehSmall, mansion, mansionSmall,
    dates,
    bookingSkeleton, spotimageSkeleton, reviewSkeleton,
    reviewimageSkeleton, spotSkeleton,


} = require('../../utils/seeddata');
let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}


const getRandom = (max) => Math.floor(Math.random() * max);

module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = 'Users'

        await queryInterface.bulkInsert(options, [
            {
                firstName: 'Dexter',
                lastName: 'Asssf',
                email: 'user0@user.net',
                username: 'D0RK5TER',
                profilepic: "https://pyxis.nymag.com/v1/imgs/375/6e1/eb93dbbaa3b846ed924ca831d8009d280b-10-muppets.2x.rhorizontal.w700.jpg",
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Faye',
                lastName: 'Assaf',
                email: 'user1@user.co',
                username: 'Faye1',
                profilepic: 'https://cdn2.momjunction.com/wp-content/uploads/2021/01/Baby-Body-Language-Cues-And-Their-Meaning1-624x702.jpg.webp',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'user2@user.co',
                username: 'John2',
                profilepic: 'http://images.pexels.com/photos/13915795/pexels-photo-13915795.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Linda',
                lastName: 'Belcher',
                email: 'user3@user.co',
                username: 'Linda3',
                profilepic: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/16/16/asset/buzzfeed-prod-web-06/sub-buzz-6918-1539720734-2.jpg?downsize=600:*&output-format=auto&output-quality=auto',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Hiro',
                lastName: 'Protaganist',
                email: 'user4@user.co',
                username: 'Hiro4',
                profilepic: 'http://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/344e214c-acbd-41c6-81fa-52865e617e71/d89kjor-4bcf7ea4-ae32-4822-aae6-e2399e452bb8.png/v1/fit/w_300,h_409,q_70,strp/hiro_protagonist_fanart_by_bobweaver_d89kjor-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDA5IiwicGF0aCI6IlwvZlwvMzQ0ZTIxNGMtYWNiZC00MWM2LTgxZmEtNTI4NjVlNjE3ZTcxXC9kODlram9yLTRiY2Y3ZWE0LWFlMzItNDgyMi1hYWU2LWUyMzk5ZTQ1MmJiOC5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.meuB9ANJ3U9D4odB6e5bvltOcGbPgo77ClRgKOXKAsA',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Harry',
                lastName: 'Dresden',
                email: 'user5@user.co',
                username: 'Harry5',
                profilepic: 'http://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e05cb53-208a-4c6a-aac5-0ff903d5638d/d9ivlbc-485ce355-5ffa-4bb7-a3aa-5c9d776b13d7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMDVjYjUzLTIwOGEtNGM2YS1hYWM1LTBmZjkwM2Q1NjM4ZFwvZDlpdmxiYy00ODVjZTM1NS01ZmZhLTRiYjctYTNhYS01YzlkNzc2YjEzZDcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lH5hQvSJHiK2LeS70tcXrhibnbi64fH-IIEj0VJ33LQ',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Akira',
                lastName: 'Akiraaaa',
                email: 'user6@user.co',
                username: 'Akira6',
                profilepic: 'http://resizing.flixster.com/rSB5S1ij4s96it1R650D6btKLGI=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/394/39/thumb_228AAEE5-F448-49D1-847F-2EA36E31601E.jpg',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Kest',
                lastName: 'Greatcoat',
                email: 'user7@user.co',
                username: 'Kest7',
                profilepic: 'http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1474908838i/20655463.png',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Kellen',
                lastName: 'Argosi',
                email: 'user8@user.co',
                username: 'Kellen8',
                profilepic: 'https://64.media.tumblr.com/46a834f0d71ed568e234f18761b742f3/c2289f445ec8feb8-93/s1280x1920/2a5f3aaff63ed686ee103f6aa274e2dce63a6b9b.jpg',

                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Mia',
                lastName: 'Corvere',
                email: 'user9@user.co',
                username: 'Mia99',
                profilepic: 'http://images.pexels.com/photos/7705119/pexels-photo-7705119.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',

                hashedPassword: bcrypt.hashSync('password')
            },
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

        const randomSpots = []
        const randomReviews = []
        const randomReviewImage = []
        const imgs = []
        const randomBookings = []

        ////////////////////USER END///////////////////////////////////////////////////

        let ownerSample = await User.findAll();
        ownerSample = JSON.parse(JSON.stringify(ownerSample))


        // console.log('18912u39128u3912u3912u39123u9123u1', cityStateSample, randomSpots, descriptSample )
        while (randomSpots.length < 20) {
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

            price < 100 ? newRandom.type = 'earth' :
                price < 200 ? newRandom.type = 'rv' :
                    price < 600 ? newRandom.type = 'country' :
                        price < 1000 ? newRandom.type = 'tree' :
                            price < 2000 ? newRandom.type = 'lake' :
                                newRandom.type = 'mansion'


            randomSpots.push(newRandom)
        }
        options.tableName = 'Spots'
        await queryInterface.bulkInsert(options, randomSpots, {})

        ////////////////////SPOTS END///////////////////////////////////////////////////

        let userSample = await User.findAll();
        userSample = JSON.parse(JSON.stringify(userSample))

        let spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))

        for (let spot of spotSample) {
            let notowner = userSample.filter(x => spot.ownerId !== x.id)
            notowner = notowner.map(x => x = x.id)
            let numRevs = getRandom(7)
            if (numRevs === 0) continue
            let userids = []
            if (!notowner.length) continue
            let i = 0
            // while (numRevs > 0 && notowner.length) {
            //     --numRevs
            //     let id = notowner[i]
            //     // let ran = getRandom(notowner.length - 1)
            //     userids.push(id)
            //     i++
            //     // typeof id === 'number' ? userids.push(id) : userids.push(id)[0]
            // }
            if (!notowner.length) continue
            while (numRevs > 0) {
                let ran = getRandom(notowner.length - 1)
                notowner[ran][0] ? userids.push(notowner.splice(ran, 1)) : userids.push(notowner.splice(ran, 1))[0]
                --numRevs
            }

            userids.forEach(x => {
                let newRandom = { ...reviewSkeleton }
                x = x[0]
                newRandom.userId = x
                newRandom.spotId = spot.id
                let review = reviews[getRandom(reviews.length - 1)]
                let star = review.slice(-1)
                star = +star
                newRandom.review = review.slice(0, -1)
                newRandom.stars = star
                randomReviews.push(newRandom)
            })
        }
        // console.log()
        options.tableName = 'Reviews'
        await queryInterface.bulkInsert(options, randomReviews, {})
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
        spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))




        for (let s of spotSample) {
            let newimg = { ...spotimageSkeleton }
            let nrvsmall = [...rvSmall]
            let ndirtsmall = [...dirtSmall]
            let ntopWorldsmall = [...topWorldSmall]
            let ntreehsmall = [...treehSmall]
            let nlakesmall = [...lakeSmall]
            let nmansionsmall = [...mansionSmall]

            if (s.price < 100) {
                newimg.spotId = s.id
                newimg.preview = true

                newimg.url = dirt.splice(getRandom(dirt.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    // newsmallimg.url = cheapsmall[getRandom(cheapsmall.length - 1)]
                    newsmallimg.url = ndirtsmall.splice(getRandom(ndirtsmall.length - 1), 1)[0]
                    imgs.push(newsmallimg)
                    i++
                }
            } else if (s.price < 200) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = rv.splice(getRandom(rv.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nrvsmall.splice(getRandom(nrvsmall.length - 1), 1)[0]
                    imgs.push(newsmallimg)
                    i++
                }
            }
            else if (s.price < 600) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = topWorld.splice(getRandom(topWorld.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = ntopWorldsmall.splice(getRandom(ntopWorldsmall.length - 1), 1)[0]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.price < 1000) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = treeh.splice(getRandom(treeh.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = ntreehsmall.splice(getRandom(ntreehsmall.length - 1), 1)[0]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.price < 2000) {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = lake.splice(getRandom(lake.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nlakesmall.splice(getRandom(nlakesmall.length - 1), 1)[0]
                    imgs.push(newsmallimg)
                    i++
                }

            } else {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = mansion.splice(getRandom(mansion.length - 1), 1)[0]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nmansionsmall.splice(getRandom(nmansionsmall.length - 1), 1)[0]
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
        spotSample.forEach(spot => {
            let notowner = userSample.filter(x => spot.ownerId !== x.id)
            notowner = notowner.map(x => x = x.id)
            let numBoo = getRandom(notowner.length - 1)
            let newdates = [...dates]
            // console.log(notowner, numBoo)
            while (numBoo > 1) {
                let newRandom = { ...bookingSkeleton }
                newRandom.startDate += newdates[numBoo][0]
                // newRandom.startDate = new Date(newRandom.startDate)
                newRandom.endDate += newdates[numBoo][1]
                newdates.splice(numBoo, 1)
                // newRandom.endDate = new Date(newRandom.endDate)
                newRandom.spotId = spot.id
                newRandom.userId = notowner[numBoo]
                randomBookings.push(newRandom)
                --numBoo
            }
            // console.log(randomBookings)
        })
        // console.log(randomBookings)
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

'use strict';

// /** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { User, Spot, Review } = require('../backend/db/models')
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


} = require('../backend/utils/seeddata');
let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}


const getRandom = (max) => Math.floor(Math.random() * max);

module.exports = {
    async up(queryInterface, Sequelize) {

        let existingUsers = await User.findAll();
        existingUsers = JSON.parse(JSON.stringify(existingUsers))
        let exUsers = []
        for (let u of existingUsers) exUsers.push(u.id)

        let existingReviews = await Review.findAll();
        existingReviews = JSON.parse(JSON.stringify(existingReviews))
        let exRev = []
        for (let r of existingReviews) exRev.push(r.id)

        let existingSpots = await Spot.findAll();
        existingSpots = JSON.parse(JSON.stringify(existingSpots))
        let exSpots = []
        for (let s of existingSpots) exSpots.push(s.id)

        const randomSpots = []
        const randomReviews = []
        const randomReviewImage = []
        const imgs = []
        const randomBookings = []


        options.tableName = 'Users'
        await queryInterface.bulkInsert(options, [
            {
                firstName: 'Kvothe',
                lastName: 'Takestolong',
                email: 'user18@user.co',
                username: 'Grancey',
                profilepic: 'https://cdna.artstation.com/p/assets/images/images/026/202/042/large/rocio-sogas-kvothe.jpg?1588166051',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Fitz',
                lastName: 'Chilvary',
                email: 'user19@user.co',
                username: 'Leeroyed',
                profilepic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ab8e2fa-0d95-4433-bcc2-9a40208773e6/d8bwaah-0c1f3111-8858-4706-bde9-ccc252b90e58.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhYjhlMmZhLTBkOTUtNDQzMy1iY2MyLTlhNDAyMDg3NzNlNlwvZDhid2FhaC0wYzFmMzExMS04ODU4LTQ3MDYtYmRlOS1jY2MyNTJiOTBlNTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsyFup3OPgw0CTCphompqVfxNmbE04skqpyucdoVelg',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Rincewind',
                lastName: 'Churm',
                email: 'user20@user.co',
                username: 'CTrain',
                profilepic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bad0c71-ad9f-4436-89a3-efa67aeab5cf/d7k57sq-08ab7cc6-1ee9-4239-be26-830e248c607b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiYWQwYzcxLWFkOWYtNDQzNi04OWEzLWVmYTY3YWVhYjVjZlwvZDdrNTdzcS0wOGFiN2NjNi0xZWU5LTQyMzktYmUyNi04MzBlMjQ4YzYwN2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-PlxRpHcZ4Xpxj1ZbTPkmGgbS7jYGbou2lnbwK1s_BY',
                hashedPassword: bcrypt.hashSync('password')
            },
        ]
            ,
            {})
        //>>>>><><><<<<>><><><><<><><><><><><>><<><><>
        let ownerSample2 = await User.findAll();
        ownerSample2 = JSON.parse(JSON.stringify(ownerSample2))
        let ownerSample = []
        for (let own of ownerSample2) {
            if (!exUsers.includes(own.id)) ownerSample.push(own)
        }
        while (randomSpots.length < 10) {
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
        options.tableName = 'Spots'
        await queryInterface.bulkInsert(options, randomSpots, {})
        //>>>>><><><<<<>><><><><<><><><><><><>><<><><>
        let userSample = await User.findAll();
        userSample = JSON.parse(JSON.stringify(userSample))
        // let userSample = []
        // for (let use of userSample2) {
        //   if (!exUsers.includes(use.id)) userSample.push(use)
        // }
        let spotSample = await Spot.findAll({ where: { id: { [Sequelize.Op.gt]: 30 } } });
        spotSample = JSON.parse(JSON.stringify(spotSample))

        for (let spot of spotSample) {
            let notowner = userSample.filter(x => spot.ownerId !== x.id)
            notowner = notowner.map(x => x = x.id)
            let numRevs = getRandom(7)
            if (numRevs === 0) continue
            let i = 0
            let userids = []
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

                newRandom.cleanliness = star
                newRandom.communication = star
                newRandom.location = star
                newRandom.checkin = star
                newRandom.value = star
                newRandom.accuracy = star

                randomReviews.push(newRandom)
            })
        }
        // console.log()
        options.tableName = 'Reviews'
        await queryInterface.bulkInsert(options, randomReviews, {})

        //>>>>><><><<<<>><><><><<><><><><><><>><<><><>

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


        // />>>>><><><<<<>><><><><<><><><><><><>><<><><>
        spotSample = await Spot.findAll();
        spotSample = JSON.parse(JSON.stringify(spotSample))
        spotSample = spotSample.slice(existingSpots.length, spotSample.length)

        for (let s of spotSample) {
            let newimg = { ...spotimageSkeleton }
            let nrvsmall = [...rvSmall]
            let ndirtsmall = [...dirtSmall]
            let ntopWorldsmall = [...topWorldSmall]
            let ntreehsmall = [...treehSmall]
            let nlakesmall = [...lakeSmall]
            let nmansionsmall = [...mansionSmall]


            let nrv = [...rv]
            let ndirt = [...dirt]
            let ntopWorld = [...topWorld]
            let ntreeh = [...treeh]
            let nlake = [...lake]
            let nmansion = [...mansion]






            if (s.price < 100) {
                newimg.spotId = s.id
                newimg.preview = true
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false

                newimg.url = ndirt.splice(getRandom(dirt.length - 1), 1)[0]
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
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false
                newimg.url = nrv.splice(getRandom(rv.length - 1), 1)[0]
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
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false
                newimg.url = ntopWorld.splice(getRandom(topWorld.length - 1), 1)[0]
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
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false
                newimg.url = ntreeh.splice(getRandom(treeh.length - 1), 1)[0]
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
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false
                newimg.url = nlake.splice(getRandom(lake.length - 1), 1)[0]
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
                // !exSpots.includes(s.ownerId) ? newimg.preview = true : newimg.preview = false
                newimg.url = nmansion.splice(getRandom(mansion.length - 1), 1)[0]
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
    }
}
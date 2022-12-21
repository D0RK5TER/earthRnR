'use strict';

/**  @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');
const { User, Spot, Review } = require('../models')
const {
    addressSample, nameSample, priceSample,
    cityStateSample, descriptSample, descriptVsample,
    reviews,
    images,

    topWorld, topWorldSmall, lake, lakeSmall, rv, rvSmall,
    dirt, dirtSmall, tree, treehSmall, mansion, mansionSmall,
    dates,
    bookingSkeleton, spotimageSkeleton, reviewSkeleton,
    reviewimageSkeleton, spotSkeleton,

    cheapsmall, midsmall, bigsmall, genericSmall,
    snow, pool, game, island, iconic, creative, desert, beach, japan, contain, piano, windmill,
    snowSmall,
    amenities,
} = require('../../utils/seeddata');
let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

const typelist = {
    1: 'snow', 2: 'pool', 3: 'game', 4: 'island',
    15: 'iconic', 6: 'creative', 7: 'desert', 8: 'beach',
    9: 'japan', 10: 'contain', 11: 'piano', 12: 'windmill',
    13: 'lake', 14: 'rv', 15: 'dirt', 16: 'tree', 17: 'mansion', 18: 'country'
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
            {
                firstName: 'Richard',
                lastName: 'Kahl',
                email: 'user10@user.co',
                username: 'Richard10',
                profilepic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06f3d940-9485-4108-9c6f-496e988e8262/d35fbrp-956da90c-bfd1-4a67-8464-c7e70beb47ca.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2ZjNkOTQwLTk0ODUtNDEwOC05YzZmLTQ5NmU5ODhlODI2MlwvZDM1ZmJycC05NTZkYTkwYy1iZmQxLTRhNjctODQ2NC1jN2U3MGJlYjQ3Y2EuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cNYOX9FpKjkRkYluTEKuXiMBOmnHUi5mLqOxJTimq3M',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'Logan',
                lastName: 'Ninefingers',
                email: 'user11@user.co',
                username: 'Logan11',
                profilepic: 'https://i.ytimg.com/vi/ewGYJyLr6RU/maxresdefault.jpg',
                hashedPassword: bcrypt.hashSync('password')
            },
            {
                firstName: 'James',
                lastName: 'Stark',
                email: 'user12@user.co',
                username: 'James12',
                profilepic: 'https://images.squarespace-cdn.com/content/v1/5c01db6e7c9327aa94d92ad8/1543630746530-378K7XU749QO7DBZ3M1P/tarot-stark.jpg',
                hashedPassword: bcrypt.hashSync('password')
            },
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
        while (randomSpots.length < 99) {
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

            newRandom.attributes = ''
            let a = 0
            while (a < 3) {
                let amend = amenities[getRandom(amenities.length - 1)]
                if (newRandom.attributes.includes(amend)) continue
                else {
                    newRandom.attributes += amend
                    a++
                }
            }


            let ran = getRandom(18)
            while (ran < 1) ran = getRandom(18)

            newRandom.type = typelist[ran]



            // price < 100 ? newRandom.type = 'earth' :
            //     price < 200 ? newRandom.type = 'rv' :
            //         price < 600 ? newRandom.type = 'country' :
            //             price < 1000 ? newRandom.type = 'tree' :
            //                 price < 2000 ? newRandom.type = 'lake' :
            //                     newRandom.type = 'mansion'


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
            let numRevs = getRandom(10)
            if (numRevs === 0) continue
            let userids = []
            if (!notowner.length) continue
            // let i = 0
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
            // console.log(s)
            if (s.type === 'dirt') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = dirt[getRandom(dirt.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = dirtSmall[getRandom(dirtSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            } else if (s.type === 'rv') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = rv[getRandom(rv.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nrvsmall[getRandom(nrvsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            }
            else if (s.type === 'country') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = topWorld[getRandom(topWorld.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = ntopWorldsmall[getRandom(ntopWorldsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'tree') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = tree[getRandom(tree.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = ntreehsmall[getRandom(ntreehsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'lake') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = lake[getRandom(lake.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nlakesmall[getRandom(nlakesmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'mansion') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = mansion[getRandom(mansion.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = nmansionsmall[getRandom(nmansionsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }
            } else if (s.type === 'snow') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = snow[getRandom(snow.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = snowSmall[getRandom(snowSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'pool') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = pool[getRandom(pool.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'island') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = island[getRandom(island.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = bigsmall[getRandom(bigsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'piano') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = piano[getRandom(piano.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'iconic') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = iconic[getRandom(iconic.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'game') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = game[getRandom(game.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = midsmall[getRandom(midsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'windmill') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = windmill[getRandom(windmill.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = cheapsmall[getRandom(cheapsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'creative') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = creative[getRandom(creative.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'contain') {
                newimg.spotId = s.id
                newimg.preview = true

                newimg.url = contain[getRandom(contain.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'desert') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = desert[getRandom(desert.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = cheapsmall[getRandom(cheapsmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else if (s.type === 'beach') {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = beach[getRandom(beach.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = lakeSmall[getRandom(lakeSmall.length - 1)]
                    imgs.push(newsmallimg)
                    i++
                }

            } else {
                newimg.spotId = s.id
                newimg.preview = true
                newimg.url = japan[getRandom(japan.length - 1)]
                imgs.push(newimg)
                let i = 0
                while (i < 4) {
                    let newsmallimg = { ...newimg }
                    newsmallimg.preview = false
                    newsmallimg.url = genericSmall[getRandom(genericSmall.length - 1)]
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

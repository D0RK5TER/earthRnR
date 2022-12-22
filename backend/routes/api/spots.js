const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { User, Spot, Review, ReviewImage, SpotImage, Booking } = require('../../db/models');
const { Op } = require("sequelize");


const router = express.Router();

///added type search
// router.get('/type/:type', async (req, res) => {
//     const { type } = req.params

//     let spots = await Spot.findAll({
//         where: {
//             type: type,
//         },
//         include: [
//             { model: Review, required: false, raw: true, },
//             { model: SpotImage, required: false, raw: true }
//         ],
//     })
//     spots = JSON.parse(JSON.stringify(spots))
//     for (let spa of spots) {
//         spa.Reviews.length ? spa.avgRating = Review.getRating(spa.Reviews) : spa.avgRating = 0
//         spa.SpotImages.length ? spa.previewImage = spa.SpotImages.find(x => x.preview === true).url : spa.previewImage = 'No preview'
//         delete spa.Reviews
//         delete spa.SpotImages
//     }

//     res.status(201).json(spots)
// })
// ///added size search
// router.get('/size/:size', async (req, res) => {
//     const { type } = req.params
//     let spots = await Spot.findAll({
//         where: {
//             type: type,
//         },
//         include: [
//             { model: Review, required: false, raw: true, },
//             { model: SpotImage, required: false, raw: true }
//         ],
//     })
//     spots = JSON.parse(JSON.stringify(spots))
//     for (let spa of spots) {
//         spa.Reviews.length ? spa.avgRating = Review.getRating(spa.Reviews) : spa.avgRating = 0
//         spa.SpotImages.length ? spa.previewImage = spa.SpotImages.find(x => x.preview === true).url : spa.previewImage = 'No preview'
//         delete spa.Reviews
//         delete spa.SpotImages
//     }

//     res.status(201).json(spots)
// })


router.get('/:spotId/reviews', async (req, res) => {
    const { spotId } = req.params
    const Reviews = await Spot.findAll({
        where: { id: spotId },
        include: [
            {
                model: Review,
                include: [{
                    model: ReviewImage,
                    attributes: ['id', 'url']
                },
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'profilepic']
                }],
            },],
        attributes: []
    })
    if (!Reviews[0]) {
        err = new Error('Spot couldn`t be found')
        err.status = 404
        throw err
    }
    res.json(Reviews[0])
})



router.get('/:spotId/bookings',
    requireAuth,
    async (req, res) => {
        const { spotId } = req.params
        const user = req.user.id
        let bookings = await Booking.findAll({
            where: { spotId: spotId },
            include: [
                { model: Spot, raw: true, attributes: ['ownerId'] },
                { model: User, raw: true, }
            ],
        })
        if (!bookings[0]) {
            let er = new Error('Spot couldn`t be found')
            er.status = 404
            throw er
        }
        bookings = JSON.parse(JSON.stringify(bookings))
        // console.log(bookings[0].Spot.ownerId, user)
        if (bookings[0].Spot.ownerId === user) {
            for (let b of bookings) {
                b.id = +spotId
                delete b.User.username
                delete b.Spot
            }
        } else {
            for (let b of bookings) {
                let c = {}
                // console.log(b)
                delete b.userId
                delete b.createdAt
                delete b.updatedAt
                delete b.User
                delete b.Spot
            }
        }
        res.json({ bookings })

    })

router.get('/current',
    requireAuth,
    async (req, res) => {
        //console.log('heyyyyyy')
        const user = req.user.id
        let spots = await Spot.findAll({
            where: { ownerId: user },
            include: [
                { model: Review, required: false, raw: true, required: false },
                { model: SpotImage, required: false, raw: true, where: { preview: true }, required: false }
            ],
            // raw: true,
            // group: [ 'id', 'SpotImages', 'Review.stars']
        })
        spots = JSON.parse(JSON.stringify(spots))
        for (let spa of spots) {
            spa.avgRating = Review.getRating(spa.Reviews)
            if (spa.SpotImages[0]) {
                spa.previewImage = spa.SpotImages[0].url
            } else spa.previewImage = null
            delete spa.Reviews
            delete spa.SpotImages
            spa = spa
        }
        res.status(201).json(spots)
    })



router.get('/', async (req, res) => {
    let { bed, bath, type, minPrice, maxPrice } = req.query;

    if (bed) {
        bed = +bed - 1
    } else bed = 0
    if (bath) {
        bath = +bath - 1
    } else bath = 0

    let alltypes = ['snow', 'pool', 'game', 'island',
        'iconic', 'creative', 'desert', 'beach',
        'japan', 'contain', 'piano', 'windmill',
        'lake', 'rv', 'dirt', 'tree', 'mansion', 'country']
    if (type) {
        type = alltypes.filter(x => type.includes(x))
    } else type = alltypes

    if (maxPrice) {
        maxPrice = +maxPrice
        !maxPrice ? maxPrice = 1000000000 :
            isNaN(+maxPrice) ? maxPrice = 100000000 :
                maxPrice
    } else maxPrice = 10000000
    // console.log(maxPrice, page, size)
    if (minPrice) {
        minPrice = +minPrice
        !minPrice ? minPrice = 0 :
            isNaN(+minPrice) ? minPrice = 0 :
                minPrice
    } else minPrice = 0
    let spots = await Spot.findAll({
        where: {
            price: { [Op.and]: { [Op.lt]: maxPrice, [Op.gt]: minPrice } },
            type: { [Op.in]: type },
            bed: { [Op.gt]: bed },
            bath: { [Op.gt]: bath }
        },
        include: [
            { model: Review, required: false, raw: true, },
            { model: SpotImage, required: false, raw: true }
        ],
        // raw: true,
        // group: [ 'id', 'SpotImages', 'Review.stars']
        // limit: size,
        // offset: size * page
    })
    spots = JSON.parse(JSON.stringify(spots))
    for (let spa of spots) {
        spa.Reviews.length ? spa.avgRating = Review.getRating(spa.Reviews) : spa.avgRating = 0
        spa.SpotImages.length ? spa.previewImage = spa.SpotImages.find(x => x.preview === true).url : spa.previewImage = 'No preview'
        delete spa.Reviews
        delete spa.SpotImages
    }

    res.status(201).json(spots)
})





router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params

    let spots = await Spot.findAll({
        where: { id: spotId },
        include: [
            { model: Review, raw: true, },
            { model: SpotImage, required: true, raw: true, attributes: ['id', 'url', 'preview'] },
            { model: User, raw: true, attributes: ['id', 'firstName', 'lastName', 'profilepic'] }
        ],
        // raw: true,
        // group: [ 'id', 'SpotImages', 'Review.stars']
    })
    if (!spots[0]) {
        err = new Error('Spot couldn`t be found')
        err.status = 404
        throw err
    }
    spots = JSON.parse(JSON.stringify(spots[0]))

    if (spots?.Reviews[0]) {
        spots.avgStarRating = Review.getRating(spots.Reviews)
        spots.numReviews = spots.Reviews.length

    } else {
        spots.avgStarRating = 0
        spots.numReviews = 0
    }
    delete spots?.Reviews
    res.json(spots)

})
/////  GET ^///////  GET ^ ////// GET  ^ ///// GET  ^ ///////  GET ^ //////  GET ^/////

/////  POST v ///////  POST v ////// POST  v ///// POST  v ///////  POST v //////  POST v/////
router.post('/:spotId/images',
    requireAuth,
    async (req, res) => {
        const { url, preview } = req.body
        const { spotId } = req.params
        const theSpot = await Spot.findByPk(spotId)

        if (!theSpot) {
            const err = new Error('Spot couldn`t be found');
            err.status = 404
            throw err
        }
        const user = req.user.id
        if (theSpot.dataValues.ownerId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }

        let imga = await SpotImage.create({
            spotId: spotId,
            url,
            preview
        },
        )
        imga = JSON.parse(JSON.stringify(imga))
        delete imga.createdAt
        delete imga.updatedAt
        delete imga.spotId

        res.json(imga)
    }
)

router.post('/:spotId/reviews',
    requireAuth,
    async (req, res) => {
        const { review, stars, cleanliness, communication,
            location, checkin, value, accuracy } = req.body
        const { spotId } = req.params
        const userId = req.user.id

        if (review == undefined || stars == undefined) {
            err = new Error('Validation Error')
            err.status = 400
            err.errors = {
                'review': 'Review text is required',
                'stars': 'Stars must be an integer from 1 to 5',
            }
            throw err
        }
        let currReviews = await Review.findAll({
            where: { spotId: spotId },
            include: { model: Spot }
        })
        let spot = await Spot.findByPk(+spotId)
        currReviews = JSON.parse(JSON.stringify(currReviews))
        // console.log(currReviews, spot)
        if (!spot) {
            const err = new Error('Spot couldn`t be found');
            err.status = 404
            throw err
        }
        for (let re of currReviews) {
            if (re.userId === userId) {
                const err = new Error('User already has a review for this spot')
                err.status = 403
                throw err
            }
            if (re.Spot.ownerId === userId) {
                const err = new Error('You are not allowed to review your own Spot!')
                err.status = 403
                throw err
            }
        }
        if (typeof review == 'string' && typeof stars == 'number') {
            //console.log(review, stars, typeof spotId)
            const newReview = await Review.create({
                spotId: +spotId,
                userId, userId,
                review: review,
                stars: stars,
                cleanliness, communication,
                location, checkin, value, accuracy
            })
            res.status(201)
            res.json(newReview)
        }
    }
)
router.post('/:spotId/bookings',
    requireAuth,
    async (req, res) => {
        const { startDate, endDate } = req.body
        const { spotId } = req.params
        const userId = req.user.id

        const start = new Date(startDate)
        const end = new Date(endDate)
        if (end <= start) {
            const err = new Error('Validation error')
            err.status = 400,
                err.errors = {
                    'endDate': 'endDate cannot be on or before startDate'
                }
            throw err
        }
        let spat = await Spot.findByPk(+spotId)
        // console.log(spat)
        if (!spat) {
            let er = new Error('Spot couldn`t be found')
            er.status = 404
            throw er
        }

        let theBooks = await Booking.findAll({
            where: { spotId: spotId },
            include: { model: Spot }
        })
        // console.log(theBooks)
        theBooks = JSON.parse(JSON.stringify(theBooks))
        // if (!theBooks[0]) {
        //     let er = new Error('Spot couldn`t be found')
        //     er.status = 404
        //     throw er
        // }

        if (spat.ownerId === userId) {
            let er = new Error('You can not book your own spot!')
            er.status = 404
            throw er
        }
        for (let boo of theBooks) {
            let startCheck = new Date(boo.startDate).valueOf()
            let endCheck = new Date(boo.endDate).valueOf()

            if (startCheck <= start.valueOf() && start.valueOf() <= endCheck) {
                const err = new Error('Sorry, this spot is already booked for the specified dates')
                err.status = 403,
                    err.errors = {
                        'startDate': 'Start date conflicts with an existing booking',
                        'endDate': 'End date conflicts with an existing booking'
                    }
                throw err
            }
        }
        const newBook = await Booking.create({
            spotId: +spotId,
            userId: userId,
            startDate: startDate,
            endDate: endDate
        })
        res.json(newBook)
    })


router.post('/',
    requireAuth,
    async (req, res) => {
        const { address, city, state, country, lat, lng, name, description, price } = req.body
        const user = req.user.id
        // const check = req.body
        if (address == undefined || city == undefined || state == undefined
            || country == undefined || lat == undefined || lng == undefined
            || name == undefined || description == undefined || price == undefined) {
            let er = new Error('Validation Error')
            er.status = 400
            er.errors = {
                'address': 'Street address is required',
                'city': 'City is required',
                'state': 'State is required',
                'country': 'Country is required',
                'lat': 'Latitude is not valid',
                'lng': 'Longitude is not valid',
                'name': 'Name must be less than 50 characters',
                'description': 'Description is required',
                'price': 'Price per day is required'
            }
            for (let p in check) {
                delete er.errors[p]
            }
            throw er
        }

        const newSpot = await Spot.create({
            ownerId: user,
            address, city, state, country, lat, lng, name, description, price
        })
        res.json(newSpot)
    },
)
/////  POST ^///////  POST ^ ////// POST  ^ ///// POST  ^ ///////  POST ^ //////  POST ^/////

/////  PUT v ///////  PUT v ////// PUT  v ///// PUT  v ///////  PUT v //////  PUT v/////

router.put('/:spotId',
    requireAuth,
    async (req, res) => {
        const { spotId } = req.params
        const user = req.user.id
        const check = req.body
        const { address, city, state, country,
            lat, lng, name, description, price } = req.body

        const mySpot = await Spot.findByPk(spotId)
        let theSpot = JSON.parse(JSON.stringify(mySpot))

        if (!theSpot) {
            let er = new Error('Spot couldn`t be found')
            er.status = 404
            throw er
        }
        if (theSpot.ownerId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }
        if (address == undefined && city == undefined && state == undefined
            && country == undefined && lat == undefined && lng == undefined
            && name == undefined && description == undefined && price == undefined) {
            let er = new Error('Validation Error')
            er.status = 400
            er.errors = {
                'address': 'Street address is required',
                'city': 'City is required',
                'state': 'State is required',
                'country': 'Country is required',
                'lat': 'Latitude is not valid',
                'lng': 'Longitude is not valid',
                'name': 'Name must be less than 50 characters',
                'description': 'Description is required',
                'price': 'Price per day is required'

            }
            throw er
        }
        for (let ch in check) {
            mySpot[ch] = check[ch]
            mySpot.save()
        }
        res.json(mySpot)
    }
)
/////  PUT ^///////  PUT ^ ////// PUT  ^ ///// PUT  ^ ///////  PUT ^ //////  PUT ^/////

/////  DELETE v ///////  DELETE v  ////// DELETE   v ///// DELETE   v ///////  DELETE v  //////  DELETE v /////
router.delete('/:spotid',
    requireAuth,
    async (req, res) => {
        const { spotid } = req.params
        const user = req.user.id
        const theSpot = await Spot.findOne({ where: { id: spotid } })

        if (!theSpot) {
            let er = new Error('Spot couldn`t be found')
            er.status = 404
            throw er
        }

        if (theSpot.ownerId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        } else {
            await theSpot.destroy()

            res.json({
                'message': 'Successfully deleted',
                'statusCode': 200
            })
        }

    })

module.exports = router;
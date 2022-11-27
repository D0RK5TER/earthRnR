const express = require('express')

const { requireAuth } = require('../../utils/auth');
const { Spot, sequelize, SpotImage, Booking } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

router.get('/current',
    async (req, res) => {
        validateLogin
        const user = req.user.id
        let bookings = await Booking.findAll({
            where: { userId: user },
            include: {
                model: Spot, include: { model: SpotImage, attributes: ['url'], where: { preview: true }, required: false },
                attributes: { exclude: ['createdAt', 'updatedAt'], required: true }
            },
            attributes: { include: ['id'] }
        })
        bookings = JSON.parse(JSON.stringify(bookings))
        for (let boo of bookings) {
            if (!boo.Spot) continue
            boo.Spot.previewImage = boo.Spot.SpotImages[0].url
            delete boo.Spot.SpotImages
        }
        res.json({ bookings })
    })
////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 
router.put('/:bookingId',
    // restoreUser,
    requireAuth,
    async (req, res) => {
        const { startDate, endDate } = req.body
        let { bookingId } = req.params
        const userId = req.user.id
        const thisBoo = await Booking.findByPk(bookingId)
        const today = new Date()
        if (!thisBoo) {
            let er = new Error('Booking couldn`t be found')
            er.status = 404
            throw er
        }
        else if (today >= thisBoo.startDate) {
            let er = new Error('Past bookings can`t be modified')
            er.status = 403
            throw er
        }
        else if (endDate <= startDate) {
            const err = new Error('Validation error')
            err.status = 400,
                err.errors = {
                    'endDate': 'endDate cannot be on or before startDate'
                }
            throw err
        }
        let bookings = await Booking.findAll({
            where: { spotId: thisBoo.spotId },
            include: { model: Spot, attributes: ['ownerId'] },
        })
        bookings = JSON.parse(JSON.stringify(bookings))
        const owner = bookings[0].Spot.ownerId
        if (thisBoo.userId !== userId && thisBoo.userId !== owner) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }
        const startChange = new Date(startDate)
        const endChange = new Date(endDate)
        const err = new Error('Sorry, this spot is already booked for the specified dates')
        err.status = 403,
            err.errors = {
                'startDate': 'Start date conflicts with an existing booking',
                'endDate': 'End date conflicts with an existing booking'
            }

        for (let book of bookings) {
            let startCheck = new Date(book.startDate)
            let endCheck = new Date(book.endDate)
            if (startChange >= startCheck && startChange <= endCheck) {
                throw err
            }
            if (endChange <= endCheck && endChange >= startCheck) {
                throw err
            }
            if (endChange >= endCheck && startChange <= startCheck) {
                throw err
            }
        }
        thisBoo.set({
            startDate: startChange,
            endDate: endChange
        })
        thisBoo.save()
        res.json(thisBoo)
    }
)


router.delete('/:bookingid',
    requireAuth,
    async (req, res) => {
        const { bookingid } = req.params
        const user = req.user.id
        const thebooking = await Booking.findOne(
            {
                where: { id: bookingid },
                include: { model: Spot, attributes: ['ownerId'] }
            }
        )
        if (!thebooking) {
            let er = new Error('Review booking couldn`t be found')
            er.status = 404
            throw er
        }
        let owner = thebooking.dataValues.Spot.dataValues.ownerId
        
        let today = new Date()
        let bookStart = thebooking.dataValues.startDate
        if (owner !== user && thebooking.dataValues.userId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }
        if (today > bookStart) {
            let er = new Error('Bookings that have been started can`t be deleted')
            er.status = 403
            throw er
        }
        await thebooking.destroy()
        res.json({
            'message': 'Successfully deleted',
            'statusCode': 200
        })
    })

module.exports = router;
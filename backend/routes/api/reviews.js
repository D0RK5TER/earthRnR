const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { User, Spot, Review, ReviewImage, SpotImage } = require('../../db/models');

const router = express.Router();

router.get('/current',
    requireAuth,
    async (req, res) => {
        const user = req.user.id
        let Reviews = await Review.findAll({
            where: { userId: user },
            include: [
                { model: User, attributes: ['id', 'firstName', 'lastName'] },
                {
                    model: Spot,
                    include: { model: SpotImage, where: { preview: true }, limit: 1 }
                },

                { model: ReviewImage, attributes: ['id', 'url'] },
            ]
        })
        if (!Reviews) {
            err = new Error('No reviews yet!')
            err.status = 404
            throw err
        }
        Reviews = JSON.parse(JSON.stringify(Reviews))
        for (let rev of Reviews) {
            if (!rev.Spot) continue
            rev.Spot.previewImage = rev.Spot.SpotImages[0].url
            delete rev.Spot.SpotImages
            delete rev.Spot.createdAt
            delete rev.Spot.updatedAt

        }
        res.json({ Reviews })
    })
////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 
router.post('/:reviewId/images',
    requireAuth,
    async (req, res) => {
        const { reviewId } = req.params
        const { url } = req.body
        const userId = req.user.id

        let rev = await Review.findOne({
            where: { id: reviewId },
            include: { model: ReviewImage, required: false }
        })
        rev = JSON.parse(JSON.stringify(rev))
        if (!rev) {
            err = new Error('Review couldn`t be found')
            err.status = 404
            throw err
        }
        // console.log
        if (rev.userId !== userId) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }
        if (rev.ReviewImages) {
            if (rev.ReviewImages.length >= 10) {
                const err = new Error('Maximum number of images for this resource was reached');
                err.status = 403
                throw err
            }
        }
        const newAdd = await ReviewImage.create({
            reviewId,
            url
        })
        res.json({ id: newAdd.id, url: newAdd.url })
    })
////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 
router.put('/:reviewId',
    requireAuth,
    async (req, res) => {
        const { reviewId } = req.params
        const { review, stars } = req.body
        const user = req.user.id

        const Rev = await Review.findByPk(reviewId)
        let theRev = JSON.parse(JSON.stringify(Rev))
        if (!theRev) {
            const err = new Error('Review couldn`t be found')
            err.status = 404
            throw err
        }
        if (theRev.userId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }

        if (!review && !stars) {
            const err = new Error('Validation error')
            err.status = 400
            err.errors = {
                'review': 'Review text is required',
                'stars': 'Stars must be an integer from 1 to 5',
            }
            throw err
        }

        Rev.review = review
        Rev.stars = stars
        Rev.save()
        res.json(Rev)

    })
////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 

router.delete('/:reviewid',
    requireAuth,
    async (req, res) => {
        const { reviewid } = req.params
        const user = req.user.id

        const theReview = await Review.findOne({ where: { id: reviewid } })

        if (!theReview) {
            let er = new Error('Review couldn`t be found')
            er.status = 404
            throw er
        } else if (theReview.userId !== user) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }

        else {
            await theReview.destroy()

            res.json({
                'message': 'Successfully deleted',
                'statusCode': 200
            })
        }

    })



module.exports = router;
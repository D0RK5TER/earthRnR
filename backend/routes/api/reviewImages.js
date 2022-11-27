const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { Review, ReviewImage } = require('../../db/models');
const router = express.Router();
////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 
router.delete('/:imageid',
    requireAuth,
    async (req, res) => {
        const { imageid } = req.params
        const user = req.user.id
        const theimage = await ReviewImage.findOne({
            where: { id: imageid },
            include: { model: Review }
        })
        if (!theimage) {
            let er = new Error('Review Image couldn`t be found')
            er.status = 404
            throw er
        }
        let image = JSON.parse(JSON.stringify(theimage))
        if (user !== image.Review.userId) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        }
        else {
            theimage.destroy()

            res.json({
                'message': 'Successfully deleted',
                'statusCode': 200
            })
        }
    })

module.exports = router;
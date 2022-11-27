const express = require('express')
const { requireAuth } = require('../../utils/auth');
const { Spot, SpotImage } = require('../../db/models');

const router = express.Router();

router.delete('/:spotimageid',
    requireAuth,
    async (req, res) => {
        const { spotimageid } = req.params
        const user = req.user.id
        const theimage = await SpotImage.findOne({
            where: { id: spotimageid },
            include: { model: Spot }
        })
        if (!theimage) {
            let er = new Error('Review Image couldn`t be found')
            er.status = 404
            throw er
        }
        const owner = theimage.Spot.ownerId
        if (user !== owner) {
            const err = new Error('Forbidden');
            err.status = 403
            throw err
        } else {
            theimage.destroy()
            res.json({
                'message': 'Successfully deleted',
                'statusCode': 200
            })
        }
    })



module.exports = router;
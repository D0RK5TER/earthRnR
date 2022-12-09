// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteReviewFormModal from '../DeleteReviewModal';
import ReviewImagesModal from '../ReviewImagesModal';




function ReviewCard({ rev }) {
    const history = useHistory()
    let { id, stars, review, createdAt, ReviewImages, spotId } = rev
    // console.log(spotId)
    // console.log(ReviewImages)
    return rev && spotId && (
        <div className='onereview single one'>

            <div className='profilepicture reviewheader'>
                <div className='profilepic reviewpic'>
                    pic
                </div>
                <div className='profilename profileage'>
                    <div className='reviewname'>
                        <ReviewImagesModal idx={id} ReviewImages={ReviewImages} />
                        <button onClick={() => history.push(`/${spotId}`)}>
                            See the Spot!
                        </button>
                    </div>
                    <div className='reviewage'>
                        posted {new Date(createdAt).toDateString()}
                    </div>
                </div>
                {<DeleteReviewFormModal id={id} spotId={spotId} />}
            </div>

            <div className='bottomhalf reviewbottom'>
                <div className='reviewscore starscore'>
                    {stars}/5
                </div>
                <div className='reviewreview onereview'>
                    {review}
                </div>
            </div>

        </div>
    )
}


export default ReviewCard
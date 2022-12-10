// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import DeleteReviewForm from '../DeleteReviewModal';
import ReviewImagesIndex from '../ReviewImagesModal';
import OpenModalButton from "../OpenModalButton";
import EditReviewForm from '../EditReviewForm';
// import { getMyReviews } from '../../store/reviews2';



function ReviewCard({ rev }) {
    const history = useHistory()
    const dispatch = useDispatch()
    let { id, stars, review, createdAt, ReviewImages, spotId } = rev
    // console.log(spotId)
    // console.log(ReviewImages)
    // console.log(rev)
    // useEffect(() => {
    //     // dispatch(getMySpots())
    //     dispatch(getMyReviews())
    // }, [stars,review])
    return rev && spotId && (
        <div className='onereview single one'>

            <div className='profilepicture reviewheader'>
                <div className='profilepic reviewpic'>
                    pic
                </div>
                <div className='profilename profileage'>
                    <div className='reviewname'>
                        {/* <ReviewImagesModal idx={id} ReviewImages={ReviewImages} /> */}
                        {<OpenModalButton
                            id='deletereview'
                            buttonText="Photos"
                            modalComponent={<ReviewImagesIndex idx={id} ReviewImages={ReviewImages} />}
                        />}
                        <button onClick={() => history.push(`/${spotId}`)}>
                            See the Spot!
                        </button>
                    </div>
                    <div className='reviewage'>
                        posted {new Date(createdAt).toDateString()}
                    </div>
                </div>
                {<OpenModalButton
                    id='deletereview'
                    buttonText="Delete"
                    modalComponent={<DeleteReviewForm id={id} spotId={spotId} key={id + review} />}
                />}
                {<OpenModalButton
                    id='deletereview'
                    buttonText="Edit"
                    modalComponent={<EditReviewForm id={id} key={id + review} />}
                />}
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



import { useHistory } from 'react-router-dom';

import EditReviewForm from '../EditReviewForm';
import OpenModalButton from "../OpenModalButton";
import ReviewImagesIndex from '../ReviewImagesModal';
import DeleteReviewForm from '../DeleteReviewModal';
import star from '../../assets/star.png';

import propic from '../../assets/propic.png'
import { dateMonthYear } from '../../utilities/location';
import './reviewcard.css'

function ReviewCard({ review, user, place, id }) {
    // const { id, stars, review, userId, createdAt, User, spotId, ReviewImages } = reviewO
    const history = useHistory()
    // console.log(review)
    if (!review?.id) return (
        <div id='firsttimereview' >
            <h2> Be the first to review!</h2>
        </div>
    )
    return review?.id && (
        <div id={`review${review.id}`} className='onereview single one' >

            <div id='onespotreviewheader' className='profilepicture reviewheader'>
                <div id='hostpicture'>
                    <img src={propic} />
                </div>
                <div id='headerright'>
                    <div className='profilename profileage'>
                        <div id='reviewname'>
                            {review.User?.firstName}
                            <div id='revratingcard'>
                                <div id='revratingimg'>
                                    <img src={star} id='reviewsstar' alt='small star img' />
                                </div>
                                {review.stars}
                            </div>
                        </div>
                        <div className='reviewage'>
                            {dateMonthYear(review.createdAt)}
                        </div>
                    </div>

                    {review.userId === user?.id && place !== '/current' &&
                        <OpenModalButton
                            id='deletereview'
                            buttonText="Edit"
                            modalComponent={<EditReviewForm id={id} review={review} />}
                        />}
                    {review.userId === user?.id && place !== '/current' &&
                        <OpenModalButton
                            id='deletereview'
                            buttonText="Delete"
                            modalComponent={<DeleteReviewForm id={id} review={review} />}
                        />
                    }
                    {review.userId === user?.id && place === '/current' &&
                        <button id='spotgotobutt' onClick={() => history.push(`/spot/${review.spotId}`)}
                        style={{marginTop: '0px'}}
                        >Spot</button>

                    }
                    <OpenModalButton
                        id='deletereview'
                        buttonText="Photos"
                        modalComponent={<ReviewImagesIndex idx={id} ReviewImages={review.ReviewImages} />}
                    />

                </div>
            </div>
            <div id='bottomhalf' className='bottomhalf reviewbottom'>
                <div id='cardreviewbot' className='reviewreview onereview'>
                    {review.review}
                </div>
            </div>

        </div>

    )

}

export default ReviewCard






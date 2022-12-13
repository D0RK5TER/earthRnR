


import { useHistory } from 'react-router-dom';
import EditReviewForm from '../EditReviewForm';
import OpenModalButton from "../OpenModalButton";
import ReviewImagesIndex from '../ReviewImagesModal';
import DeleteReviewForm from '../DeleteReviewModal';
import propic from '../../assets/propic.png'
// import EditReviewForm from '../EditReviewForm'
import { dateMonthYear } from '../../utilities/location';
import './reviewcard.css'

function ReviewCard({ reviewO, user, place }) {
    const { id, stars, review, userId, createdAt, User, spotId, ReviewImages } = reviewO
    const history = useHistory()
    if (!id) return (
        <div id='firsttimereview' >
            <h2> Be the first to review!</h2>
        </div>
    )

    return (
        <div id='onespotreview' className='onereview single one' key={id + spotId + review}>

            <div id='onespotreviewheader' className='profilepicture reviewheader'>
                <div id='hostpicture'>
                    <img src={propic} />
                </div>
                <div id='headerright'>
                    <div className='profilename profileage'>
                        <div className='reviewname'>
                            {User?.firstName}
                        </div>
                        <div className='reviewage'>
                            {dateMonthYear(createdAt)}
                        </div>
                    </div>
                    {userId === user?.id && place !== '/current' && (
                        <button onClick={() => history.push('/current')}>Your Review</button>
                    )
                    }
                    {userId === user?.id && place === '/current' &&
                        <OpenModalButton
                            id='deletereview'
                            buttonText="Edit"
                            modalComponent={<EditReviewForm id={id} />}
                        />}
                    {userId === user?.id && place === '/current' &&
                        <OpenModalButton
                            id='deletereview'
                            buttonText="Delete"
                            modalComponent={<DeleteReviewForm id={id} />}
                        />
                    }
                    <OpenModalButton
                        id='deletereview'
                        buttonText="Photos"
                        modalComponent={<ReviewImagesIndex idx={id} ReviewImages={ReviewImages} />}
                    />

                </div>
            </div>
            <div className='bottomhalf reviewbottom'>
                <div className='reviewreview onereview'>
                    {review}
                </div>
            </div>

        </div>

    )

}

export default ReviewCard






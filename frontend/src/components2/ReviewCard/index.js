


import { useHistory } from 'react-router-dom';
import EditReviewForm from '../EditReviewForm';
import propic from '../../assets/propic.png'
import OpenModalButton from "../OpenModalButton";
import DeleteReviewForm from '../DeleteReviewModal';
import { dateMonthYear } from '../../utilities/location';

function ReviewCard({ reviewO, user }) {
    const { id, stars, review, userId, createdAt, User, spotId } = reviewO
    // ratingsneak = false

    if (!id) return (
        <div id='firsttimereview' >
            <h2> Be the first to review!</h2>
        </div>
    )
    // if (userId === user?.id) buttonVis = false
    // if (!user?.id) buttonVis = false
    // console.log()

    // if (!spot) return null;
    // if (spot.previewImage === 'No preview') spot.previewImage = quest

    // if (spa.previewImage === 'No preview') spa.previewImage = quest    
    // else {
    //     for (let spa in spots) {
    //         if (spa.previewImage === 'No preview') spa.previewImage = quest
    //     }
    // }


    return (
        <div className='onereview single one' key={id + spotId + review}>

            <div className='profilepicture reviewheader'>
                <div id='hostpicture'>
                    <img src={propic} />
                </div>
                <div className='profilename profileage'>
                    <div className='reviewname'>
                        {User?.firstName}
                    </div>
                    <div className='reviewage'>
                        {dateMonthYear(createdAt)}
                    </div>
                </div>
                <div className='reviewscore starscore'>
                    {stars}/5
                </div>
            </div>
            <div className='bottomhalf reviewbottom'>
                <div className='reviewreview onereview'>
                    {review}
                </div>
                {userId === user?.id &&
                    <OpenModalButton
                        id='deletereview'
                        buttonText="Delete"
                        modalComponent={<DeleteReviewForm id={id} spotId={spotId} key={id + review} />}
                    />
                }
            </div>

        </div>

    )

}

export default ReviewCard






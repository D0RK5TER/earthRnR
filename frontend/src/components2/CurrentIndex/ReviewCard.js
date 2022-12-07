import { useSelector } from 'react-redux';
import DeleteReviewFormModal from '../DeleteReviewModal';
import { useEffect } from 'react';





function ReviewCard({ rev }) {
    let { id, stars, review, createdAt, User, spotId } = rev

    const thespot = useSelector(state => state.spots.allspots)



    return rev && (
        <div className='onereview single one' >

            <div className='profilepicture reviewheader'>
                <div className='profilepic reviewpic'>
                    pic
                </div>
                <div className='profilename profileage'>
                    <div className='reviewname'>
                        <button onClick={()=>{}}>
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
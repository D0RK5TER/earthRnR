

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMySpots } from '../../store/spots2';
import { getMyReviews } from '../../store/reviews2';
import SpotCard from '../SpotCard'
import './currentindex.css'

const CurrentIndex = () => {
    const dispatch = useDispatch();
    let user = useSelector(state => state.session.user)
    let mySpots = useSelector(state => state.spots.myspots)
    let myReviews = useSelector(state => state.reviews.myreviews)





    useEffect(() => {
        dispatch(getMySpots())
        dispatch(getMyReviews())
    }, [])

    return user && myReviews && (
        <div id='currentcont'>
            <div id='myspotscont'>
                {mySpots && Object.values(mySpots).map(spot =>
                    <SpotCard spot={spot} user={user} />
                )}
            </div>
            <div id='myreviescont'>
                {myReviews && Object.values(myReviews).map(review =>
                    <div>
                        {review.review}
                    </div>
                )}
            </div>

        </div>
    )
}


export default CurrentIndex
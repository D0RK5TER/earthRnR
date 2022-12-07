

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMySpots, getOneSpot } from '../../store/spots2';
import { getMyReviews } from '../../store/reviews2';
import SpotCard from '../SpotCard'
import ReviewCard from './ReviewCard';
import './currentindex.css'


const CurrentIndex = () => {
    const dispatch = useDispatch();
    const { current } = useParams();
    let user = useSelector(state => state.session.user)
    let mySpots = useSelector(state => state.spots.myspots)
    let myReviews = useSelector(state => state.reviews.myreviews)
    let reviewspots = useSelector(state => state.spots)

    const reviewSpotfunc = async (arr, obj) => {
        if (arr && obj) {
            obj = obj
            arr = Object.values(arr)
            for (let rev of arr) {
                if (obj?.onespot[rev.spotId]) continue
                 dispatch(getOneSpot(rev.spotId))
            }
        }
        return true
    }
    useEffect(() => {
        dispatch(getMySpots())
        dispatch(getMyReviews())
    }, [])

    // useEffect(() => {
        // // dispatch(getMySpots())
        // dispatch(getMyReviews())
    // }, [myReviews])

    return reviewspots && user && myReviews && reviewSpotfunc(myReviews, reviewspots) && (
        <div id='currentcont'>
            <h1>Welcome {user.firstName} </h1>
            <div id='currentinnercont'>

                <div id='myspotsbigcont'>
                    <div id='currentuserspots'>
                        <h3>{user.firstName}'s Spots</h3>
                    </div>
                    <div id='myspotscont'>
                        {mySpots && Object?.values(mySpots).map(spot =>
                            <SpotCard spot={spot} user={user} />
                        )}
                    </div>
                </div>
                <div id='myreviewscont'>
                    <h3>{user.firstName}'s Reviews</h3>
                    {myReviews && Object?.values(myReviews).map(rev =>
                        <ReviewCard rev={rev} />
                    )}
                </div>
            </div>

        </div>
    )
}


export default CurrentIndex
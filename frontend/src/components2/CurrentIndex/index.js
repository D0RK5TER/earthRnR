

import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditSpotFormModal from '../EditSpotFormModal';

import { useSelector, useDispatch } from 'react-redux';
import { getMySpots, getOneSpot } from '../../store/spots2';
import { getMyReviews, makeChangeReview } from '../../store/reviews2';
import SpotCard from '../SpotCard'
import ReviewCard from '../ReviewCard';
import './currentindex.css'
import { pathURL } from '../../utilities/location'

import SpotImageForm from '../CreateSpotImageModal';
import OpenModalButton from '../OpenModalButton';


const CurrentIndex = () => {
    const dispatch = useDispatch();
    let history = useHistory()
    let place = pathURL(history)
    let user = useSelector(state => state.session.user)
    let mySpots = useSelector(state => state.spots.myspots)
    let myReviews = useSelector(state => state.reviews.myreviews)
    let reviewspots = useSelector(state => state.spots)
    // let imgs

    // function reviewSpotfunc(arr, obj) {
    // if (arr?.length && obj) {
    //     obj = obj
    //     arr = Object.values(arr)
    //     for (let rev of arr) {
    //         if (obj?.onespot[rev.spotId]) continue
    //         dispatch(getOneSpot(rev.spotId))
    //     }
    // }
    //     return true
    // }


    useEffect(() => {
        dispatch(getMySpots())
        dispatch(getMyReviews())
    }, [dispatch])
    // console.log(history.location.hash)
    return reviewspots && user && myReviews && (

        <div id='currentcont'>
            {/* {jumpmark ?
                window.location.replace(`/current${jumpmark}`)
                : window.scrollTo(0, 0)} */}
            <h1>Welcome {user.firstName} </h1>
            <div id='currentinnercont'>

                <div id='currentspots'>
                    {mySpots && Object?.values(mySpots).map(spot =>
                        <div id='currentspotcard'>
                            <div id='currentedit'>

                                <OpenModalButton
                                    id='currentbutt'
                                    buttonText="Add Photos!"
                                    onButtonClick={()=>dispatch(getOneSpot(spot.id))}
                                    modalComponent={<SpotImageForm idx={spot.id} spot={spot.previewImage} />}
                                />
                                <OpenModalButton
                                    id='currentbutt'
                                    buttonText="Edit/Delete"
                                    modalComponent={<EditSpotFormModal idx={spot.id} />}
                                />
                            </div>
                            <div id='currentcardwrap'>
                                <SpotCard spot={spot} user={user} key={`${spot.id}`} place={place} />
                            </div >
                        </div>
                    )}
                </div>

                <div id='currentreviews'>
                    {myReviews && Object?.values(myReviews).map(rev =>
                        <ReviewCard review={rev} user={user} place={place} id={rev.spotId} />
                    )}
                </div>
            </div>

        </div>
    )
}


export default CurrentIndex
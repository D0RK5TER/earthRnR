

import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditSpotFormModal from '../EditSpotFormModal';

import { useSelector, useDispatch } from 'react-redux';
import { getMySpots, getOneSpot } from '../../store/spots';
import { getMyReviews} from '../../store/reviews';
import { getMyBooks } from '../../store/bookings';
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

    useEffect(() => {
        dispatch(getMyBooks())
        dispatch(getMySpots())
        dispatch(getMyReviews())
    }, [dispatch])
    // console.log(history.location.hash)
    return reviewspots && user && myReviews && (

        <div className='current currentuser'>
            <div className='currenthead currentuserheader'>
                Welcome {user.firstName}
                <div id='smallheadcurrent'>
                    <div id='yourspots'>
                        Your Spots!
                    </div>
                    <div id='welcome' className='midheader'
                    // style={{'te'}}
                    >
                        Welcome to Your Page!
                    </div>
                    <div id='yourreviews'>
                        Your Reviews
                    </div>

                </div>
            </div>
            <div id='currentcont'>
                {/* {jumpmark ?
                window.location.replace(`/current${jumpmark}`)
                : window.scrollTo(0, 0)} */}





                <div id='currentinnercont'>

                    <div id='currentspots'>
                        {mySpots && Object?.values(mySpots).map(spot =>
                            <div id='currentspotcard'>
                                <div id='currentedit'>

                                    <OpenModalButton
                                        id='currentbutt'
                                        buttonText="Add Photos!"
                                        onButtonClick={() => dispatch(getOneSpot(spot.id))}
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

            </div >
        </div>
    )
}


export default CurrentIndex
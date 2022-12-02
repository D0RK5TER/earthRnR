
import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { getAllSpots, loadSpots } from '../../store/session';
import EditSpotFormModal from '../EditSpotFormModal';
import { getAllSpots } from '../../store/spots2';
import SpotCard from '../SpotCard';
// import OneSpotIndex from '../OneSpotIndex'
import quest from '../../assets/quest.jpg';
import star from '../../assets/star.png';

// import * as sessionActions from "../../store/session";
// import ProfileButton from '../Navigation/ProfileButton';
// import UserButton from '../Navigation/UserButton';
import './SpotsIndex.css'
    ;
// import logo from '../../assets/logo.jpg';
// import HomeSplash from '../HomeSplash';

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    // var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getDay() - birthDate.getDay()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        // age--;
    }
    return m;
}
function SpotsIndex({ isLoaded }) {

    const dispatch = useDispatch();
    let user = useSelector(state => state.session.user)
    let spots = useSelector(state => state.spots.allspots);


    useEffect(() => {

        dispatch(getAllSpots(''));
    }, []);

    if (!spots) return null;

    if (spots) {
        for (let spa in spots) {
            if (spa.previewImage === 'No preview') spa.previewImage = quest
        }
    }

    // console.log(spots)
    // console.log(Object.values(spots))
    // {spots && for (let spot in spots)(
    //     let{ previewImage, name, id, ownerId, avgRating, createdAt, city, state, price } = spot
    return spots && (
        // <div className="mainContent" >
        <div id='maindisplay' style={{
            display: 'inline-flex', flexWrap: 'wrap', width: '100%',
            maxHeight: '100%', 
            justifyContent: 'space-around', margin: '2em',
            // objectFit: 'fill', boxSizing: 'border-box',
        }}>
            {spots && Object.values(spots).map(spot =>

                <SpotCard spot={spot} />

            )}

            {/* <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1em', marginLeft: '3em' }}>
                {spots && Object.values(spots).length ? (Object.values(spots).map(({ previewImage, name, id, ownerId, avgRating, createdAt, city, state, price }) => (
                    <>
                        <div className="photocontaineredit" style={{ marginTop: '3em', marginBottom: '0', padding: '1em', paddingBottom: '0' }}>
                            <NavLink to={`/${id}`} style={{ textDecoration: 'none' }} >

                                <img className="photo" alt="profile-button" src={previewImage} style={{ borderRadius: '1em' }} />

                            </NavLink>
                            <div className="namearea" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    {city}     ,   {state}

                                </div>
                                {user && user.id === ownerId && <EditSpotFormModal idx={id} />}
                                <div>
                                    <img src={star} className='starspot' style={{ height: '1em' }} />  {avgRating}
                                </div>
                            </div>
                            <div style={{ marginTop: '0', padding: '.2em' }}>

                                <div style={{ marginTop: '0', paddingTop: '.1em', paddingBottom: '.4em', paddingLeft: '.4em', fontFamily: 'none' }}>
                                    Added {getAge(createdAt.toString())} Days ago
                                </div>
                                <div style={{ marginTop: '0', paddingLeft: '.4em', lineHeight: '0', fontFamily: 'none' }}>
                                    {name}
                                </div>
                                <div style={{ marginTop: '0', paddingTop: '.8em', fontSize: '1.3em', paddingLeft: '1em' }}>
                                    ${price}   night
                                </div>
                            </div>
                        </div>
                    </>
                ))) :
                    (<>
                        <div>

                            <span>

                                <h1>Sorry!</h1>
                            </span>
                            <span>

                                <h2>No homes meet your specifications</h2>
                            </span>
                            <span>

                                <h6>Maybe don't care as much?</h6>
                            </span>
                        </div>
                    </>
                    )
                } */}
        </div >
        // </div >
        // </div >
    )
}

export default SpotsIndex
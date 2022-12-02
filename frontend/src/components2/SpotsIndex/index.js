
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
            display: 'flex',
            flexWrap: 'wrap',
            height: '100%',
            flexGrow: '1',
            justifyContent: 'space-evenly'

        }}>
            {spots && Object.values(spots).map(spot =>

                <SpotCard spot={spot} />

            )}
        </div >

    )
}

export default SpotsIndex
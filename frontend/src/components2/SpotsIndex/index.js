
import { useEffect, useState } from 'react';
// import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { getAllSpots, loadSpots } from '../../store/session';
// import EditSpotFormModal from '../EditSpotFormModal';
import { getAllSpots } from '../../store/spots2';
import SpotCard from '../SpotCard';
// import OneSpotIndex from '../OneSpotIndex'
import quest from '../../assets/quest.jpg';
// import star from '../../assets/star.png';

// import * as sessionActions from "../../store/session";
// import ProfileButton from '../Navigation/ProfileButton';
// import UserButton from '../Navigation/UserButton';
import './SpotsIndex.css'
    ;
// import logo from '../../assets/logo.jpg';
// import HomeSplash from '../HomeSplash';

function SpotsIndex({ isLoaded }) {

    const dispatch = useDispatch();
    let user = useSelector(state => state.session.user)
    let spots = useSelector(state => state.spots.allspots);

    user ? user = user : user = { id: 0 }
    useEffect(() => {

        dispatch(getAllSpots(''));
    }, []);

    console.log(spots)
    if (!spots) return null;
    else {
        for (let spa in spots) {
            if (spa.previewImage === 'No preview') spa.previewImage = quest
        }
    }
    
    return spots && (
        // <div className="mainContent" >

        <div id='maindisplay' style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '100vw',
            width: '100vw',
            justifyContent: 'space-around',
            // margin: '2vw',
            justifySelf: 'center'
            // padding: 'vw'
        }}>
            {spots && Object.values(spots).map(spot =>
                <SpotCard spot={spot} user={user} />
            )}
        </div >

    )
}

export default SpotsIndex
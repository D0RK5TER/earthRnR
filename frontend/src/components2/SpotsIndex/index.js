
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { getAllSpots, loadSpots } from '../../store/session';
// import EditSpotFormModal from '../EditSpotFormModal';
import { getAllSpots } from '../../store/spots2';
import SpotCard from '../SpotCard';
import { pathURL } from '../../utilities/location'
// import OneSpotIndex from '../OneSpotIndex'
// import quest from '../../assets/quest.jpg';
// import star from '../../assets/star.png';

// import * as sessionActions from "../../store/session";
// import ProfileButton from '../Navigation/ProfileButton';
// import UserButton from '../Navigation/UserButton';
import './SpotsIndex.css'
    ;
// import logo from '../../assets/logo.jpg';
// import HomeSplash from '../HomeSplash';

function SpotsIndex() {
    const dispatch = useDispatch()
    let user = useSelector(state => state.session.user)
    let spots = useSelector(state => state.spots.allspots);
    let history = useHistory()
    let place = pathURL(history)

    user ? user = user : user = { id: 0 }
    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    // if (!spots) return null;

    return spots && (
        // <div className="mainContent" >

        <div id='maindisplay' >
            {spots && Object.values(spots).length ? Object.values(spots).map(spot =>
                <SpotCard spot={spot} user={user} place={place} />
            ) :
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center', width: '100vw' }}>
                    <h1 style={{ paddingTop: '5vw', fontFamily: 'Bold' }}>Sorry! Out Of Luck!</h1>
                    <h3 style={{ paddingTop: '8vw' }}>Try searching for something less specific!</h3>
                </div>
                
            }
        </div >

    )
}

export default SpotsIndex
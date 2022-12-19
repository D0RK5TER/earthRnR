
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import { pathURL } from '../../utilities/location'
import './SpotsIndex.css'

function SpotsIndex() {
    const dispatch = useDispatch()
    let user = useSelector(state => state.session.user)
    let spots = useSelector(state => state.spots.allspots);
    let history = useHistory()
    let place = pathURL(history)

    user ? user = user : user = { id: 0 }
    useEffect(() => {
        if (place === '/') dispatch(getAllSpots());
    }, [dispatch]);



    return spots && (
        <div id='maindisplay' >
            {Object.values(spots).length ? Object.values(spots).map(spot =>
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
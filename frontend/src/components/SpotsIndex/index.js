
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import { pathURL } from '../../utilities/location'
import './SpotsIndex.css'
import tree from '../../assets/Ttree.jpg'
import rv from '../../assets/Trv.jpg'
import dirt from '../../assets/Tdirt.jpg'
import country from '../../assets/Tcountry.jpg'
import lake from '../../assets/Tlake.jpg'
import mansion from '../../assets/Tmansion.jpg'
import island from '../../assets/Tisland.jpg'
import pools from '../../assets/Tpools.jpg'
import contain from '../../assets/Tcontain.jpg'
import beach from '../../assets/Tbeach.jpg'
import games from '../../assets/Tgames.jpg'
import desert from '../../assets/Tdesert.jpg'
import piano from '../../assets/Tpiano.jpg'
import snow from '../../assets/Tsnow.jpg'

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
        <div id='maindisplay'>
            <div id='homepagesticky'>
                <div onClick={() => dispatch(getAllSpots('?type=tree'))}>
                    <img src={tree} />
                    Treehouse
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=rv'))}>
                    <img src={rv} />
                    RV's
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=lake'))}>
                    <img src={lake} />
                    Lakehouse
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=dirt'))}>
                    <img src={dirt} />
                    Earth-homes
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=mansion'))}>
                    <img src={mansion} />
                    Mansions
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=country'))}>
                    <img src={country} />
                    Country
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=piano'))}>
                    <img src={piano} />
                    Pianos
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=island'))}>
                    <img src={island} />
                    Islands
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=beach'))}>
                    <img src={beach} />
                    Surfing
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=pool'))}>
                    <img src={pools} />
                    Big Pool
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=contain'))}>
                    <img src={contain} />
                    Cargo
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=games'))}>
                    <img src={games} />
                    Play
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=desert'))}>
                    <img src={desert} />
                    Nothing
                </div>
                <div onClick={() => dispatch(getAllSpots('?type=snow'))}>
                    <img src={snow} />
                    Ski/Snow
                </div>
                {/* <div>
                    Rv
                </div>
                <div>
                    dirt
                </div>
                <div>
                    mansion
                </div>
                <div>
                    Lake
                </div>
                <div>
                    country
                </div> */}
            </div>

            <div id='maindisplay1' >
                {Object.values(spots).length ? Object.values(spots).map(spot =>
                    <SpotCard spot={spot} user={user} place={place} />
                ) :
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center', width: '100vw' }}>
                        <h1 style={{ paddingTop: '5vw', fontFamily: 'Bold' }}>Sorry! Out Of Luck!</h1>
                        <h3 style={{ paddingTop: '8vw' }}>Try searching for something less specific!</h3>
                    </div>

                }
            </div >
        </div>
    )
}

export default SpotsIndex
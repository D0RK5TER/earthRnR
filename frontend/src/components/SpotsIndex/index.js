
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import { pathURL } from '../../utilities/location'
import './SpotsIndex.css'
import tree from '../../assets/Ttree.png'
import rv from '../../assets/Trv.png'
import dirt from '../../assets/Tdirt.png'
import country from '../../assets/Tcountry.png'
import lake from '../../assets/Tlake.png'
import mansion from '../../assets/Tmansion.png'
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
                <img src={tree}
                    onClick={() => dispatch(getAllSpots('?type=tree'))}
                />
                <img src={rv}
                    onClick={() => dispatch(getAllSpots('?type=rv'))}
                />
                <img src={lake}
                    onClick={() => dispatch(getAllSpots('?type=lake'))}
                />
                <img src={dirt}
                    onClick={() => dispatch(getAllSpots('?type=earth'))}
                />
                <img src={mansion}
                    onClick={() => dispatch(getAllSpots('?type=mansion'))}
                />
                <img src={country}
                    onClick={() => dispatch(getAllSpots('?type=country'))}
                />
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
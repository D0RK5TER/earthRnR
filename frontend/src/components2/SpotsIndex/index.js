
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { getAllSpots, loadSpots } from '../../store/session';
// import EditSpotFormModal from '../EditSpotFormModal';
import { getAllSpots } from '../../store/spots2';

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
        dispatch(getAllSpots());
    }, [dispatch]);

    if (!spots) return null;

    const handleClick = () => {
        // return (<Redirect className='spot-link' to={`/spots/${id}`}>)
    }

    // let previewImage
    if (spots) {
        for (let spa in spots) {
            if (spa.previewImage === 'No preview') spa.previewImage = quest
        }
    }
    // console.log(spots)
    // console.log(Object.values(spots))
    // {spots && for (let spot in spots)(
    //     let{ previewImage, name, id, ownerId, avgRating, createdAt, city, state, price } = spot
    return (<div className="mainContent" >
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '1em', 'margin-left': '3em' }}>
                {spots && (Object.values(spots).map(({ previewImage, name, id, ownerId, avgRating, createdAt, city, state, price }) => (
                    <>
                        <div className="photocontaineredit" style={{ 'margin-top': '3em', marginBottom: '0', padding: '1em', paddingBottom: '0' }}>
                            <NavLink to={`/${id}`} style={{ 'text-decoration': 'none' }} >

                                <img className="photo" alt="profile-button" src={previewImage} style={{ 'border-radius': '1em' }} />

                            </NavLink>
                            <div className="namearea" style={{ display: 'flex', 'justify-content': 'space-between' }}>
                                <div>
                                    {city}     ,   {state}

                                </div>
                                {/* {user && user.id === ownerId && <EditSpotFormModal idx={id} />} */}
                                <div>
                                    <img src={star} className='starspot' style={{ height: '1em' }} />  {avgRating}
                                </div>
                            </div>
                            <div style={{ 'margin-top': '0', padding: '.2em' }}>

                                <div style={{ 'margin-top': '0', paddingTop: '.1em', paddingBottom: '.4em', paddingLeft: '.4em', fontFamily: 'none' }}>
                                    Added {getAge(createdAt.toString())} Days ago
                                </div>
                                <div style={{ 'margin-top': '0', paddingLeft: '.4em', lineHeight: '0', fontFamily: 'none' }}>
                                    {name}
                                </div>
                                <div style={{ 'margin-top': '0', paddingTop: '.8em', fontSize: '1.3em', paddingLeft: '1em' }}>
                                    ${price}   night
                                </div>
                            </div>
                        </div>
                    </>
                )))
                }
            </div >
        </div >
    </div >
    )
}

export default SpotsIndex
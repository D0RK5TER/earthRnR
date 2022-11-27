import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import UserButton from './UserButton';
import './Navigation.css';
import logo from '../../assets/logo.jpg';
import quest from '../../assets/quest.jpg';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';

function Navigation({ isLoaded }) {
    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.logged.spots);
    const state = useSelector(state => state);

    // const myspots = useSelector(state => state.session.spots).filter(x => x.ownwerId === state.user.id)
    let previewImage
    // if (spots) {
    //     for (let spa of spots) {
    //         if (spa.previewImage === 'No preview') spa.previewImage = quest
    //     }
    // }
    return (
        <div className='topbar' style={{ position: 'fixed', 'background-color': 'white', width: '97%', borderBottom: '1px solid lightgrey' }}>
            <NavLink exact to="/spots" className={'homebutt'} >
                <img src={logo} style={{ paddingRight: '15px' }} />
                earthRnR
            </NavLink>
            <div>

                <ProfileButton user={user} style={{ float: '5em' }} />
            </div>

        </div>

    );
}

export default Navigation;

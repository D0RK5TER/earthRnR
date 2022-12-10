import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './Buttons/ProfileButton';
import './Navigation.css';
import '../SignUpForm/SignUpForm.css'
import logo from '../../assets/logo.jpg';
import spotglass from '../../assets/spotglass.png';
// import { pathURL } from "../../utilities/location";
import { getSessionUser } from '../../store/session2';
// import { getAllSpots } from '../../store/spots2';
import PaginationForm from '../PaginationModal/PaginationForm';
// import { useHistory } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupFormPage from '../SignupFormPage';
import { getAllSpots } from '../../store/spots2';
import OpenModalButton from "../OpenModalButton";

import SpotForm from '../SpotFormModal';
import SignUpForm from '../SignUpForm';
// import ComingSoon from '../ComingSoon/ComingSoon';



function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => getSessionUser(state));
  const location = useLocation().pathname






  return (
    <div id='topbar'>
      <div id='topleft' className='nav-left' style={{
        'cursor': 'pointer', fontFamily: 'Bold',
        marginLeft: '5em',
      }} >
        <div exact to="/"
          className={'homebutt'}
          style={{ fontFamily: 'Bold' }}
          onClick={() => {
            location === '/' ?
              window.scrollTo(0, 0) || dispatch(getAllSpots())
              : window.scrollTo(0, 0) || history.push('/')
          }}>
          <img src={logo} style={{ paddingRight: '15px' }} alt='logo' />
          earthRnR
        </div>
      </div>

      <div className='nav-center' id='topmid'>
        <OpenModalButton
          id='paginationbut'
          buttonText="Start your search"
          modalComponent={<PaginationForm />}
        />
        <OpenModalButton
          id='paginationbut2'
          buttonText={<img
            id='spotglassimg'
            src={spotglass}
            alt='search icon' />}
          modalComponent={<PaginationForm />}
        />
      </div>

      <div className='nav-right' id='topright'>
        {user ? <OpenModalButton
          id='createspotbut'
          buttonText="AirBnB your Home!"
          modalComponent={<SpotForm />}
        /> :
          <OpenModalButton
            id='signupmodalbut'
            buttonText="Sign Up to Host!"
            modalComponent={<SignUpForm place={'Sign Up'} />}
          />}

        <ProfileButton
          user={user}
        // isLoaded={isLoaded}
        />

      </div>
    </div>
  )
}

export default Navigation;

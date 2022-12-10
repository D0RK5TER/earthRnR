import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './Buttons/ProfileButton';
import './Navigation.css';
import '../SignUpForm/SignUpForm.css'
import logo from '../../assets/logo.jpg';
import spotglass from '../../assets/spotglass.png';
import globe from '../../assets/globe.png'
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
      <div id='topleft' className='nav-left' >
        <div exact to="/"
          className={'homebutt'}
          onClick={() => {
            location === '/' ?
              window.scrollTo(0, 0) || dispatch(getAllSpots())
              : window.scrollTo(0, 0) || history.push('/')
          }}>
          <img src={logo} alt='logo' id='navlogo' />
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
          id='createswitching'
          buttonText="EarthBnB your home"
          modalComponent={<SpotForm />}
        /> :
          <OpenModalButton
            id='signswitching'
            buttonText="Sign Up to Host!"
            modalComponent={<SignUpForm place={'Sign Up'} />}
          />}
        <OpenModalButton
          id='globebut'
          modalComponent={<PaginationForm />}
          buttonText={<img
            id='navbarglobe'
            src={globe}
            alt='lang select' />}
        />
        <div >

          <ProfileButton
            user={user}
          // isLoaded={isLoaded}
          />
        </div>

      </div>
    </div>
  )
}

export default Navigation;

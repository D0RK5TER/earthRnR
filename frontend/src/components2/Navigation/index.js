import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logo.jpg';
// import quest from '../../assets/quest.jpg';
//NEW
import { getSessionUser } from '../../store/session2';



// import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupFormPage from '../SignupFormPage';
// import CreateSpotForm from '../CreateSpotForm/CreateSpotForm';
// import ComingSoon from '../ComingSoon/ComingSoon';

function Navigation({ isLoaded }) {
  //NEW
  const sessionUser = useSelector(state => getSessionUser(state));
  // const seser = getSessionUser();
  // console.log(sessionUser)
  // const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='topbar'>
      <div className='nav-left'>
        <NavLink exact to="/" className={'homebutt'} >
          <img src={logo} style={{ paddingRight: '15px' }} />
          earthRnR
        </NavLink>
      </div>
      <div className='nav-center'>

      </div>
      <div className='nav-right'>

        <ProfileButton
          user={sessionUser}
          isLoaded={isLoaded}
        />

      </div>
    </div>
  )
}

export default Navigation;

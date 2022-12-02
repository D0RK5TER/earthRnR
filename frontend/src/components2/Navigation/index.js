import React, { useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/logo.jpg';
// import quest from '../../assets/quest.jpg';
//NEW
import { getSessionUser } from '../../store/session2';
import { getAllSpots } from '../../store/spots2';
import PaginationFormModel from '../PaginationModal';
// import { useHistory } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupFormPage from '../SignupFormPage';
// import CreateSpotForm from '../CreateSpotForm/CreateSpotForm';
// import ComingSoon from '../ComingSoon/ComingSoon';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => getSessionUser(state));
  // useEffect(() => dispatch(getAllSpots('')), [dispatch])
  // console.log(user, '!!!!')
  return (
    <div className='topbar' style={{ position: 'sticky' }}>
      <div className='nav-left' id='topleft' style={{ 'cursor': 'pointer' }} >
        <div exact to="/" className={'homebutt'} onClick={() => {
          dispatch(getAllSpots('')).then(history.push('/'))
        }}>
          <img src={logo} style={{ paddingRight: '15px' }} />
          earthRnR
        </div>
      </div>
      <div className='nav-center' id='topmid'>
        {user && (
          <>
            
            <PaginationFormModel />
          </>
        )}
      </div>
      <div className='nav-right'>

        <ProfileButton
          user={user}
          isLoaded={isLoaded}
        />

      </div>
    </div>
  )
}

export default Navigation;

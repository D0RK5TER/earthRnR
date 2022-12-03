import React, { useEffect } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './Buttons/ProfileButton';
import './Navigation.css';
import logo from '../../assets/logo.jpg';
import spotglass from '../../assets/spotglass.png';
//NEW
import { getSessionUser } from '../../store/session2';
import { getAllSpots } from '../../store/spots2';
import PaginationFormModel, { setfunc } from '../PaginationModal/index.js';
// import { useHistory } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupFormPage from '../SignupFormPage';
import SpotFormModal from '../SpotFormModal';
// import ComingSoon from '../ComingSoon/ComingSoon';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => getSessionUser(state));
  // useEffect(() => dispatch(getAllSpots('')), [dispatch])
  // console.log(user, '!!!!')
  return (
    <div id='evanbar' className='topbar' style={{
      position: 'sticky', width: '100vw',
      // marginLeft: '1em',
      //  marginRight: '1em'
    }}>
      <div id='topleft' className='nav-left' style={{
        'cursor': 'pointer', fontFamily: 'Bold',
        marginLeft: '5em',
      }} >
        <div exact to="/" className={'homebutt'}
          style={{ fontFamily: 'Bold' }}
          onClick={() => {
            dispatch(getAllSpots('')).then(history.push('/'))
          }}>
          <img src={logo} style={{ paddingRight: '15px' }} />
          earthRnR
        </div>
      </div>
      <span className='nav-center' id='topmid'>

        <button>
          <div id='statesearch'>
            Location
          </div>
        </button>
        {/* <PaginationFormModel>
          <div id='statesearch'>
            
          </div>
        </PaginationFormModel> */}

        <PaginationFormModel />

        <img
          onClick={() => setfunc(true)}
          src={spotglass}
        />

      </span>
      <div className='nav-right' id='topright' style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '23%'
      }}>
        
        <SpotFormModal />

        <ProfileButton
          user={user}
          isLoaded={isLoaded}
        />

      </div>
    </div>
  )
}

export default Navigation;

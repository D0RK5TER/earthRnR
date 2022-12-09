import React, { useEffect } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './Buttons/ProfileButton';
import './Navigation.css';
import '../SignUpFormModal/SignUpForm.css'
import logo from '../../assets/logo.jpg';
import spotglass from '../../assets/spotglass.png';
import { pathURL } from "../../utilities/location";
import { getSessionUser } from '../../store/session2';
// import { getAllSpots } from '../../store/spots2';
import PaginationFormModel, { setfunc } from '../PaginationModal/index.js';
// import { useHistory } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
// import LoginForm from '../LoginFormModal/LoginForm';
// import SignupFormPage from '../SignupFormPage';
import { getAllSpots } from '../../store/spots2';

import SpotFormModal from '../SpotFormModal';
import SignUpFormModal from '../SignUpFormModal';
// import ComingSoon from '../ComingSoon/ComingSoon';



function Navigation() {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector(state => getSessionUser(state));
  let loc
  useEffect(() => {
    loc = pathURL(history)
  }, []);






  console.log(loc)
  return (
    <div id='evanbar' className='topbar' style={{
      position: 'sticky', width: '100vw',
    }}>
      {/* <NavLink to='/'> */}
      <div id='topleft' className='nav-left' style={{
        'cursor': 'pointer', fontFamily: 'Bold',
        marginLeft: '5em',
      }} >
        <div exact to="/"
          className={'homebutt'}
          style={{ fontFamily: 'Bold' }}
          onClick={() => {
            loc === '/' ? window.scrollTo(0, 0) || dispatch(getAllSpots()) :
              window.scrollTo(0, 0) || history.push('/')
          }}>
          <img src={logo} style={{ paddingRight: '15px' }} />
          earthRnR
        </div>
      </div>
      {/* </NavLink> */}


      <div className='nav-center' id='topmid'>
        <span className='nav-center' >
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
      </div>
      <div className='nav-right' id='topright'>
        {/* <div> */}
        {user ? <SpotFormModal /> : <SignUpFormModal place={'Sign Up to Host!'} />}
        {/* </div> */}

        <ProfileButton
          user={user}
        // isLoaded={isLoaded}
        />

      </div>
    </div>
  )
}

export default Navigation;

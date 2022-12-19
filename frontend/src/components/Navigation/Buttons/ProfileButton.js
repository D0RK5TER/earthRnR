import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../../store/session';
import OpenModalButton from "../../OpenModalButton";
import SignUpForm from '../../SignUpForm';
import LoginFormModal from '../../LoginFormModal';
import DemoButton from './DemoButton';
import outline from '../../../assets/outline.png';
import './profile.css'
import ContactUsModal from "../../ContactUsModal";
import HelpModal from "../../HelpModal";




function ProfileButton(/*{user}*/) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return
    return setShowMenu(true)
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(() => history.push('/'))
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  return (
    <div className='dropbar' id='dropdowncont' >

      <button id='navbarprofile' className='profilebutt'

        onClick={openMenu ? openMenu : setShowMenu(false)} >
        <img src={outline} id='profileshape' alt='profile icon'
        />
      </button>
      <div className={`${ulClassName} dropbarformat`} ref={ulRef} id='dropbarcont'>
        {sessionUser ?
          showMenu && (

            <div className="profile-dropdown ddprofile" id='ddloggedin'>
              <div id='ddname'>
                {sessionUser.firstName} {sessionUser.lastName}
              </div>
              <div id='ddusername'>
                {sessionUser.username}
              </div>
              <div id='ddemail'>
                {sessionUser.email}
              </div>
              <div className='ddprofile' id='ddcurrentcont'>
                <button className='ddprofile' id='ddcurrentbutt'
                  onClick={() => window.scrollTo(0, 0) || setShowMenu(false) || history.push('/current')
                  }>
                  Profile Page
                </button>
              </div>
              <div className='ddlogout' id='hovercome'>
                <button className='ddlogout' id='borderbegone' onClick={handleLogout}>
                  Log Out
                </button>
              </div>

            </div>
          )
          : showMenu && (
            <div className="profile-dropdown ddprofile">

              <OpenModalButton
                id='signupdrop'
                buttonText="Sign up"
                modalComponent={<SignUpForm place={'Sign Up'} />}
              />
              <OpenModalButton
                id='logindrop'
                buttonText="Log In"
                modalComponent={<LoginFormModal />}
              />
              <div id="ddline">
              </div>
              <DemoButton />
              <OpenModalButton
                id='logindrop'
                buttonText="Contact Us"
                modalComponent={<ContactUsModal />}
              />
              <OpenModalButton
                id='helpdrop'
                className='bottomlogindrop'
                buttonText="Help"
                modalComponent={<HelpModal />}
              />
            </div>

          )}
      </div>
    </div >
  );
}

export default ProfileButton;

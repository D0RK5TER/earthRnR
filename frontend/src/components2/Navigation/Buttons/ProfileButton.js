import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../../store/session2';
// import { getSessionUser } from '../../../store/session2';
import OpenModalButton from "../../OpenModalButton";
import SignUpForm from '../../SignUpForm';
import LoginFormModal from '../../LoginFormModal';
import DemoButton from './DemoButton';
import outline from '../../../assets/outline.png';
import './profile.css'
//take away user so i can use store selector for easier rerender?

function ProfileButton(/*{user}*/) {
  // const sessionUser = getSessionUser(state);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const [switchbut, setSwitchbut] = useState(false)
  // const []
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

      <button id='probutt' className='profilebutt'

        onClick={openMenu ? openMenu : setShowMenu(false)} >
        <img src={outline} className='profileshape' alt='profile icon'
          // onClick={openMenu ? openMenu : setShowMenu(false)}
          style={showMenu ? { boxShadow: '2px 2px 4px #dddddd' } : null} />
      </button>
      <div className={`${ulClassName} dropbarformat`} ref={ulRef} id='dropbarcont'>


        {/* <div id="toprightmenu"> */}
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
                  onClick={() => window.scrollTo(0, 0)|| setShowMenu(false) || history.push('/current')
                    // || closeMenu()
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

              {/* <SignUpFormModal place={'Sign Up'} /> */}
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
              <DemoButton />
              {/* <DemoButton /> */}
              *Terms*
              *Help*

            </div>
          )

        }
        {/* </div> */}
      </div>
      <>
      </>
    </div >
  );
}

export default ProfileButton;

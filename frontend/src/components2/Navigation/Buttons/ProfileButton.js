import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../../store/session2';
// import { getSessionUser } from '../../../store/session2';

import SignUpFormModal from '../../SignUpFormModal';
import LoginFormModal from '../../LoginFormModal';
import DemoButton from './DemoButton';
import outline from '../../../assets/outline.png';
import './profile.css'
//take away user so i can use store selector for easier rerender?

function ProfileButton(/*{user}*/{ isLoaded }) {
  // const sessionUser = getSessionUser(state);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [switchbut, setSwitchbut] = useState(false)
  // const []
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
  };

  const closeMenu = () => {
    if (!showMenu) return
    setShowMenu(false);
  };
  useEffect(() => {
    if (!showMenu) return;
    let underbar = document.getElementById('outter')
    underbar.addEventListener('click', closeMenu)
    const drop = document.getElementById('topmid')
    drop.addEventListener('click', closeMenu)
    // const keep = document.getElementById('dropdowncont')
    // keep.removeEventListener('click', closeMenu)
    // const keep1 = document.getElementById('dropbarcont')
    // keep.removeEventListener('click', closeMenu)
    // const keep2 = document.getElementById('loggedin')
    // keep.removeEventListener('click', closeMenu)
    // keep1.removeEventListener('click', closeMenu)
    // keep2.removeEventListener('click', closeMenu)


    // drop.lastChild.removeEventListener('click', closeMenu)
    // drop.forEach(x => x.removeEventListener('click', closeMenu))
    return () => {
      drop.removeEventListener("click", closeMenu)
      underbar.removeEventListener("click", closeMenu)
    }
  }, [showMenu])


  // !showMenu ? console.log(navbar) : navbar.lastChild.removeEventListener('click', closeMenu)

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div className='dropbar' id='dropdowncont' >

      <button id='probutt' className='profilebutt'

        onClick={openMenu ? openMenu : closeMenu} >
        <img src={outline} className='profileshape'
          onClick={openMenu ? openMenu : closeMenu}
          style={showMenu ? { boxShadow: '2px 2px 4px #dddddd' } : null} />
      </button>
      <div id='dropbarcont' className='dropbarformat'>


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
                <button className='ddprofile' id='ddcurrentbutt' onClick={() => history.push('/current') || closeMenu()}>
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

              <SignUpFormModal place={'Sign Up'} />
              <LoginFormModal />
              <DemoButton />


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

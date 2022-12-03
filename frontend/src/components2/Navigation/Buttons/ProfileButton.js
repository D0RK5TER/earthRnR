import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../../store/session2';
// import { getSessionUser } from '../../../store/session2';

import SignUpFormModal from '../../SignUpFormModal';
import LoginFormModal from '../../LoginFormModal';
import DemoButton from './DemoButton';
import outline from '../../../assets/outline.png';

//take away user so i can use store selector for easier rerender?

function ProfileButton(/*{user}*/{ isLoaded }) {
  // const sessionUser = getSessionUser(state);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const []
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    // if (!showMenu)
    setShowMenu(false);
  };
  useEffect(() => {
    let navbar = document.getElementById('evanbar')
    let drop = document.getElementById('dropbarcont')

    if (!showMenu) return;
    let underbar = document.getElementById('outter')
    underbar.addEventListener('click', closeMenu)
    // navbar.children.addEventListener('click', closeMenu)
    navbar.lastChild.removeEventListener('click', closeMenu)
    console.log(navbar.children, drop)
    for (let c of navbar.children) console.log(c)
    return () => underbar.removeEventListener("click", closeMenu);
  }, [showMenu]);

  // !showMenu ? console.log(navbar) : navbar.lastChild.removeEventListener('click', closeMenu)

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div className='dropbar' id='pleasework' style={{
      backgroundColor: 'white',
      lineHeight: '2em',
      'cursor': 'pointer',
      marginTop: '1em',
      marginRight: '4em',
      // height: '3em'
      
    }}>
      <button id='probutt' className='profilebutt' onClick={openMenu ? openMenu : closeMenu} style={{
        border: 'none', lineHeight: '3em', 'cursor': 'pointer'
      }}>
        <img src={outline} className='profileshape' onClick={openMenu ? openMenu : closeMenu} />
      </button>
      <div id='dropbarcont' className='dropbarformat' style={{
        backgroundColor: 'white',

        'cursor': 'pointer'
      }}>


        {/* <div id="toprightmenu"> */}
        {sessionUser ?
          showMenu && (
            <>
              <div id='loggedin' className="profile-dropdown" style={{
                width: '5em',
                padding: '.52em',
                borderStyle: 'solid',
                borderWidth: '1px',
                overflow: 'hidden',
                borderRadius: '2em',
                // fontFamily: 'Bold'
              }}>
                <div style={{ padding: '0px' }}>
                  <p style={{ fontSize: '80%', marginBottom: '0', fontFamily: 'Bold' }}>
                    {sessionUser.username}
                  </p>
                </div>
                <div style={{ padding: '0px' }}>
                  <span style={{
                    fontSize: '60%', marginTop: '1',
                  }}>{sessionUser.email}</span>
                </div>
                <span className='lamecss' style={{ paddingTop: '0px', backgroundColor: 'white' }}>
                  {/* <div style={{ paddingTop: '0px', width: '100%', fontSize: '1.5em', borderRadius: '0', textAlign: 'left' }}>
                    <SpotFormModal style={{ width: '100%', textAlign: 'left' }} />
                  </div> */}
                  <div style={{ margin: '0px' }}>
                    <button className='logoutbutt' onClick={handleLogout} style={{
                      width: '120%', textAlign: 'left',
                      fontFamily: 'light',
                    }}
                    >
                      Log Out
                    </button>
                  </div>


                </span>
              </div>
            </>
          )
          :
          (
            <>
              {showMenu && (
                <>
                  <div id='needmoney' className="profile-dropdown" style={{
                    width: '5em',
                    'border-style': 'solid',
                    'border-width': '1px',
                    overflow: 'hidden',
                    borderRadius: '2em',
                    // fontFamily: 'Bold' 
                  }}>

                    <div style={{
                      paddingTop: '1em', width: '100%', 'font-size': '1.5em',

                      borderRadius: '0', textAlign: 'left'
                    }}>
                      <LoginFormModal style={{ width: '100%' }} />
                    </div>
                    <div style={{ margin: '0px' }}>
                      <SignUpFormModal />
                    </div>
                    <div style={{ margin: '0px' }}>
                      <DemoButton />
                    </div>
                  </div>
                </>
              )}
            </>
          )
        }
        {/* </div> */}
      </div>
      <>
      </>
    </div>
  );
}

export default ProfileButton;

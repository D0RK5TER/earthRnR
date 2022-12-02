import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as sessionActions from '../../store/session2';
import { getSessionUser } from '../../store/session2';

import SignUpFormModal from '../SignUpFormModal';
import LoginFormModal from '../LoginFormModal';
import DemoButton from './DemoButton';
import outline from '../../assets/outline.png';

import SpotFormModal from '../SpotFormModal';

//take away user so i can use store selector for easier rerender?

function ProfileButton(/*{user}*/{ isLoaded }) {
  // const sessionUser = getSessionUser(state);

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    //// had to take this out before to make sure that drop didnt close
    // let outside = document.querySelector('root')
    // const myElement = document.getElementById('profile-dropdown');
    // let inside = document.querySelectorAll('.profile-dropdown')
    // console.log(inside[0].children)
    let outside = document.getElementById('outter')
    outside.addEventListener('click', closeMenu)
    let bar = document.getElementById('topleft')
    let foo = document.getElementById('topmid')
    bar.addEventListener('click', closeMenu)
    foo.addEventListener('click', closeMenu)
    // for (let c of bar.children) console.log(c)
    console.log(foo, bar)
    // inside.removeEventListener("click", closeMenu);
    // for (const child of myElement.children) {
    //   child.removeEventListener("click", closeMenu);
    // }
    // })
    // document.getElementsByClassName('profile-dropbar')[0]
    // console.log(document.getElementById('newbody'))
    ///below too
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <div className='dropbar' >
      <div className='dropbarformat' style={{ backgroundColor: 'white', lineHeight: '3em', 'cursor': 'pointer' }}>
        <button className='profilebutt' onClick={openMenu ? openMenu : closeMenu} style={{ border: 'none', lineHeight: '3em', 'cursor': 'pointer' }}>
          <img src={outline} className='profileshape' onClick={openMenu ? openMenu : closeMenu}/>
        </button>
        {sessionUser ?
          <>
            {showMenu && (
              <div className="profile-dropdown" style={{
                width: '13em',
                borderStyle: 'solid',
                borderWidth: '1px',
                overflow: 'hidden',
                borderRadius: '2em'
              }}>
                <div style={{ padding: '0px' }}>
                  <p style={{ fontSize: '80%', marginBottom: '0', }}>
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
                    <button className='logoutbutt' onClick={handleLogout} style={{ width: '100%', textAlign: 'left' }}
                    >
                      Log Out
                    </button>
                  </div>


                </span>
              </div>
            )
            }
          </>
          :
          (
            <>
              {showMenu && (
                <>
                  <div className="profile-dropdown" style={{
                    width: '13em',
                    'border-style': 'solid',
                    'border-width': '1px',
                    overflow: 'hidden',
                    borderRadius: '2em'
                  }}>

                    <div style={{ paddingTop: '1em', width: '100%', 'font-size': '1.5em', borderRadius: '0', textAlign: 'left' }}>
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
      </div>
      <>
      </>
    </div>
  );
}

export default ProfileButton;

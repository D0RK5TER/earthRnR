import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import outline from '../../assets/outline.png';
import SignUpFormModal from '../SignUpFormModal';
import LoginFormModal from '../LoginFormModal';
import { useHistory } from 'react-router-dom';
import DemoButton from './DemoButton';
import SpotFormModal from '../SpotFormModal';
// import SpotFormModal from '../SpotFormModal';

export default function ProfileButton({ user, isLoaded }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory()
    // const user = useSelector(state => state.session.user);
    const openMenu = () => {
        if (showMenu) return  setShowMenu(false);
        else setShowMenu(true)
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        // document.body.addEventListener('click', closeMenu);
        // let ddbar = document.querySelector(".profile-dropdown").children
        // //    console.log(typeof ddbar)
        // // for (let i of ddbar) i.removeEventListener("click", closeMenu)
        // return () => document.body.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const handlelogout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout()).then(history.push('/'));
    };

    let sessionLinks
    if (!user) {
        sessionLinks = (
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
        );
    } else {
        sessionLinks = (
            <>
                {showMenu && (
                    <div className="profile-dropdown" style={{
                        width: '13em',
                        'border-style': 'solid',
                        'border-width': '1px',
                        overflow: 'hidden',
                        borderRadius: '2em'
                    }}>
                        <div style={{ padding: '0px' }}>
                            <p style={{ fontSize: '80%', marginBottom: '0', }}>
                                {user.username}
                            </p>
                        </div>
                        <div style={{ padding: '0px' }}>
                            <span style={{
                                fontSize: '60%', marginTop: '1',
                            }}>{user.email}</span>
                        </div>
                        <span classname='lamecss' style={{ paddingTop: '0px', backgroundColor: 'white' }}>
                            <div style={{ paddingTop: '0px', width: '100%', 'font-size': '1.5em', borderRadius: '0', textAlign: 'left' }}>
                                <SpotFormModal style={{ width: '100%', textAlign: 'left' }} />
                            </div>
                            <div style={{ margin: '0px' }}>
                                <button classname='logoutbutt' onClick={handlelogout} style={{ width: '100%', textAlign: 'left' }}
                                >
                                    Log Out
                                </button>
                            </div>


                        </span>
                    </div>
                )
                }
            </>
        )

    }
    return isLoaded && (

        <div className='dropbar' >


            <div className='dropbarformat' style={{ backgroundColor: 'white', lineHeight: '3em', 'cursor': 'pointer' }}>
                <button className='profilebutt' onClick={openMenu} style={{ border: 'none', lineHeight: '3em', 'cursor': 'pointer' }}>
                    <img src={outline} className='profileshape' />
                </button>
                {sessionLinks}
            </div>
            <>
            </>
        </div>

    );
}


// {showMenu && (
//     <ul className="profile-dropdown" style={{ translate: '-2em', textAlign: 'center' }}>
//         <li >{user.username}</li>
//         <li >{user.email}</li>
//         <li>
//             <button onClick={logout}>Log Out</button>
//         </li>
//         {/* <li>

//                 <SignUpFormModal />
//             </li> */}

//     </ul>

// )}
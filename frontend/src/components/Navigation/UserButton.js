import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { Link, Redirect } from 'react-router-dom';
// import { login } from '../../store/session';
import { getMySpots } from '../../store/logged';
import CurrentUserIndex from '../CurrentUserIndex';

import SpotFormModal from '../SpotFormModal';

function UserButton({ isLoaded }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state) => { return state.session.user })
    // console.log(user)
    // const spotLinks = (
    //     <>
    //         {showMenu && (
    //             <div className="profile-dropdown">
    //                 <div >
    //                     <CurrentUserIndex state={state} />
    //                 </div>
    //             </div>)}
    //     </>
    // )
    const handleChange = (e) => {
        e.preventDefault()
        // dispatch(getMySpots())
        // return history.push('/userSpots')
        // return navigate('/userSpots')
    }

    const openMenu = () => {
        // console.log(user)

        if (showMenu) setShowMenu(false);
        else setShowMenu(true);
    };

    // let userLinks;
    // if (user === null) {
    //     userLinks = (
    //         <>
    //         </>
    //     )
    // } else {
    //     userLinks = (
    //         <>
    //             <div className='dropbar' style={{ display: 'flex' }}>
    //                 <div className='dropbarformat' style={{ backgroundColor: 'white' }}>
    //                     <button onClick={} className='profilebutt'>
    //                         Owner
    //                     </button>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }


    return user && (
        <div className='dropbar' style={{ display: 'flex' }}>
            <div className='dropbarformat' style={{ backgroundColor: 'white' }}>
                
                <button onClick={openMenu} className='profilebutt'>
                    making it bigger
                </button>
            </div>
            <>
                {showMenu && (
                    <div className="profile-dropdown">
                        <div>
                            <div style={{ paddingTop: '0px' }}>
                                <button onClick={handleChange}>See My Spots!</button>
                            </div>
                        </div>
                        <div>
                            <SpotFormModal />
                        </div>
                    </div>
                )}
            </>
        </div>

    );
}

export default UserButton;

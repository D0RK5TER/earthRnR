import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import logo from '../assets/logo.jpg';
import quest from '../assets/quest.jpg'

const Failure = () => {

    return (
        <>
            <div style={{ Top: '30em' }}>
                All lost
                <div style={{ padding: '10em', top: '10em', zIndex: 1 }} >
                    <p>
                        and no where to go </p>
                </div>
                stick around
                <div>
                    <div style={{ marginTop: '10em', top: '10em' }}>

                        for the earthRNR show

                    </div>

                </div>
                Click the home button to get a fresh start!
                SORRY! we could not find what you were looking for!
                Status Code: 404

                <img src={quest} />
            </div>
        </>

    );
}

export default Failure;
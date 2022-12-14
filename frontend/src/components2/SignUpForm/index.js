
// import React, { useState } from 'react';
// import { Modal } from '../../context/Modal';
// import SignUpForm from './SignUpForm';
// import '../Navigation/Navigation.css'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session2';
import { useModal } from '../../context/Modal';

import './SignUpForm.css'
function SignUpForm() {
    const { closeModal } = useModal();

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return await dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
                .then(closeModal)
                .catch(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    data.message === 'Validation error' ? setErrors([data.errors])
                        : setErrors(Object.values(data.errors))
                }
                )
            //check for need
            // .then(() => setShowModal(false))
        }
        else return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit} id='signupform' >
            <div id='signupheader'>
                <div id='loginexitbutt' onClick={() => closeModal()}>
                    <div>x</div>
                </div>
                <div id='signupheadertext'>
                    <div id="signupmainheader">Welcome to EarthRnR!</div>
                    <div id={!errors.length ? 'signupsubheader' : 'errorswap'}>{!errors.length ? ' Sign Up Today!' : errors.map((error, idx) => <>{error}</>)}</div>
                    {/* {errors.map((error, idx) => <div className='errors' key={error + idx}>{error}</div>)} */}
                </div>
            </div>
            {/* <ul>
                {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
            </ul> */}
            <div id='signupformcont'>
                <label className="signuplabel" id='signuptop'>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='
                    First Name
                    '
                        required
                    />
                </label>
                <label className="signuplabel">
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='
                    Last Name
                    
                    '
                        required
                    />
                </label>
                <label className="signuplabel">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='
                    Email
                    
                    '
                        required
                    />
                </label>
                <label className="signuplabel">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='
                    Username
                    
                    '
                        required
                    />
                </label>
                <label className="signuplabel">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='
                    Password
                    
                    '
                        required
                    />
                </label>
                <label className="signuplabel">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        Confirm Password
                        placeholder='Confirm Password'
                        required
                    />
                </label>
                <label className="signuplabel checkbox">
                    <input
                        type='checkbox'
                        defaultChecked='true'
                    />
                    Sign Up for exclusive email offers!
                </label>
            </div>
            <button id='signupsubmitbutton' type="submit" style={{ marginTop: '1em' }} >Sign Up</button>
        </form>
    );
}

export default SignUpForm;
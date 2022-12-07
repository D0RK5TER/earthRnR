import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session2';
import './SignUpForm.css'
function SignUpForm({ setShowModal }) {
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
            return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data.message) setErrors([data.message]);
                }
                )
                //check for need
                .then(() => setShowModal(false))
        }
        else return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit} id='signupform' >
            <div id='signupheader'>
                <div id='signupexitbutt' onClick={() => setShowModal(false)}>
                    x
                </div>
                <div id='signupheadertext'>
                    <div id="signupmainheader">Welcome to EarthRnR!</div>
                    <span id='signupsubheader'> Sign Up Today!</span>
                </div>
            </div>
            <ul>
                {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
            </ul>
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
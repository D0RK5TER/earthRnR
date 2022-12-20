
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';
import { useModal } from '../../context/Modal';

import '../../utilities/forminput.css'
function SignUpForm() {
    const { closeModal } = useModal();

    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [profilepic, setProfilepic] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return await dispatch(sessionActions.signup({ firstName, lastName, email, username, password, profilepic }))
                .then(closeModal)
                .catch(async (res) => {
                    const data = await res.json()
                    data.message === 'Validation error' ? setErrors(data.errors)
                        : setErrors(Object.values(data.errors))
                }
                )
        }
        else return setErrors(["Password field's must match!"]);
    };

    return (
        <form onSubmit={handleSubmit} className='reuseform' id='signup' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Sign up Today!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>

            <div id='signupformcontain' className="reuseform reuseformbody">
                <input
                    id='signupfname'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First Name'
                    required
                /> 

                <input
                    id='signuplname'
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name'
                    required
                />
                <input
                    id='signupemail'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                    required
                />
                <input
                    id='signupuser'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    required
                />
                 <input
                    id='signupuser'
                    type="url"
                    value={profilepic}
                    onChange={(e) => setProfilepic(e.target.value)}
                    placeholder='Profile Picture URL'
                    required
                />
                <input
                    id='signuppass'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // placeholder='Strong Password'
                    required
                />

                <input
                    id='signuppass2'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Confirm Password'
                    // placeholder='Exact Match'
                    required
                />

                <div id='checkboxsign'>
                    <input
                        type='checkbox'
                        defaultChecked='true'
                    />
                    Sign Up for exclusive email offers!
                </div>

            </div>
            <div id='submitbuttwrap' className="login">
                <button id='signupbutton' className="login" type="submit" >Sign Up</button>
            </div>
        </form>
    );
}

export default SignUpForm;
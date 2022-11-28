
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom"; ///gone 
import * as sessionActions from "../../store/session2";
import './LoginForm.css'
// import { openMenu } from "../Navigation/ProfileButton";
// gone
function LoginForm(setShowModal) {
    const dispatch = useDispatch();
    // const history = useHistory() gone 
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
            /// check if this is needed
            .then(() => setShowModal(false))
    }
    return (
        <form onSubmit={handleSubmit} className='loginform' >
            <ul style={{ margin: '0' }}>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>{error}</li>
                ))}
            </ul>
            <p style={{ fontSize: '2em', marginTop: 0, paddingTop: 0 }}>
                Login
            </p>
            <label>
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder='Username or Email'
                    required
                />
            </label>
            <label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}
export default LoginForm;
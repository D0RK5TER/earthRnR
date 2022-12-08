
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; ///gone 
import * as sessionActions from "../../store/session2";
import './LoginForm.css'
// import { openMenu } from "../Navigation/ProfileButton";
// gone
function LoginForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).then(() => setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
        /// check if this is needed
        // .then(() => setShowModal(false))
    }
    return (
        <form onSubmit={handleSubmit} id='loginform' >
            <div id="loginheader">
                <div id='loginexitbutt' onClick={() => setShowModal(false)}>
                    <div>x</div>
                </div>
                <div>
                    Login
                </div>
            </div>
            <ul style={{ margin: '0' }}>
                {errors.map((error, idx) => (
                    <li className='errors' key={error+idx}>
                        {error}</li>
                ))}
            </ul>
            <h3>Welcome to EarthRnR!</h3>
            <label className="loginlabel">
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder='Username or Email'
                    required
                />
            </label>
            <label className="loginlabel">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </label>
            <button type="submit" id='loginsubmitbutton'>Continue</button>
            <span>
                <div className="greylines"></div>
                <p>
                    or

                </p>
                <div className="greylines"></div>
            </span>
            <div id='fangcont'>

                {/* <a onScroll={()}> */}
                <div className="fangbutts" onClick={() => window.location = 'https://metabookclone.herokuapp.com/#/'}>
                    <img src={`https://metabook-seed.s3.amazonaws.com/Frame_1-removebg-preview.png`}
                        style={{ float: 'left' }}
                    />
                    <p>
                        Continue with Metabook
                    </p>
                </div>
                {/* </a> */}
                <div className="fangbutts" onClick={() => window.location = 'https://insta-flick.herokuapp.com/home/'}>
                    {/* <button></button> */}
                    <img src={`https://insta-flick.herokuapp.com/static/instaflick-updatedLogo.png`}
                        style={{ float: 'left' }}
                    />
                    <p>
                        Continue with Instaflick
                    </p>
                </div>
                <div className="fangbutts" onClick={() => window.location = 'https://niles-app-academy.herokuapp.com/#/'}>
                    <img src={`https://niles-app-academy.herokuapp.com/assets/white_logo-6a776881c565fa200ed232b46298f804059b6542c6ec355b510273f8e1d4d023.png`}
                        style={{ float: 'left', backgroundColor: 'darkgrey' }}
                    />
                    <p>
                        Continue with Niles
                    </p>
                </div>
                <div className="fangbutts" onClick={() => window.location = 'https://slackluster.herokuapp.com/'}>
                    {/*https://slackluster.herokuapp.com/static/media/Slack_Mark.3474c14d58fbbab9cfa2208b01a4ac3a.svg*/}
                    <img src={`https://slackluster.herokuapp.com/static/media/Slack_Mark.3474c14d58fbbab9cfa2208b01a4ac3a.svg`}
                        style={{ float: 'left', height: '3em' }}
                    />
                    <p>
                        Continue with Slackluster
                    </p>
                </div>
            </div>


        </form>
    );
}
export default LoginForm;
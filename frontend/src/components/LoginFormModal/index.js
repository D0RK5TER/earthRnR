import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import './LoginForm.css'


function LoginForm() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }
    return (
        <form onSubmit={handleSubmit}
         id='loginform' className="signup sign"
       >

            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Login' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
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
            <div id='loginmiddle'>
                <div className="greylines"></div>
                <p>
                    or

                </p>
                <div className="greylines"></div>
            </div>
            <div id='fangcont'>

                <div className="fangbutts fangbutt fang" onClick={() => window.location = 'https://myspace.com'}>
                    <img src={`https://metabook-seed.s3.amazonaws.com/Frame_1-removebg-preview.png`}
                        alt='fake fang buttons'
                    />
                    <p>
                        Continue with Metabook
                    </p>
                </div>
                <div className="fangbutts fangbutt fang" onClick={() => window.location = 'https://instagram.com'}>
                    <img src={`https://insta-flick.herokuapp.com/static/instaflick-updatedLogo.png`}
                        style={{ float: 'left' }}
                        alt='fake fang buttons'
                    />
                    <p>
                        Continue with Instaflick
                    </p>
                </div>
                <div className="fangbutts fangbutt fang" onClick={() => window.location = 'https://amazon.com'}>
                    <img src={`https://niles-app-academy.herokuapp.com/assets/white_logo-6a776881c565fa200ed232b46298f804059b6542c6ec355b510273f8e1d4d023.png`}
                        style={{ float: 'left', backgroundColor: 'darkgrey' }}
                        alt='fake fang buttons'
                    />
                    <p>
                        Continue with Niles
                    </p>
                </div>
                <div className="fangbutts fangbutt fang" onClick={() => window.location = 'https://slack.com/'}>
                    <img src={`https://slackluster.herokuapp.com/static/media/Slack_Mark.3474c14d58fbbab9cfa2208b01a4ac3a.svg`}
                        style={{ float: 'left', height: '3em' }}
                        alt='fake fang buttons'
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
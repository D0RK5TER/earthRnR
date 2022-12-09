import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session2";
import './profile.css'


const DemoButton = () => {
    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);
    const credential = 'D0rk5ter'
    const password = 'password'
    return <button id='dddemo' type="button" onClick={() => dispatch(login({ credential: credential, password: password }))}>Demo Site</button>

}

export default DemoButton




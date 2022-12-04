import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session2";



const DemoButton = () => {
    const dispatch = useDispatch();
    // const [errors, setErrors] = useState([]);
    const credential = 'Dorkster'
    const password = 'password'
    return  <button type="button" onClick={() => dispatch(login({ credential: credential, password: password }))}>Demo Site</button>

}

export default DemoButton




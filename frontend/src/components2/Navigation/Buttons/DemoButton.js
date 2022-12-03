import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session2";



const DemoButton = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const credential = 'Dorkster'
    const password = 'password'

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        dispatch(login({ credential, password })).then(
            async (response) => {
                if (response.ok) {
                    const data = await JSON.stringify(response);
                    setErrors(data.errors);
                }
                return
            }
        );
    };


    return (

        <>
            <form onSubmit={handleSubmit} className='dropbar' >
                <ul style={{ margin: '0' }}>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <button type="button" onClick={() => dispatch(login({ credential: credential, password: password }))} style={{ fontFamily: 'Bold', color: 'black' }}>Demo Site</button>
            </form>
        </>
    )

}

export default DemoButton





import React, { useState } from 'react';
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { useModal } from '../../context/Modal';
import { makeDeleteReview } from '../../store/reviews';

import './DeleteReviewForm.css'

function DeleteReviewForm({ id, review }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    // const history = useHistory()
    // console.log(review)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        // console.log(review)

        let reviewz = { id, review }
        return dispatch(makeDeleteReview(reviewz))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }
    return (
        <form onSubmit={handleSubmit} id='deletespot' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? `Are you sure?` : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div id='delrevwrap'>
                <button type="submit" id="signupbutton">Confirm</button>
            </div>

        </form>
    );
}

export default DeleteReviewForm;

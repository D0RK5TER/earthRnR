
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from '../../context/Modal';
import { makeDeleteReview } from '../../store/reviews2';

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
            <div id='signupheader'>
                <div id='loginexitbutt' onClick={() => closeModal()}>
                    <div>x</div>
                </div>
                <div id='signupheadertext'>
                    <div id="signupmainheader">Are You Sure?</div>
                    <div id={!errors.length ? 'signupsubheader' : 'errorswap'}>{!errors.length ? 'Rate Your Stay!' : errors.map((error, idx) => <>{error}<br /></>)}</div>
                </div>
            </div>
            <div>
                <button type="submit" id="deletebuttsubmit">Confirm</button>
            </div>

        </form>
    );
}

export default DeleteReviewForm;

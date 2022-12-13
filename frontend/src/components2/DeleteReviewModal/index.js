
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

        let reviewz = { id,  review }
        return dispatch(makeDeleteReview(reviewz))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }
    return (
        <form onSubmit={handleSubmit} id='deletespot' >

            <div id='deleteheader'>
                <div id='delexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id="signupmainheader">Are you sure?</div>
            </div>
            <ul id='deleteerror'>
                {errors.map((error, idx) => (
                    <li className='errors' key={error + idx}>{error}</li>))}
            </ul>
            <div>
                <button type="submit" id="deletebuttsubmit">Confirm</button>
            </div>

        </form>
    );
}

export default DeleteReviewForm;

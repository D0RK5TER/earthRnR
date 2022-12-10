
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from '../../context/Modal';
import { makeDeleteReview } from '../../store/reviews2';

import './DeleteReviewForm.css'

function DeleteReviewForm({ id, spotId }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleSubmit = (e) => {
        let obj
        e.preventDefault()
        setErrors([]);
        history.location.pathname !== '/current' ?
            obj = { id, spotId } : obj = { id, spotId, place: true }
        return dispatch(makeDeleteReview(obj))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }
    return (
        <div id='deletespot' >
            <div id='deleteheader'>

                <div id='delexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id="signupmainheader">Are you sure?</div>

            </div>
            <form onSubmit={handleSubmit} id='deletespotform' >
                <ul id='deleteerror'>
                    {errors.map((error, idx) => (
                        <li className='errors' key={error + idx}>{error}</li>))}
                </ul>
                <span>
                    <button type="submit" id="deletebuttsubmit">Confirm</button>
                </span>
            </form>
        </div>
    );
}

export default DeleteReviewForm;

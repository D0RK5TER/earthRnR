import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { getMyReviews, makeDeleteReview } from '../../store/reviews2';
import './DeleteReviewForm.css'


function DeleteReviewForm({ id, setShowModal, spotId }) {
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
            .then(setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }
    return (
        <div id='deletespot' >
            <form onSubmit={handleSubmit} id='deletespotform' >
                <p>Are You Sure?</p>
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
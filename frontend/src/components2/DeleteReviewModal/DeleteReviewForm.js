import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { getAllReviews, makeDeleteReview } from '../../store/reviews2';
import './DeleteReviewForm.css'


function DeleteReviewForm({ id, setShowModal, spotId }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const history = useHistory()
    const handleSubmit = () => {
        setErrors([]);
        return dispatch(makeDeleteReview({ id, spotId }))
            .then(setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }
    return (
        <form onSubmit={handleSubmit} className='editspotform' >
            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>{error}</li>))}
            </ul>
            <p>Are You Sure?</p>
            <span>
                <button type="submit" className="deletebutt">Delete</button>
            </span>
        </form>
    );
}

export default DeleteReviewForm;
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

    console.log(history.location.pathname)
    const handleSubmit = (e) => {
        let obj 
        e.preventDefault()
        setErrors([]);
        history.location.pathname !== '/current'?
        obj = { id, spotId }: obj = { id, spotId, place: true }
        return dispatch(makeDeleteReview(obj))
            .then(setShowModal(false))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
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
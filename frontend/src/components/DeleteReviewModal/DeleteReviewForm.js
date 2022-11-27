import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { deleteReview } from '../../store/reviews';
import './DeleteReviewForm.css'


function DeleteReviewForm(id) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    // console.log(id)
    // let idxx = +props.props
    const handleSubmit = () => {
        setErrors([]);
        return dispatch(deleteReview(id.id))
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            );
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
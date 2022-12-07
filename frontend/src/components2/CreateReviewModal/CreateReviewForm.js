import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAllReviews, createReview } from '../../store/reviews2';
import { getOneSpot } from '../../store/spots2'
import './CreateReviewForm.css'


function CreateReviewForm({ id, setShowModal }) {
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(0);
    const [errors, setErrors] = useState([]);
    // console.log(id)
    id = +id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        let reviewz = { id, review, stars }
        // console.log(reviewz)
        return dispatch(createReview(reviewz))
            // .then(dispatch(getOneSpot(id))) trying to get rating to update
            .then(setShowModal(false))
            .catch(async (res) => {
                if (res.ok) {
                    const data = await res.json()
                    if (data.message) setErrors([data.message])
                    // dispatch(getAllReviews(id))
                }
                else setErrors(['something went wrong please try again!'])
                // console.log(data, '!!!!!')
                // else setErrors([res]);

            }
            );
    }
    // console.log({ idxx, review, stars })
    return (
        <form onSubmit={handleSubmit} className='editspotform' >
            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={error + idx}>{error}</li>
                ))}
            </ul>
            <p> Create a Review!</p>
            <label>
                <input
                    type="text"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder='Review'
                    required
                />
            </label>
            <label>
                <input
                    type="number"
                    value={stars}
                    onChange={(e) => setStars(+e.target.value)}
                    placeholder='Stars'
                    min={0}
                    max={5}
                    required
                />
            </label>
            <span>
                <button type="submit" className="deletebutt">Update</button>
            </span>
        </form>
    );
}

export default CreateReviewForm;
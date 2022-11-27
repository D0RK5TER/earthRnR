import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getAllReviews, createReview } from '../../store/reviews';
import './CreateReviewForm.css'


function CreateReviewForm({ id }) {
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(0);
    const [errors, setErrors] = useState([]);
    // console.log(id)
    id = +id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        //console.log({ idxx, review, stars })
        //  console.log(id)
        return await dispatch(createReview({ id, review, stars }))
            .catch(async (res) => {
                // console.log(res, '&&&&&&&&&')

                if (res.ok) {

                    const data = await res.json()
                    if (data.message) setErrors([data.message])
                    // dispatch(getAllReviews(id))
                }
                else setErrors(['something went wrong please try again! or maybe try the correct info!'])
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
                    <li className='errors' key={idx}>{error}</li>
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
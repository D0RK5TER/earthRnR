import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from 'react-router-dom';
import { createReview } from '../../store/reviews2';
// import { getOneSpot } from '../../store/spots2'
import './CreateReviewForm.css'
import { useModal } from '../../context/Modal';

// import * as reviewsAction from '../../store/reviews';


function CreateReviewFormModal({ id }) {
    const { closeModal } = useModal();

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
            .then(closeModal)
            .catch(async (res) => {
                if (res.ok) {
                    const data = await res.json()
                    if (data.message) setErrors([data.message])
                    // dispatch(getAllReviews(id))
                }
                // else setErrors(['something went wrong please try again!'])
                // console.log(data, '!!!!!')
                // else setErrors([res]);
            }
            )
        // .then(setShowModal(false))
    }

    // console.log({ idxx, review, stars })
    return (
        <form onSubmit={handleSubmit} id='createreviewform' >
            <div id='createheader3'>

                <div id='createexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id="signupmainheader">Rate Your Stay!</div>

            </div>
            <div id='ratestay'>
                <label>
                    <div id='ratingdesc'>
                        Out of five, how would you rate your stay?
                    </div>
                    <div id='spreadreview'>
                        <input
                            type="range"
                            value={stars}
                            onChange={(e) => setStars(+e.target.value)}
                            placeholder='Stars'
                            min={0}
                            max={5}
                            required
                        />
                        <p>

                            {stars}/5
                        </p>
                    </div>
                </label>

            </div>
            <div id='reviewtext'>

                <label id='reviewtextlabel'>
                    Please describe your stay
                    <textarea id='reviewtextinput'
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='100 Character Max'
                        title="Review must be between 20 and 200"
                        minLength={20}
                        maxLength={100}
                        required
                    />
                </label>
            </div>
            <ul id='errorscreaterev'>
                {errors.map((error, idx) => (
                    <li className='errors' key={error + idx}>{error}</li>
                ))}
            </ul>
            <div>
                <button type="submit" id='createrevbutton'>Submit</button>
            </div>
        </form>
    );

}

export default CreateReviewFormModal;
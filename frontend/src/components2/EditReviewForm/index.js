import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeChangeReview } from '../../store/reviews2';
// import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
// import { createReview } from '../../store/reviews2';
// import { getOneSpot } from '../../store/spots2'
// import './CreateReviewForm.css'
import { useModal } from '../../context/Modal';
import './editreview.css'
// import '../CreateReviewModal/CreateReviewForm.css'
// import * as reviewsAction from '../../store/reviews';


function EditReviewForm(id) {

    const { closeModal } = useModal();
    const rev = useSelector(state => state.reviews.myreviews[id.id])
    const dispatch = useDispatch();
    const [review, setReview] = useState(rev.review)
    const [stars, setStars] = useState(rev.stars);
    const [errors, setErrors] = useState([]);
    // console.log(id)
    id = id.id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        let reviewz = { id, review, stars }
        // console.log(reviewz)
        return dispatch(makeChangeReview(reviewz))
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
            <div id='editreviewcont'>
                <div id='createexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id="signupmainheader">Update your Review</div>
            </div>

            <div id='ratestay'>
                <label>
                    <div id='ratingdesc'>
                        Anything Change?
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
                    Please tell us what changed
                    <textarea id='reviewtextinput'
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder='100 Character Max'
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

export default EditReviewForm;
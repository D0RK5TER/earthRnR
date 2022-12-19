import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from '../../store/reviews';
import './CreateReviewForm.css'
import { useModal } from '../../context/Modal';


function CreateReviewFormModal({ id }) {
    const { closeModal } = useModal();
    const spot = useSelector(state => state.spots.onespot)
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(0);
    const [errors, setErrors] = useState([]);
    id = +id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        let reviewz = { id, review, stars }

        return dispatch(createReview(reviewz))
            .then(closeModal)
            .catch(async (res) => {
                if (res.ok) {
                    const data = await res.json()
                    if (data.message) setErrors([data.message])
                }
            }
            )
    }

    return (
        <form onSubmit={handleSubmit} id='createreviewform' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Create a Review!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
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
            {/* <ul id='errorscreaterev'>
                {errors.map((error, idx) => (
                    <li className='errors' key={error + idx}>{error}</li>
                ))}
            </ul> */}
            <div>
                <button type="submit" id='createrevbutton'>Submit</button>
            </div>
        </form>
    );

}

export default CreateReviewFormModal;
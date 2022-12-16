import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeChangeReview } from '../../store/reviews';
import { useModal } from '../../context/Modal';
import './editreview.css'


function EditReviewForm({ id, review }) {

    const { closeModal } = useModal();
    // onespot ?   :
    let spot = useSelector(state => state.spots.onespot)
    const dispatch = useDispatch();
    const [reviewedit, setReviewedit] = useState(review.review)
    const [stars, setStars] = useState(review.stars);
    const [errors, setErrors] = useState([]);
    // console.log(id)
    // id = id.id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        let reviewz = { id, review }
        reviewz.review.stars = stars
        reviewz.review.review = reviewedit
        return dispatch(makeChangeReview(reviewz))
            .then(closeModal)
            .catch(async (res) => {
                if (res.ok) {
                    const data = await res.json()
                    if (data.message) setErrors([data.message])

                }
            })
        // .then(setShowModal(false))
    }
    // console.log({ idxx, review, stars })
    return (

        <form onSubmit={handleSubmit} id='createreviewform' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Edit Your Review!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
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
                        value={reviewedit}
                        onChange={(e) => setReviewedit(e.target.value)}
                        placeholder='100 Character Max'
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

export default EditReviewForm;
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
    const [cleanliness, setCleanliness] = useState(0)
    const [communication, setCommunication] = useState(0);
    const [location, setLocation] = useState(0)
    const [checkin, setCheckin] = useState(0)
    const [value, setValue] = useState(0)
    const [accuracy, setAccuracy] = useState(0)

    const [errors, setErrors] = useState([]);
    id = +id

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);
        let reviewz =
        {
            id, review, stars, cleanliness, communication,
            location, checkin, value, accuracy
        }
        
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
                        Out of five, how would you these catagories?
                    </div>
                    <div id='spreadreview'>
                        <div id='reviewtopc'>
                            Cleanliness: {cleanliness}
                            <input
                                type="range"
                                value={cleanliness}
                                onChange={(e) => setCleanliness(+e.target.value)}
                                placeholder='Cleanliness'
                                min={0}
                                max={5}

                                required
                            />
                        </div>
                        <div>
                            Communication: {communication}
                            <input
                                type="range"
                                // defaultValue={}
                                value={communication}
                                onChange={(e) => setCommunication(+e.target.value)}
                                placeholder='Communication'
                                min={0}
                                max={5}
                                required
                            />
                        </div>
                        <div>
                            Location: {location}
                            <input
                                type="range"
                                value={location}
                                onChange={(e) => setLocation(+e.target.value)}
                                placeholder='Location'
                                min={0}
                                max={5}
                                required
                            />
                        </div>
                    </div>
                    <div id='spreadreview'>
                        <div>
                            Check-In: {checkin}
                            <input
                                type="range"
                                value={checkin}
                                onChange={(e) => setCheckin(+e.target.value)}
                                placeholder='Checkin'
                                min={0}
                                max={5}
                                required
                            />
                        </div>
                        <div>
                            Value: {value}
                            <input
                                type="range"
                                value={value}
                                onChange={(e) => setValue(+e.target.value)}
                                placeholder='Value'
                                min={0}
                                max={5}
                                required
                            />
                        </div>
                        <div>
                            Accuracy: {accuracy}
                            <input
                                type="range"
                                value={accuracy}
                                onChange={(e) => setAccuracy(+e.target.value)}
                                placeholder='Accuracy'
                                min={0}
                                max={5}
                                required
                            />
                        </div>
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
                        placeholder='200 Character Max'
                        title="Review must be between 20 and 200"
                        minLength={20}
                        maxLength={200}
                        required
                    />

                    <div id="reviewtotal">
                        Overall Score: {stars}/5
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
                        </div>
                    </div>
                </label>
            </div>
            
                <button type="submit" id='createblock'>Submit</button>
            
        </form>
    );

}

export default CreateReviewFormModal;
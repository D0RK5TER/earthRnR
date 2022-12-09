import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import './DeleteReviewForm.css'
import quest from '../../assets/quest.jpg';

function ReviewImagesIndex({ setShowModal, imgs, idx }) {
    // const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    // const history = useHistory()

    const handleSubmit = (e) => {
        // let obj
        e.preventDefault()
        setErrors([]);
        console.log(idx)
        console.log(imgs)
        // .then(setShowModal(false))

                //IMAGES COMING SOON!!

                
        // history.location.pathname !== '/current' ?
        //     obj = { id, spotId } : obj = { id, spotId, place: true }
        // return dispatch(makeReviewImages(obj))
        //     .then(setShowModal(false))
        //     .catch(async (res) => {
        //         const data = await res.json()
        //         if (data.message) setErrors([data.message]);
        //     })
    }
    return imgs.map(img => (
        <div id='reviewimagesindex' >
            <form onSubmit={handleSubmit} id='deletespotform' >
                <img src={img.url} className='revimgtag' alt={quest}/>
                <ul id='deleteerror'>
                    {errors.map((error, idx) => (
                        <li className='errors' key={error + idx}>{error}</li>))}
                </ul>
                <span>
                    <button type="submit" id="deletereviewimgage">Delete</button>
                </span>
            </form>
        </div>
    ))
}

export default ReviewImagesIndex;
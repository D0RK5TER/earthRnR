
import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useParams } from 'react-router-dom';
import quest from '../../assets/quest.jpg';
import { useModal } from '../../context/Modal';
// import { useHistory } from "react-router-dom";


// import './DeleteReviewForm.css'
// import quest from '../../assets/quest.jpg';

function ReviewImagesIndex({ ReviewImages, idx }) {
    // const dispatch = useDispatch();
    // const { closeModal } = useModal()
    const {closeModal} = useModal()
    // console.log(ReviewImages)
    // console.log(idx)
    const [errors, setErrors] = useState([]);
    // const history = useHistory()
    const imgs = ReviewImages
    const handleSubmit = (e) => {
        // let obj
        e.preventDefault()
        setErrors([]);
        // closeModal()
        // console.log(idx)
        // console.log(imgs)
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
    // return
    return imgs.map(img => (
        <div id='reviewimagesindex' >
            <form onSubmit={handleSubmit} id='deletespotform' >
                <img src={img.url} className='revimgtag' alt={quest}/>
                <ul id='deleteerror'>
                    {errors.map((error, idx) => (
                        <li className='errors' key={error + idx}>{error}</li>))}
                </ul>
                <span>
                </span>
                {/* <button type='submit'></button> */}
            </form>
                    <button type="button" id="deletereviewimgage"
                    onClick={()=>closeModal()}
                    >Return</button>
        </div>
    ))
}

export default ReviewImagesIndex;
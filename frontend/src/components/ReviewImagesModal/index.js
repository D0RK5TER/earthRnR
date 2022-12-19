
import React, { useState } from 'react';
import quest from '../../assets/quest.png';
import { useModal } from '../../context/Modal';
import './reviewimages.css'

function ReviewImagesIndex({ ReviewImages, idx }) {
    // const dispatch = useDispatch();
    // const { closeModal } = useModal()
    const { closeModal } = useModal()
    // const [errors, setErrors] = useState([]);
    const imgs = ReviewImages
    if (!imgs.length) return (
        <div id='reviewimagesindex' >
            <h1>No Images</h1>
        </div>
    )
    // const handleSubmit = (e) => {
        // let obj
        // e.preventDefault()
        // setErrors([]);
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
    // }
    // return
    return (
        <div id='reviewimgcont'>
            <div id='reviewimagesindex' >
                {imgs.map(img => (
                    <div id='onereviewimage'>
                        <img id='oneimg' src={img.url} norepeat className='revimgtag' alt={quest} />
                    </div >

                ))}
            </div>

            <button
                id="exitreviewimages"
                type="button"
                onClick={() => closeModal()}
            >Return</button>
        </div>
    )
}

export default ReviewImagesIndex;
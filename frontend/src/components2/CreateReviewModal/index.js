
import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';
import './CreateReviewForm.css'
// import * as reviewsAction from '../../store/reviews';


function CreateReviewFormModal({ id }) {
    const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch() 
       // const user = useSelector(state => state.session.user.id)
    // useEffect(() => {
    //     dispatch(reviewsAction.getAllReviews(id))
    // }, [reviewsAction])
    return (
        <>
            <button id='createreviewbutt' onClick={() => setShowModal(true)}>Create a Review!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>

                    <CreateReviewForm id={id} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateReviewFormModal;
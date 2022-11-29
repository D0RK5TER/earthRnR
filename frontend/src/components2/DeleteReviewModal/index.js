
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewForm';
import './DeleteReviewForm.css'

function DeleteReviewFormModal({id, spotId}) {
    const [showModal, setShowModal] = useState(false);
    // const user = useSelector(state => state.session.user.id)
    // console.log(id)

    return (
        <>
            <button className='editspotbut' onClick={() => setShowModal(true)}>Delete a Review!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteReviewForm id={id} setShowModal={setShowModal} spotId={spotId} />
                </Modal>
            )}
        </>
    );
}

export default DeleteReviewFormModal;
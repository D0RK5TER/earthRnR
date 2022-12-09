
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewImagesIndex from './ReviewImagesIndex';
// import './PaginationForm.css'


function ReviewImagesModal({ idx, ReviewImages }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button className='reviewimgs' onClick={() => setShowModal(true)}>Photos</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewImagesIndex setShowModal={setShowModal} imgs={ReviewImages} idx={idx} />
                </Modal>
            )}
        </>
    );
}
export default ReviewImagesModal;
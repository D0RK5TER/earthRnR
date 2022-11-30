
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';
import './EditSpotForm.css'

function EditSpotFormModal(idx) {
    const [showModal, setShowModal] = useState(false);
    // const user = useSelector(state => state.session.user.id)
    return (
        <>
            <button className='editspotbut' onClick={() => setShowModal(true)}>Edit Spot!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm idx={idx} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditSpotFormModal;
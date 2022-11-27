
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';

function SpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Create a Spot! */}
            <button className='spotbut' onClick={() => setShowModal(true)} style={{ textAlign: 'left', width: '100%' }}>Create a Spot!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default SpotFormModal;
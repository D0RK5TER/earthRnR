
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';

function SpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Create a Spot! */}
            <button id='createspotbut'
                // style={{ maxWidth: '40vw' }}
                onClick={() => setShowModal(true)} >EarthRnR your home</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SpotFormModal;
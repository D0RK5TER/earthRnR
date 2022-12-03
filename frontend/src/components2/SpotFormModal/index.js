
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';

function SpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Create a Spot! */}
            <button id='createspotbut' onClick={() => setShowModal(true)} style={{
            }}>Airbnb your home</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SpotFormModal;
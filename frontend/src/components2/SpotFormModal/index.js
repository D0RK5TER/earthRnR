
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';

function SpotFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Create a Spot! */}
            <button className='createspotbut' onClick={() => setShowModal(true)} style={{
                textAlign: 'left', width: '10vw',
                height: '3.8em', fontFamily: 'Bold',
                fontSize: '.7em', paddingLeft: '1em',

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

import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotImageForm from './SpotImageForm';
import './SpotImage.css'

function SpotImageFormModal({idx, spotname}) {
    const [showModal, setShowModal] = useState(false);
    // const user = useSelector(state => state.session.user.id)
    return (
        <>
            <button id='spotimagebut' onClick={() => setShowModal(true)}>Add an Image to<br/> {spotname}!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SpotImageForm idx={idx} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SpotImageFormModal;
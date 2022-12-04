
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';
import '../Navigation/Navigation.css'

function SignUpFormModal({ place }) {
    const [showModal, setShowModal] = useState(false);
    let newD
    place === 'Sign Up to Host!' ? newD = 'signupmodalbut' : newD = 'signupdrop'

    return (
        <>
            <button id={newD} onClick={() => setShowModal(true)}>{place}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
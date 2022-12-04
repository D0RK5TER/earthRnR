import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


////is needed????
function LoginFormModal(/*{ setShowMenu } */) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='logindrop' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
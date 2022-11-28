import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


////is needed????
function LoginFormModal(/*{ setShowMenu } */) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} style={{ width: '100%' }}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
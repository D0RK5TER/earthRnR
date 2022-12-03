
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PaginationForm from './PaginationForm';
import './PaginationForm.css'

let setfunc

function PaginationFormModal({ id, spotId }) {
    const [showModal, setShowModal] = useState(false);
    setfunc = setShowModal
    // const user = useSelector(state => state.session.user.id)
    // console.log(id)

    return (
        <>
            <button className='topbarbut' onClick={() => setShowModal(true)}>Search Filters</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PaginationForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}
export { setfunc }
export default PaginationFormModal;
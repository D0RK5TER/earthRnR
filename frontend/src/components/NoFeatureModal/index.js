
import React from 'react';
import { useModal } from '../../context/Modal';


// import './DeleteReviewForm.css'
// import quest from '../../assets/quest.jpg';

function NoFeatureIndex() {
    const { closeModal } = useModal();

    return (
        <div id='deletespot' style={{cursor:'default'}} >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    {/* <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? `Are you sure?` : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div> */}
                    This feature will be coming soon!
                </div>
            </div>
            <div id='delrevwrap'>
                <button style={{cursor:'pointer'}} type="button" id='createblock' onClick={() => closeModal()}>Close</button>
            </div>

        </div>
    )
}

export default NoFeatureIndex;
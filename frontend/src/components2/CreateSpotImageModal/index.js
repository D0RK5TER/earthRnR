
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../context/Modal';
import { createSpotImage } from '../../store/spots2';
import quest from '../../assets/quest.jpg';

// import SpotImageForm from './SpotImageForm';
import './SpotImage.css'


export default SpotImageForm;

function SpotImageForm({ idx, spot }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    let id = idx
    const onespots = useSelector(state => state.spots.onespot)
    const [preview, setPreview] = useState(false)
    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        let deleteId = onespots[id].SpotImages.filter(x => x.preview === true)[0].id
        e.preventDefault()
        setErrors([]);

        return dispatch(createSpotImage({ url, id, preview, deleteId }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res?.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }

    return onespots && (
        <form onSubmit={handleSubmit} id='spotimageform' >

            <div id='signupheader'>
                <div id='loginexitbutt' onClick={() => closeModal()}>
                    <div>x</div>
                </div>
                <div id='signupheadertext'>
                    <div id="signupmainheader">Add Photos to your Spot!</div>
                    <div id={!errors.length ? 'signupsubheader' : 'errorswap'}>{!errors.length ? `Welcome ${onespots[id]?.User?.firstName}!` : errors.map((error, idx) => <>{error}<br /></>)}</div>
                </div>
            </div>
            {/* <div id='createheadersub' className='spotimagehead'>
                <div id='createexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='createheadertext' className='spotimagesubhead'>
                    <div id="createmainheader">Welcome</div>
                    <div id='createsubheader'>Add Photos to your Spot!</div>
                </div>
            </div> */}

            {/* <ul id='errorsimage'>
                {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
            </ul> */}
            <div id='createpreviewcont'>
                <div id='previmgwrap1'>
                    Current Preview Image
                    <img src={spot} alt='previmgimg' id='currprev' />
                </div>
                <div id='previmgwrap2'>
                    <div id='setprevheader'>
                        Set as your Preview:  <p className={preview.toString() + '1'}> {preview ? '  Yes!' : '  No!'}</p>
                    </div>
                    <img src={url.length ? `${url}` : quest} alt='sampimg' id='currnew' />
                </div>
            </div>

            <div id='createimagebutts'>
                <input
                    id='seturlbutt'
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder='https://......'
                    title='Must be a valid url'
                    required
                />
                <button id='setprevbut' type='button'
                    className={preview.toString() + '2'}
                    onClick={() => !preview ? setPreview(!preview)
                        || alert('Creating a new Preview Image will delete your old one!')
                        : setPreview(!preview)}>
                    Set to Preview?
                </button>
            </div>
            <div id='spotimagesub'>
                <button type="submit" id='spotimagebut2'>Add as {preview ? 'Preview Image' : 'Spot Image'}</button>
            </div>
        </form>
    )
        ;
}

// export default SpotImageForm;
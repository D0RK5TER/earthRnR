
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../context/Modal';
import { createSpotImage } from '../../store/spots';
import quest from '../../assets/quest.png';

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
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? `Welcome ${onespots[id]?.User?.firstName}!` : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>

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
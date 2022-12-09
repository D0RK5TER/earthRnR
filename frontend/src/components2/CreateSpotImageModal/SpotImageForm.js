import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { createSpotImage } from '../../store/spots2';
import './SpotImage.css'
// import { changeSpot } from '../../store/logged';



function SpotImageForm({ idx, setShowModal }) {
    const dispatch = useDispatch();
    // const spot = useSelector(state => state.logged.spots).filter(x => x.id === props.idx)
    // console.log(spot, '!kjdsfkjsndfdsfs')
    let id = idx.idx

    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        return dispatch(createSpotImage({ url, id }))
            .then(setShowModal(false))
            // .then(() => { history.push(`/spots`) })    
            .catch(async (res) => {
                const data = await res?.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }

    return (
        <form onSubmit={handleSubmit} id='spotimageform' >
            <div id='spotimageheader1'>
                <div id='spotimageexitbutt1' onClick={() => setShowModal(false)}>
                    x
                </div>
                <div id='spotimageheader'>
                    Add Photos to Your Home!
                </div>
            </div>
            <div id='urltextheader'>

                URL of the photo
            </div>
            <div id='spotimageformcont1'>
                <label className="signuplabel">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder='https://......'
                        title='Must be a valid url'
                        required
                    />
                </label>
                <ul id='errorsimage'>
                    {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
                </ul>
            </div>
            <button type="submit" id='spotimagebut2'>Add Image</button>
        </form>
    );
}

export default SpotImageForm;
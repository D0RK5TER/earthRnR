
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useModal } from '../../context/Modal';
import { createSpotImage } from '../../store/spots2';

// import SpotImageForm from './SpotImageForm';
import './SpotImage.css'

// function SpotImageFormModal({idx, spotname}) {
//     const [showModal, setShowModal] = useState(false);
//     // const user = useSelector(state => state.session.user.id)
//     return (
//         <>
//             <button id='spotimagebut' onClick={() => setShowModal(true)}>Add an Image to<br/> {spotname}!</button>
//             {showModal && (
//                 <Modal onClose={() => setShowModal(false)}>
//                     <SpotImageForm idx={idx} setShowModal={setShowModal} />
//                 </Modal>
//             )}
//         </>
//     );
// }

export default SpotImageForm;

function SpotImageForm({ idx }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    // const spot = useSelector(state => state.logged.spots).filter(x => x.id === props.idx)
    // console.log(spot, '!kjdsfkjsndfdsfs')
    let id = idx

    const [url, setUrl] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        return dispatch(createSpotImage({ url, id }))
            .then(closeModal)
            // .then(() => { history.push(`/spots`) })    
            .catch(async (res) => {
                const data = await res?.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }

    // return (
    //     <div id='spotimageheader1'>
    //             <div id='spotimageexitbutt1' onClick={() => closeModal()}>
    //                 x
    //             </div>
    //             <div id='spotimageheader'>
    //                 Add Photos to Your Home!
    //             </div>
    //             <div id='urltextheader'>

    //                 URL of the photo
    //             </div>
    //         <form onSubmit={handleSubmit} id='spotimageform' >
    //             <div id='spotimageformcont1'>
    //                 <label className="signuplabel">
    //                     <input
    //                         type="url"
    //                         value={url}
    //                         onChange={(e) => setUrl(e.target.value)}
    //                         placeholder='https://......'
    //                         title='Must be a valid url'
    //                         required
    //                     />
    //                 </label>
    //                 <ul id='errorsimage'>
    //                     {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
    //                 </ul>
    //             </div>
    //             <button type="submit" id='spotimagebut2'>Add Image</button>
    //         </form>
    //     </div>
    // );
    return (
        <form onSubmit={handleSubmit} id='spotimageform' >
            <div id='spotimageheader1'>
                <div id='spotimageexitbutt1' onClick={() => closeModal()}>
                    x
                </div>
                <div id='spotimageheader'>
                    Add Photos to Your Home!
                </div>
            </div>
            <div id='urltextheader1'>

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

// export default SpotImageForm;
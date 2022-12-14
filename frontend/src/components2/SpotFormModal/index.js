
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Modal } from '../../context/Modal';
// import SpotForm from './SpotForm';
import { useModal } from '../../context/Modal';
// import { makeChangeSpot, makeDeleteSpot } from '../../store/spots2';
import { createSpot } from '../../store/spots2';
import quest from '../../assets/quest.jpg';

// function SpotFormModal() {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <>
//             {/* Create a Spot! */}
//             <button id='createspotbut'
//                 // style={{ maxWidth: '40vw' }}
//                 onClick={() => setShowModal(true)} >EarthRnR your home</button>
//             {showModal && (
//                 <Modal onClose={() => setShowModal(false)}>
//                     <SpotForm setShowModal={setShowModal} />
//                 </Modal>
//             )}
//         </>
//     );
// }
import './SpotForm.css'
function SpotForm({ setShowModal }) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory()
    const { closeModal } = useModal();
    const [apt, setApt] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("");
    const [state, setStats] = useState("");
    const [country, setCountry] = useState("");
    const [latt, setLatt] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let add = address
        if (apt.length > 0) add += apt
        //for apt might not work
        return dispatch(createSpot({
            address: add, city, state, country,
            name, description, price, latt
        }))
            .then(async (res) => {
                if (!res[1].ok) {
                    const data = await res[1].json()
                    if (data.message) setErrors([data.message]);
                }
                else {
                    closeModal() || history.push(`/${res[0]}`)
                }
            }).catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }

    return user && (
        <form onSubmit={handleSubmit} id='createspotform' >
            <div id='createheader'>
                <div id='createheadersub'>
                    <div id='createexitbutt' onClick={() => closeModal()}>
                        x
                    </div>
                    <div id='createheadertext'>
                        <div id="createmainheader">Welcome {user.firstName}!</div>
                        <div id='createsubheader'> EarthRnR your home</div>
                    </div>
                </div>
            </div>
            <ul>
                {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
            </ul>
            <div id='createformcont'>
                <div id='nameblock'>
                    Spot Name
                    <input
                        id='nameblockinput'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='A descriptive name for your spot!'
                        required
                    />
                </div>
                <p id='addressheader'>Address</p>
                <div id='addressblock'>
                    <div id='addressblocktop'>
                        <input
                            id='blockaddress'
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Street Address'
                            pattern='^[0-9]+\s{1}.+'
                            title="Address must be in correct format e.g. '11 California St.'"
                            required
                        />
                        <input
                            id='blockapt'
                            type="text"
                            value={apt}
                            onChange={(e) => setApt(e.target.value)}
                            placeholder='Apt' />
                    </div>
                    <div id='addressblockbottom'>
                        <input
                            id='blockcity'

                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                            required
                        />

                        <input
                            id='blockstate'
                            type="text"
                            value={state}
                            onChange={(e) => setStats(e.target.value)}
                            placeholder='State'
                            minLength='2'
                            maxLength='2'
                            pattern='^[A-Z]{2}$'
                            title="Two Capital Letters Please"
                            required
                        />

                        <input
                            id='blockcountry'
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder='Country'
                            required
                        />

                    </div>
                </div>
                <div id='descriptionpriceblock'>
                    <div id='descriptionblock'>

                        <div id='despricecontleft'>
                            Description
                            <textarea
                                id='descblock'
                                type={"textarea"}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='A description of your Spot'
                                maxLength={'255'}
                                minLength={'30'}
                                required
                            />
                        </div>
                        <div className="creatediv">
                            Preview Image URL
                            <input
                                id='urlblock'
                                type="url"
                                value={latt}
                                onChange={(e) => setLatt(e.target.value)}
                                placeholder='Add an Image to your Spot!'
                                required
                            />
                        </div>
                    </div>
                    <div id='priceblock'>
                        <div id='pricetop'>
                            Price
                            <input
                                id='priceinputblock'
                                type="integer"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='$<10,000'
                                max={10000}
                                min={20}
                                title='Must be between 20 and 10,000'
                                required
                            />
                        </div>
                        <div id='createspotimgcont'>
                            Image
                            <img src={latt.length ? `${latt}` : quest} alt='sampimg' id='createspotimg' />
                        </div>
                    </div>
                </div>
            </div>
            <div id='submitbuttcont'>
                <button type="submit" id='createsubmitbutton'>Create</button>
            </div>
        </form >
    );
}

export default SpotForm;
// export default SpotFormModal;
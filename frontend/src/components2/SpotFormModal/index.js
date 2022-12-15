
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from '../../context/Modal';
// import { makeChangeSpot, makeDeleteSpot } from '../../store/spots2';
import { createSpot } from '../../store/spots2';
import quest from '../../assets/quest.jpg';

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
                    closeModal() || history.push(`/spot/${res[0]}`)
                }
            }).catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
    }

    return user && (
        <form onSubmit={handleSubmit} id='createspotform' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'EarthRnR your Home!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div id='createformcont'>
                <div id='addressblocktop'>
                    <div className='createspotsmall'>
                        Name of Spot
                        <input
                            id='nameblockinput'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='A Unique Name'
                            required />
                    </div>
                    <div className='createspotsmall'>
                        Price
                        <input
                            id='priceinputblock'
                            type="integer"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder='$'
                            max={10000}
                            min={20}
                            title='Must be between 20 and 10,000'
                            required />
                    </div>
                </div>
                Address
                <div id='addressblock' className='createspotsmall'>
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



                <div className='createspotbig' >
                    <div id='desccont'>
                        <div id='deslck'>
                            Description
                            <textarea
                                id='descblock'
                                type={"textarea"}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='...'
                                maxLength={'255'}
                                minLength={'30'}
                                required
                            />
                        </div>
                        <div id='urllock'>
                            Image
                            <img src={latt.length ? `${latt}` : quest} alt='sampimg' id='createspotimg' />


                            {/* <input
                                id='urlblock'
                                type="url"
                                value={latt}
                                onChange={(e) => setLatt(e.target.value)}
                                placeholder='Image URL'
                                required
                            /> */}

                        </div>
                    </div>

                </div>
                <div>

                    <input
                        id='urlblock'
                        type="url"
                        value={latt}
                        onChange={(e) => setLatt(e.target.value)}
                        placeholder='Image URL'
                        required
                    />
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
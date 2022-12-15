
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
        <form onSubmit={handleSubmit} className='reuseform' >
            <div id='reuseheader' className='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'EarthRnR your Home!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div className='reuseform reuseformbody'>
                {/* Name of Spot
                Price */}
                <div className='inputblockrow inputblockrowtitle'>
                    <div className='inputblockrowtitle inputrowtitlecont inputrowtitlecontwords  two'>
                        <div className='inputblockrowtitle inputrowtitlecont'>
                            Name of Spot
                        </div>
                        <div className='inputblockrowtitle inputrowtitlecont'>
                            Price
                        </div>
                    </div>
                    <div className='inputblockrow'>
                        <input
                            className='inputblockrow inputblockrowleft'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='A Unique Name'
                            required />

                        <input
                            className='inputblockrow inputblockrowright'
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
                <div className='inputblockrowtitle inputrowtitlecont one '>
                    <div className='inputblockrowtitle inputrowtitlecont inputrowtitlecontwords  one'>
                        Full Address
                    </div>
                    <div className='inputblockcol'>
                        <div className='inputblockcol inputblockcoltop'>
                            <input
                                className='inputblockcol inputblockcoltop inputaddress'
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Street Address'
                                pattern='^[0-9]+\s{1}.+'
                                title="Address must be in correct format e.g. '11 California St.'"
                                required
                            />
                            <input
                                className='inputblockcol inputblockcoltop inputapt'
                                type="text"
                                value={apt}
                                onChange={(e) => setApt(e.target.value)}
                                placeholder='Apt' />
                        </div>
                        <div className='inputblockcol inputblockcolbottom'>
                            <input
                                className='inputblockcol inputblockcolbottom inputcity'
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder='City'
                                required
                            />
                            <input
                                className='inputblockcol inputblockcolbottom inputstate'
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
                                className='inputblockcol inputblockcolbottom inputcountry'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder='Cntry'
                                required
                            />

                        </div>
                    </div>
                </div>
                <div className='inputsubmitsquare large' >

                    <div className='blockrow'>

                        <div className='blockrow blockcol'>
                            <div className='blockcol blockcoltop'>
                                <textarea
                                    className='inputtextarea large'
                                    type={"textarea"}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='...'
                                    maxLength={'255'}
                                    minLength={'30'}
                                    required
                                />
                            </div>
                            <div className='blockcol blockcolbottom'>
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


                        <div className='blockrow blockcol'>
                            <img

                                src={latt.length ? `${latt}` : quest}
                                alt='sampimg'
                                className='inputblockcol pic large'
                                style={{

                                    boxSizing: 'border-box',
                                    objectFit: 'fill'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='reuseformsubmitbutt'>
                <button type="submit" id='createsubmitbutton'>Create</button>
            </div>
        </form >
    );
}

export default SpotForm;
// export default SpotFormModal;

import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from '../../context/Modal';
import { createSpot } from '../../store/spots';
import quest from '../../assets/quest.png';

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
    const [type, setType] = useState("")
    const [bed, setBed] = useState(0)
    const [bath, setBath] = useState(0)



    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        let add = address
        if (apt.length > 0) add += apt
        //for apt *works*
        return dispatch(createSpot({
            address: add, city, state, country,
            name, description, price, latt, type
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
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Create a Spot!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div className='reuseform reuseformbody'>
                <div className='inputblockrowcont'>
                    <div className='inputblockcol1'>
                        Name of Spot
                        <input
                            className='inputblockrow'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='A Unique Name'
                            required />

                    </div>
                    <div className='inputblockcol1'>
                        Price
                        <input
                            className='inputblockrowsmall'
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
                    Full Address
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
                <div className='picturerow' >

                    <div className='picturecol'>
                        <p className='picturetitle'>
                            Description
                        </p>
                        <textarea
                            id='piccoldesc'
                            type={"textarea"}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='...'
                            maxLength={'255'}
                            minLength={'30'}
                            required
                        />
                        <div id='bednbath'>
                            <div>
                                Beds
                                <select className='ddinputs' name="cars"
                                    onChange={(e) => setBed(e.target.value)}>
                                    <option value="1">1 Bed</option>
                                    <option value="2">2 Beds</option>
                                    <option value="3">3 Beds</option>
                                    <option value="4">4 Beds</option>
                                    <option value="5">5 Beds</option>
                                </select>
                            </div>
                            <div>
                                Bath
                                <select className='ddinputs' name="cars"
                                    onChange={(e) => setBath(e.target.value)}
                                    >
                                    <option value="1">1 Bath</option>
                                    <option value="2">2 Baths</option>
                                    <option value="3">3 Baths</option>
                                    <option value="4">4 Baths</option>

                                </select>
                            </div>
                        </div>
                        <p>
                            Type Catagory
                        </p>
                        <select id='catagory' className='ddinputs' name="cars"
                            required
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="lake">
                                Lake</option>
                            <option value="rv">
                                RV
                            </option>
                            <option value="tree">
                                Tree
                            </option>
                            <option value="dirt">
                                EartHome</option>
                            <option value="mansion">
                                Mansion
                            </option>
                            <option value="country">
                                country
                            </option>
                            <option value="island">
                                island
                            </option>
                            <option value="piano">
                                piano
                            </option>
                            <option value="pools">
                                pools
                            </option>
                            <option value="games">
                                games
                            </option>
                            <option value="desert">
                                desert
                            </option>
                            <option value="contain">
                                contain
                            </option>
                            <option value="beach">
                                beach
                            </option>
                            <option value="windmill">
                                windmill
                            </option>
                            <option value="snow">
                                snow
                            </option>
                            <option value="creative">
                                art
                            </option>
                            <option value="iconic">
                                iconic
                            </option>
                            <option value="japan">
                                japan
                            </option>

                        </select>


                    </div>

                    <div className='picturecol'>
                        <p className='picturetitle'>
                            Image
                        </p>
                        <img
                            id='piccolimg'
                            src={latt.length ? `${latt}` : quest}
                            alt='sampimg'
                        />
                    </div>
                </div>


            </div>
            <div className='reuseformsubmitbutt'>
                <input
                    id='urlblock'
                    type="url"
                    value={latt}
                    onChange={(e) => setLatt(e.target.value)}
                    placeholder='Image URL'
                    required
                />
                <button type="submit" id='createblock'>Create</button>
            </div>
        </form >
    );
}

export default SpotForm;
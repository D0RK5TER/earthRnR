import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
import { makeChangeSpot, makeDeleteSpot } from '../../store/spots2';
// import { changeSpot } from '../../store/logged';
import '../SignUpFormModal/SignUpForm.css'


function EditSpotForm({ idx, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory()
    let user = useSelector(state => state.session.user)
    // const spot = useSelector(state => state.logged.spots).filter(x => x.id === props.idx)
    // console.log(spot, '!kjdsfkjsndfdsfs')
    let id = idx.idx
    let spot
    let spots = useSelector(state => state.spots.allspots)
    let myspots = useSelector(state => state.spots.myspots)
    history.location.pathname !== '/current' ?
        spot = spots[id] : spot = myspots[id]

    const [address, setAddress] = useState(spot.address)
    const [city, setCity] = useState(spot.city);
    const [state, setStats] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [name, setName] = useState(spot?.name);
    const [description, setDescription] = useState(spot?.description);
    const [price, setPrice] = useState(spot?.price);
    const [errors, setErrors] = useState([]);
    let obj
    let act
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        history.location.pathname !== '/current' ?
            obj = { id, address, city, state, country, name, description, price, place: false }
            : obj = { id, address, city, state, country, name, description, price, place: true }
        if (act) {
            return dispatch(makeDeleteSpot(obj))
                .then(setShowModal(false))    
                .catch(async (res) => {
                    const data = await res?.json()
                    if (data.message) setErrors([data.message]);
                }
                )
        }
        else {
            return dispatch(makeChangeSpot(obj))
                .then(setShowModal(false))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data.message) setErrors([data.message]);
                });
        }
    }
    return (
        <form onSubmit={handleSubmit} id='editspotform' >
            <div id='signupheader1'>
                <div id='signupexitbutt1' onClick={() => setShowModal(false)}>
                    x
                </div>
                <div id='signupheadertext1'>
                    <div id="signupmainheader1">Edit Your Home</div>
                    <div id='signupsubheader1'> Welcome {user?.firstName}</div>
                </div>
            </div>
            <div id='signupformcont1'>

                Address
                <label className="signuplabel">
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Address'
                        pattern='^[0-9]+\s{1}.+'
                        title="Address must be in correct format e.g. '11 California St.'"
                        required
                    />
                </label>
                City
                <label className="signuplabel">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                        required
                    />
                </label>
                State
                <label className="signuplabel">
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setStats(e.target.value)}
                        placeholder='State   e.g "CA"'
                        minLength='2'
                        maxLength='2'
                        pattern='^[A-Z]{2}$'
                        title="Two Capital Letters Please"
                        required
                    />
                </label>
                Country
                <label className="signuplabel">
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        required
                    />
                </label>
                Name
                <label className="signuplabel">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                </label>
                Description
                <label className="signuplabel">
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description'
                        maxLength='45'
                        required
                    />
                </label>
                Price
                <label className="signuplabel">
                    <input
                        type="integer"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        max={10000}
                        min={20}
                        title='Must be between 20 and 10,000'
                        required
                    />
                </label>
                <ul id='errorscreaterev'>
                {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
            </ul>
            </div>
            <button type="submit" onMouseOver={() => act = false} id='createsubmitbutton'>Update</button>
            <button type='submit' onMouseOver={() => act = true} id='deletesubmitbutton' >DELETE</button>
        </form>
    );
}

export default EditSpotForm;
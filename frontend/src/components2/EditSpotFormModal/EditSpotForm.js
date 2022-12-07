import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
import { makeChangeSpot, makeDeleteSpot } from '../../store/spots2';
// import { changeSpot } from '../../store/logged';
import './EditSpotForm.css'


function EditSpotForm({ idx, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory()
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
                // .then(() => { history.push(`/spots`) })    
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
        <form onSubmit={handleSubmit} className='editspotform' >
            <ul>
                {errors.map((error, idx) => <li key={error + idx}>{error}</li>)}
            </ul>
            <p>Make Changes to Your Spots</p>
            <label>
                <input
                    type="text"
                    value={address}
                    pattern='^[0-9]+\s{1}.+'
                    title="Address must be in correct format! e.g.'11 California'"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Address'
                    required
                />
            </label>
            <label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='City'
                    required
                />
            </label>
            <label >
                <input
                    type="text"
                    value={state}
                    pattern='^[A-Z]{2}$'
                    title="Please use valid state! e.g. 'CA' "
                    onChange={(e) => setStats(e.target.value)}
                    placeholder='State'
                    minLength='2'
                    maxLength='2'
                    required
                />
            </label>
            <label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='Country'
                    required
                />
            </label>
            <label >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                    required
                />
            </label>
            <label >
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    // maxLength='45'
                    required

                />
            </label>
            <label >
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='Price'
                    required

                />
            </label>
            <span className="deletebutt">
                {/* <Link to='/userSpots'> */}
                <button type='submit' onMouseOver={(e) => act = true} className="deletebutt theD" >DELETE</button>
                {/* </Link> */}
                <button type="submit" onMouseOver={(e) => act = false} className="deletebutt">Update</button>
            </span>


        </form>
    );
}

export default EditSpotForm;
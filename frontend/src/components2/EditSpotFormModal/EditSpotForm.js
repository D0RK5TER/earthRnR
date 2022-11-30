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
    let spots = useSelector(state => state.spots.allspots)
    let spot = spots[id]
    console.log(spot)
    const [address, setAddress] = useState(spot.address)
    const [city, setCity] = useState(spot.city);
    const [state, setStats] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [errors, setErrors] = useState([]);
    const handleDelete = (e) => {
        setErrors([]);
        // console.log(typeof e)
        //  dispatch(deleteSpot(id))
        // .then(() => { history.push('/spots') })
        // .catch(async (res) => {
        //     const data = await res.json()
        //     if (data.message) setErrors([data.message]);
        // }
        // )
    }
    let act
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        if (act) {
            return dispatch(makeDeleteSpot(id))
                .then(setShowModal(false))
                // .then(() => { history.push(`/spots`) })    
                .catch(async (res) => {
                    const data = await res?.json()
                    if (data.message) setErrors([data.message]);
                }
                )
        }
        else {
            return dispatch(makeChangeSpot({ id, address, city, state, country, name, description, price }))
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
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <p>Make Changes to Your Spots</p>
            <label>
                <input
                    type="text"
                    value={address}
                    pattern='^[0-9]+\s{1}.+'
                    title="Address must be in correct format e.g.'11 California'"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Address'
                />
            </label>
            <label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='City'
                />
            </label>
            <label >
                <input
                    type="text"
                    value={state}
                    pattern='^[A-Z]{2}$'
                    title="Two Capital Letters Please"
                    onChange={(e) => setStats(e.target.value)}
                    placeholder='State'
                    minLength='2'
                    maxLength='2'

                />
            </label>
            <label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='Country'
                />
            </label>
            <label >
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                />
            </label>
            <label >
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    maxLength='45'
                // required

                />
            </label>
            <label >
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder='Price'
                // required

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
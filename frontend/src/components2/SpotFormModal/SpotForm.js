import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createSpot } from '../../store/spots2';
// import { createImage } from "../../store/review";
import './SpotForm.css'
function SpotForm({ setShowModal }) {
    const user = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();
    const history = useHistory()
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

        // let url = latt
        e.preventDefault();
        setErrors([]);
        //console.log(setShowModal)
        return dispatch(createSpot({
            address, city, state, country,
            name, description, price, latt
        })).then(dispatch())
        .then(setShowModal(false))
        .catch(async (res) => {
            //console.log(res)
            const data = await res.json()
            if (data.message) setErrors([data.message]);
        }
        )
    }
        // .then(async (res) => {
        //     const newres = await res.json()
        //         (newres)
        //     // console.log(res)
        //     let newurl = res.url
        //     newurl = newurl.split('/api/spots/').pop()
        //     // console.log(newurl.slice(0, 2))
        //     // let newURL = res.url.slice(0, -7)
        //     history.push(`/spots/${newurl.slice(0, 2)}`)

        // })
        // .then(setShowModal(false))


        // .then(history.push('./spots/'))
        // console.log(ans)

    // }
    // return  await dispatch(createSpot({
    //     user, address, city, state, country,
    //     name, description, price
    // })).then(async (res) => {
    //     // const data = await res.json()
    //     console.log(res)
    //     if (!res.ok) {
    //         // const data = res.json()
    //         if (data.message) setErrors([data.message]);
    //     }
    //     // else {
    //     // console.log(data)
    // let id = await res.json().id
    // else dispatch(createImage(url, id))
    //     .catch(async (rest) => {

    //         console.log(rest)

    //     })
    // }

    //  dispatch(createImage({}))
    // else dispatch(createImage({ url: latt, id: res.id }))
    // })
    // return

    // .then(async (res) => {
    //     // const data = await res.json()
    //     console.log(res)


    // })
    // .then((res) => dispatch(createImage({ url: latt, id: res.id })))

    // }

    return (
        <form onSubmit={handleSubmit} className='spotform' >
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <p>Host Today!</p>
            <label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Address  e.g."11 California"'
                    pattern='^[0-9]+\s{1}.+'
                    title="Address must be in correct format e.g.'11 California'"
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
            <label>
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
                    maxLength='45'
                    required
                />
            </label>
            <label>
                <input
                    type="url"
                    value={latt}
                    onChange={(e) => setLatt(e.target.value)}
                    placeholder='Image Url'
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
            <button type="submit">Create</button>
        </form>
    );
}

export default SpotForm;
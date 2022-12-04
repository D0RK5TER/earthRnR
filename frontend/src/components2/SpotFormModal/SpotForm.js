import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createSpot } from '../../store/spots2';
// import { createImage } from "../../store/review";
import './SpotForm.css'
function SpotForm({ setShowModal }) {
    const user = useSelector(state => state.session.user)
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
        e.preventDefault();
        setErrors([]);

        return dispatch(createSpot({
            address, city, state, country,
            name, description, price, latt
        })).then(async (res) => {
            console.log(res)
            if (!res[1].ok) {
                const data = await res[1].json()
                if (data.message) setErrors([data.message]);
            }
            else {
                history.push(`/${res[0]}`)
            }
        }
        ).then(setShowModal(false))
    }
    return user && (
        <form onSubmit={handleSubmit} id='createspotform' >
            <div id='createheader'>
                <div id='createexitbutt' onClick={() => setShowModal(false)}>
                    x
                </div>
                <div id='createheadertext'>
                    <div id="createmainheader">Welcome {user.firstName}!</div>
                    <span id='createsubheader'> EarthRnR your home</span>
                </div>
            </div>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div id='createformcont'>

                <label className="createlabel">
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
                <label className="createlabel">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                        required
                    />
                </label>
                <label className="createlabel">
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
                <label className="createlabel">
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                        required
                    />
                </label>
                <label className="createlabel">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                </label>
                <label className="createlabel">
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Description'
                        maxLength='45'
                        required
                    />
                </label>
                <label className="createlabel">
                    <input
                        type="url"
                        value={latt}
                        onChange={(e) => setLatt(e.target.value)}
                        placeholder='Image Url'
                        required
                    />
                </label>
                <label className="createlabel">
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price'
                        required
                    />
                </label>
            </div>
            <button type="submit" id='createsubmitbutton'>Create</button>
        </form>
    );
}

export default SpotForm;
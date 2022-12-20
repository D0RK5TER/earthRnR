import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathURL } from "../../utilities/location";
import { getAllSpots } from '../../store/spots';
import './PaginationForm.css'
import { useModal } from '../../context/Modal';


function PaginationForm({ setShowModal }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const { closeModal, onModalClose } = useModal();
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(9999)
    const [lake, setLake] = useState(false)
    const [rv, setRv] = useState(false)
    const [tree, setTree] = useState(false)
    const [earth, setEarth] = useState(false)
    const [mansion, setMansion] = useState(false)
    const [country, setCountry] = useState(false)



    const [errors, setErrors] = useState([]);
    let pagination = ''
    let loc = pathURL(history)

    const pagidis = (e) => dispatch(getAllSpots(e))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json()
            if (data.message) setErrors([data.message]);
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);
        let type = '&type='

        pagination = `?minPrice=${min}&maxPrice=${max}`
        if (lake) type += `lake`
        if (rv) type += 'rv'
        if (tree) type += `tree`
        if (earth) type += 'earth'
        if (mansion) type += `mansion`
        if (country) type += 'country'

        if (type.length > 6) pagination += type
        if (loc !== '/') pagidis(pagination) && history.push('/')
        pagidis(pagination)
    }
    return (
        <form onSubmit={handleSubmit} id='paginationform'>
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Select a Price Range' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div id='mincont'>
                Minimum
                <label>
                    <input
                        className="pagiinput"
                        type="number"
                        placeholder="1"
                        value={+min}
                        min={1}
                        max={9999}
                        onChange={(e) => setMin(+e.target.value)}
                    />


                </label>
            </div>
            <div id='maxcont'>
                Maximum
                <label>
                    <input
                        className="pagiinput"
                        type="number"
                        placeholder='99999'
                        value={max}
                        min={+min + 1}
                        max={9999}
                        onChange={(e) => setMax(+e.target.value)}
                    />

                </label>
                lake
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={lake}
                    onChange={(e) => setLake(!lake)}
                />
                rv
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={rv}
                    onChange={(e) => setRv(!rv)}
                />
                tree
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={tree}
                    onChange={(e) => setTree(!tree)}
                />
                earth
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={earth}
                    onChange={(e) => setEarth(!earth)}
                />
                mansion
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={mansion}
                    onChange={(e) => setMansion(!mansion)}
                />
                country
                <input
                    className="pagiinput"
                    type="checkbox"
                    value={country}
                    onChange={(e) => setCountry(!country)}
                />
                {/* <button type="submit" >Search</button> */}
            </div>
            <button type="submit" id="signupbutton">Search</button>
            {/* <button type='reset'>Reset</button> */}

        </form>
    );
}

export default PaginationForm;
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

        // max < min ? setErrors(['maximum must be larger than minimum']) :
        //     max > 9999 || min > 9999 ? setErrors(['prices must be smaller than 99999']) :
        //         min === max ? setErrors(['maximum and minimum must not be equal']) :
        //             max < 1 || min < 1 ? setErrors(['prices must be 1 or larger']) :
        pagination = `?minPrice=${min}&maxPrice=${max}`
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
                {/* <button type="submit" >Search</button> */}
            </div>
            <button type="submit" id="signupbutton">Search</button>
            {/* <button type='reset'>Reset</button> */}

        </form>
    );
}

export default PaginationForm;
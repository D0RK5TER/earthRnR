import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathURL } from "../../utilities/location";
import { getAllSpots } from '../../store/spots2';
import './PaginationForm.css'
import { useModal } from '../../context/Modal';


function PaginationForm({ setShowModal }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(9999)
    const [errors, setErrors] = useState([]);
    let pagination = ''
    let loc = pathURL(history)



    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([]);

        max < min ? setErrors(['maximum must be larger than minimum']) :
            max > 9999 || min > 9999 ? setErrors(['prices must be smaller than 99999']) :
                min === max ? setErrors(['maximum and minimum must not be equal']) :
                    max < 1 || min < 1 ? setErrors(['prices must be 1 or larger']) :
                        pagination = `?minPrice=${min}&maxPrice=${max}`
        if (errors.length) return errors
        if (loc !== '/' || loc !== '') history.push('/')
        return dispatch(getAllSpots(pagination))
            .then(() => closeModal())
            .catch(async (res) => {
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            })
            // .then(() => history.push('/') || dispatch(getAllSpots(pagination)))
        //check for pagi error from ^, 1-1 should do it
    }

    return (
        <form onSubmit={handleSubmit} id='paginationform'>
            <h2>
                Price Range
            </h2>
            <div id='mincont'>
                Minimum
                <label>
                    <input
                        className="pagiinput"
                        type="number"
                        placeholder="1"
                        min={1}
                        max={9999}
                        onChange={(e) => setMin(e.target.value)}
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
                        min={1}
                        max={9999}
                        onChange={(e) => setMax(e.target.value)}
                    />

                </label>
                {/* <button type="submit" >Search</button> */}
            </div>
            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx + error.statusCode}>{error}</li>))}
            </ul>

            <button type="submit">Search</button>
            {/* <button type='reset'>Reset</button> */}

        </form>
    );
}

export default PaginationForm;
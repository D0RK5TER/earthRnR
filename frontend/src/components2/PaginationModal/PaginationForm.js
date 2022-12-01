import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { getAllSpots } from '../../store/spots2';
import './PaginationForm.css'


function PaginationForm({ setShowModal }) {
    const dispatch = useDispatch();
    let [min, setMin] = useState('30')
    let [max, setMax] = useState('500')
    const [errors, setErrors] = useState([]);
    let pagination


    const handleSubmit = (e) => {
        e.preventDefault()
        max < 500 && min > 30 ? pagination = `?minPrice=${min}&maxPrice=${max}` :
            min > 30 ? pagination = `?minPrice=${min}` :
                max < 500 ? pagination = `?maxPrice=${max}` :
                    pagination = ''
        setErrors([]);
        return dispatch(getAllSpots(pagination))
            // .then(() => {
            //     setShowModal(false)
            // })
            .catch(async (res) => {
                setShowModal(false)
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }
    return (
        <form onSubmit={handleSubmit} className='editspotform' >
            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>{error}</li>))}
            </ul>
            <p>Select your Filters</p>
            <span>
                <input type="range" name="price" min='0' max="500" onChange={(e) => setMin(e.target.value)} />Min Price: ${min}
            </span>
            <span>
                <input type="range" name="price" min='0' max='500' onChange={(e) => setMax(e.target.value)} />Max Price: ${max}
            </span>
            <span>
                <button type="submit" className="deletebutt">Search</button>
            </span>
        </form>
    );
}

export default PaginationForm;
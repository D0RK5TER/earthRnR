import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { getAllSpots } from '../../store/spots2';
import './PaginationForm.css'


function PaginationForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [min, setMin] = useState('30')
    const [max, setMax] = useState('500')
    const [tog, setTog] = useState(false)
    const [tog2, setTog2] = useState(true)
    const [tog3, setTog3] = useState(true)

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
            .then(() => {
                setShowModal(false)
            })
            .catch(async (res) => {
                setShowModal(false)
                const data = await res.json()
                if (data.message) setErrors([data.message]);
            }
            )
    }
    // useEffect(() => {
    //     setMax(min)
    // }, [setTog])
    return (
        <form onSubmit={handleSubmit} className='editspotform' >
            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>{error}</li>))}
            </ul>
            <p>Select your Filters</p>
            <span>
                <input type="range" name="price" min='0' max="500" onChange={(e) => setMin(e.target.value)} disabled={tog} style={{ 'accent-color': 'white' }} />
                <button type="button" className="deletebutt" disabled={tog} onClick={() => { setTog(true); setTog2(false); setMax((+min + 10).toString()) }} style={{ 'accent-color': 'white' }}>Set Min to ${min}</button>
            </span>
            <span>
                <input type="range" name="price" value={max} min='0' max='500' onChange={(e) => setMax(e.target.value)} disabled={tog2} style={{ 'accent-color': 'black' }} />
                <button type="button" className="deletebutt" disabled={tog2} onClick={() => { setTog2(true); setTog3(false) }}>Set Max to ${max}</button>
            </span>
            <span>
                <button type="submit" className="deletebutt" disabled={tog3}>Search</button>

            </span>
        </form>
    );
}

export default PaginationForm;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { getAllSpots } from '../../store/spots2';
import './PaginationForm.css'


function PaginationForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [dismin, setDismin] = useState(0);
    const [disma, setDisma] = useState(0);
    const [tog, setTog] = useState('none')
    const [tog2, setTog2] = useState('block')
    const [customWidth, setCustomWidth] = useState(50)
    const [errors, setErrors] = useState([]);
    const [mone, setMone] = useState('none');
    const [mtwo, setMtwo] = useState('none');
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
        <div id='paginationcont'>
            <h3>Select your Filters</h3>
            <h4>{min}----{max}</h4>
            <div style={{
                width: `50vw`, height: `1vw`,
                paddingLeft: `${min / 1000 * 95}vw`
                , display: 'flex', justifyContent: 'flex-start',
                border: '.1px solid black',
            }}>
                <h5
                    style={{ paddingLeft: `.21vw`, }}
                >{min}</h5>

                <div style={{
                    width: `50vw`, height: `1vw`,
                    paddingLeft: `${(max) / (max-min + 1000) * 95}vw`
                    , display: 'flex', justifyContent: 'flex-start',
                    border: '.1px solid black'
                }}>
                    <h5
                        style={{
                            // paddingLeft: min > max ? 0 : `${max / 1000 *95}vw`
                            // paddingLeft: `.21vw`,
                            // paddingLeft: max < 0 ? 0 : console.log((max - min) / 1000) || `${((max / 1000) * 100) * 50}vw`
                            // || console.log(((max * 100)*50))

                        }}
                    >{max}</h5>
                </div>
            </div>
            {/* <div style={{
                width: `50vw`,
                paddingLeft: `${max / 1000 * 95}vw`
                , display: 'flex', justifyContent: 'flex-start',
                border: '.1px solid black'
            }}>
                <h5
                    style={{ paddingLeft: `.21vw` }}
                >{max}</h5>
            </div> */}
            <form onSubmit={handleSubmit} id='paginationform' style={{ height: '80%' }}>
                <button type="submit" disabled={max}>Search</button>
                <div id='slidercont' style={{ width: `100vw`, justifyContent: 'center', display: 'inline-flex' }}>

                    <input type="range" min={0} max={50} defaultValue={0}
                        onMouseUp={(e) => setCustomWidth(50 - e.target.value) || setMin(((e.target.value * 2) / 100) * 1000)
                            || setTog('block') || setTog2('none') || setMone('block')}
                        onChange={(e) => setMin(((e.target.value * 2) / 100) * 1000)
                            // || console.log(min / 1000 + max)
                        }
                        style={{ display: tog2, width: `${customWidth}vw` }} />
                    <div style={{ display: mone, width: `${48 - customWidth}vw`, border: '1px solid white', height: '10px' }}>

                        <div type='button' id='minmark' style={{ display: mone, border: '.1px solid black' }}>

                        </div>
                    </div>
                    <input type="range" min={0} max={50} defaultValue={0}
                        style={{ display: tog, width: `${customWidth}vw`, }}
                        onMouseUp={(e) => {
                            setMax(((e.target.value * 2) / 100) * 1000 + min) ||
                                setTog2('none') || setTog('none') || setMone('none') || setMtwo('block')
                            // setCustomWidth(50)
                        }}
                        onChange={(e) => setMax(((e.target.value * 2) / 100) * 1000 + min)
                            // || console.log(min / 1000 + max)
                        } />

                    {/* <button type="submit" >Search</button> */}
                </div>
                {/* <div id='slidercont' style={{
                    width: `100%`, justifyContent: 'center',
                    
                    display: tog === 'none' && tog2 === 'none' ? 'flex' : 'none',
                }}>
                <button />
                <button />
            </div> */}
                <div style={{ width: `100vw`, justifyContent: 'center', display: 'inline-flex' }}>
                    <button type="submit">Search</button>
                    {/* <button type='reset'>Reset</button> */}
                </div>
            </form>

            <ul>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx + error.statusCode}>{error}</li>))}
            </ul>
        </div>
    );
}

export default PaginationForm;
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from 'react-router-dom';
// import { changeSpot, deleteSpot } from '../../store/logged';
// import './Form.css'


// function Form({ props }) {
//     const dispatch = useDispatch();
//     const history = useHistory()
//     const spot = useSelector(state => state.logged.spots).filter(x => x.id === props.idx)
//     // console.log(spot, '!kjdsfkjsndfdsfs')
//     const [review, setReview] = useState('')
//     const [stars, setStars] = useState(spot.city);
//     const [state, setStats] = useState(spot.state);
//     const [country, setCountry] = useState(spot.country);
//     const [lat, setLat] = useState(spot.lat);
//     const [lng, setLng] = useState(spot.lng);
//     const [name, setName] = useState(spot.name);
//     const [description, setDescription] = useState(spot.description);
//     const [price, setPrice] = useState(spot.price);
//     const [errors, setErrors] = useState([]);
//     // console.log(props.idx)

//     const handleSubmit = () => {
//         setErrors([]);
//         return dispatch(changeSpot({ id, address, city, state, country, lat, lng, name, description, price }))
//             .catch(async (res) => {
//                 const data = await res.json();
//                 //console.log(res)
//                 if (data && data.errors) return setErrors(data.errors);
//             })
//     }

//     const handleDelete = () => {
//         setErrors([]);
//         return dispatch(deleteSpot(id))
//             .catch(async (res) => {
//                 const data = await res.json();
//                 if (data && data.errors) return setErrors(data.errors);
//             })
//     }
//     return (
//         <form onSubmit={handleSubmit} className='editspotform' >
//             <ul>
//                 {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//             </ul>
//             <p>Make Changes to Your Spots</p>
//             <label>
//                 <input
//                     type="text"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder='Address'
//                 />
//             </label>
//             <label>
//                 <input
//                     type="text"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     placeholder='City'
//                 />
//             </label>
//             <label>
//                 <input
//                     type="text"
//                     value={state}
//                     onChange={(e) => setStats(e.target.value)}
//                     placeholder='State'
//                 />
//             </label>
//             <label>
//                 <input
//                     type="text"
//                     value={country}
//                     onChange={(e) => setCountry(e.target.value)}
//                     placeholder='Country'
//                 />
//             </label>
//             <label >
//                 <input
//                     type="number"
//                     value={lat}
//                     onChange={(e) => setLat(e.target.value)}
//                     placeholder='Latitude'
//                 />
//             </label>
//             <label >
//                 <input
//                     type="number"
//                     value={lng}
//                     onChange={(e) => setLng(e.target.value)}
//                     placeholder='Longitude'
//                 />
//             </label>
//             <label >
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder='Name'
//                 />
//             </label>
//             <label >
//                 <input
//                     type="text"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder='Description'
//                 />
//             </label>
//             <label >
//                 <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder='Price'
//                 />
//             </label>
//             <span className="deletebutt">
//                 <button onMouseDown={() => handleDelete()} className="deletebutt theD" >DELETE</button>
//                 <button type="submit" className="deletebutt">Update</button>
//             </span>


//         </form>
//     );
// }

// export default Form;
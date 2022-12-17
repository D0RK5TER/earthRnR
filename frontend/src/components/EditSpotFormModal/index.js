
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { useModal } from '../../context/Modal';
import { makeChangeSpot, makeDeleteSpot } from '../../store/spots';
// import { changeSpot } from '../../store/logged';
import '../SignUpForm/SignUpForm.css'


function EditSpot({ idx, setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory()
    let user = useSelector(state => state.session.user)
    // const spot = useSelector(state => state.logged.spots).filter(x => x.id === props.idx)
    // console.log(spot, '!kjdsfkjsndfdsfs')
    const { closeModal } = useModal();
    let id = idx
    let spot
    let spots = useSelector(state => state.spots.allspots)
    let myspots = useSelector(state => state.spots.myspots)
    history.location.pathname !== '/current' ?
        spot = spots[id] : spot = myspots[id]
    let addmark = spot?.address?.split('#')
    // console.log(spot.address)
    let v = addmark[1] ? addmark[1] : ''
    // console.log(v)
    const [address, setAddress] = useState(addmark[0])
    const [apt, setApt] = useState(addmark[1] ? addmark[1] : '')
    const [city, setCity] = useState(spot.city);
    const [state, setStats] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [name, setName] = useState(spot?.name);
    const [description, setDescription] = useState(spot?.description);
    const [price, setPrice] = useState(spot?.price);
    const [errors, setErrors] = useState([]);
    let obj
    let act
    let add = address
    const handleSubmit = async (e) => {
        // console.log('!!!!')
        e.preventDefault()
        setErrors([]);

        if (apt.length > 0) add = (`${address + '#' + apt}`)
        setErrors([]);
        history.location.pathname !== '/current' ?
            obj = { id, address: add, city, state, country, name, description, price, place: false }
            : obj = { id, address: add, city, state, country, name, description, price, place: true }

        if (act) {
            return dispatch(makeDeleteSpot(obj))
                .then(closeModal)
                .catch(async (res) => {
                    const data = await res?.json()
                    if (data.message) setErrors([data.message]);
                }
                )
        }
        else {
            return dispatch(makeChangeSpot(obj))
                .then(closeModal)
                .catch(async (res) => {
                    const data = await res.json()
                    if (data.message) setErrors([data.message]);
                });
        }
    }
    return (
        <form onSubmit={handleSubmit} className='reuseform' >
            <div id='reuseheader'>
                <div id="reusemain">Welcome to EarthRnR!</div>
                <div id='reuseexitbutt' onClick={() => closeModal()}>
                    x
                </div>
                <div id='reusesub'>
                    <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Edit Your Spot!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
                </div>
            </div>
            <div className='reuseform reuseformbody'>
                <div className='inputblockrowcont'>
                    <div className='inputblockcol1'>
                        Name of Spot
                        <input
                            className='inputblockrow'
                            // className='inputblockrow inputblockrowleft'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='A Unique Name'
                            required />

                    </div>
                    <div className='inputblockcol1'>
                        Price
                        <input
                            className='inputblockrowsmall'
                            type="integer"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder='$'
                            max={10000}
                            min={20}
                            title='Must be between 20 and 10,000'
                            required />
                    </div>
                </div>
                <div className='inputblockrowtitle inputrowtitlecont one '>
                    Full Address
                    <div className='inputblockcol'>
                        <div className='inputblockcol inputblockcoltop'>
                            <input
                                className='inputblockcol inputblockcoltop inputaddress'
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Street Address'
                                pattern='^[0-9]+\s{1}.+'
                                title="Address must be in correct format e.g. '11 California St.'"
                                required
                            />
                            <input
                                className='inputblockcol inputblockcoltop inputapt'
                                type="text"
                                value={apt}
                                onChange={(e) => setApt(e.target.value)}
                                placeholder='Apt' />
                        </div>
                        <div className='inputblockcol inputblockcolbottom'>
                            <input
                                className='inputblockcol inputblockcolbottom inputcity'
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder='City'
                                required
                            />
                            <input
                                className='inputblockcol inputblockcolbottom inputstate'
                                type="text"
                                value={state}
                                onChange={(e) => setStats(e.target.value)}
                                placeholder='State'
                                minLength='2'
                                maxLength='2'
                                pattern='^[A-Z]{2}$'
                                title="Two Capital Letters Please"
                                required
                            />

                            <input
                                className='inputblockcol inputblockcolbottom inputcountry'
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder='Cntry'
                                required
                            />

                        </div>
                    </div>
                </div>
                <div className='picturerow' >

                    <div className='picturecol'>
                        <p className='picturetitle'>
                            Description
                        </p>
                        <textarea
                            id='piccoldesc'
                            type={"textarea"}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='...'
                            maxLength={'255'}
                            minLength={'30'}
                            required
                        />


                    </div>

                    <div className='picturecol'>
                        <p className='picturetitle'>
                            Image
                        </p>
                        <img
                            id='piccolimg'
                            src={spot.previewImage}
                            alt='sampimg'
                        />
                    </div>
                </div>


            </div>
            <div className='reuseformsubmitbutt'>
                <button type="submit" id='createblock' onMouseOver={() => act = false} >Update</button>
                <button type='submit' id='createblock' onMouseOver={() => act = true} >DELETE</button>
                {/* <input
                id='urlblock'
                type="url"
                value={latt}
                onChange={(e) => setLatt(e.target.value)}
                placeholder='Image URL'
                required
            /> */}
                {/* <button type="submit" id='createblock'>Create</button> */}
            </div>
        </form >
        // <form onSubmit={handleSubmit} id='createspotform' >
        //     <div id='reuseheader'>
        //         <div id="reusemain">Welcome to EarthRnR!</div>
        //         <div id='reuseexitbutt' onClick={() => closeModal()}>
        //             x
        //         </div>
        //         <div id='reusesub'>
        //             <div id={!errors.length ? 'reusetitle' : 'errorswap'}>{!errors.length ? 'Edit Your Spot!' : errors.map((error, idx) => <div className="errmsg">{error}</div>)}</div>
        //         </div>
        //     </div>
        //     <div id='createformcont'>
        //         <div id='nameblock'>
        //             Spot Name
        //             <input
        //                 id='nameblockinput'
        //                 type="text"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //                 placeholder='A descriptive name for your spot!'
        //                 required
        //             />
        //         </div>
        //         <p id='addressheader'>Address</p>
        //         <div id='addressblock'>
        //             <div id='addressblocktop'>
        //                 <input
        //                     id='blockaddress'
        //                     type="text"
        //                     value={address}
        //                     onChange={(e) => setAddress(e.target.value)}
        //                     placeholder='Street Address'
        //                     pattern='^[0-9]+\s{1}.+'
        //                     title="Address must be in correct format e.g. '11 California St.'"
        //                     required
        //                 />
        //                 <input
        //                     id='blockapt'
        //                     type="text"
        //                     value={apt}
        //                     onChange={(e) => { console.log(address + apt); setApt(e.target.value) }}
        //                     placeholder='Apt' />
        //             </div>
        //             <div id='addressblockbottom'>
        //                 <input
        //                     id='blockcity'

        //                     type="text"
        //                     value={city}
        //                     onChange={(e) => setCity(e.target.value)}
        //                     placeholder='City'
        //                     required
        //                 />

        //                 <input
        //                     id='blockstate'
        //                     type="text"
        //                     value={state}
        //                     onChange={(e) => setStats(e.target.value)}
        //                     placeholder='State'
        //                     minLength='2'
        //                     maxLength='2'
        //                     pattern='^[A-Z]{2}$'
        //                     title="Two Capital Letters Please"
        //                     required
        //                 />

        //                 <input
        //                     id='blockcountry'
        //                     type="text"
        //                     value={country}
        //                     onChange={(e) => setCountry(e.target.value)}
        //                     placeholder='Country'
        //                     required
        //                 />

        //             </div>
        //         </div>
        //         <div id='descriptionpriceblock'>
        //             <div id='descriptionblock'>

        //                 <div id='despricecontleft'>
        //                     Description
        //                     <textarea
        //                         id='descblock'
        //                         type={"textarea"}
        //                         value={description}
        //                         onChange={(e) => setDescription(e.target.value)}
        //                         placeholder='A description of your Spot'
        //                         maxLength={'255'}
        //                         minLength={'30'}
        //                         required
        //                     />
        //                 </div>
        //                 <div className="creatediv">
        //                     Preview Image URL
        //                     <input
        //                         id='urlblock'
        //                         type="url"
        //                         // onChange={(e) => setLatt(e.target.value)}
        //                         placeholder='Preview Images Cannot be Changed'
        //                         required
        //                         disabled
        //                     />
        //                 </div>
        //             </div>
        //             <div id='priceblock'>
        //                 <div id='pricetop'>
        //                     Price
        //                     <input
        //                         id='priceinputblock'
        //                         type="integer"
        //                         value={price}
        //                         onChange={(e) => setPrice(e.target.value)}
        //                         placeholder='$<10,000'
        //                         max={10000}
        //                         min={20}
        //                         title='Must be between 20 and 10,000'
        //                         required
        //                     />
        //                 </div>
        //                 <div id='createspotimgcont'>
        //                     Image
        //                     <img src={spot.previewImage} alt='sampimg' id='createspotimg' />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div id='submitbuttcont2'>
        //         <button type="submit" onMouseOver={() => act = false} id='createsubmitbutton2'>Update</button>
        //         <button type='submit' onMouseOver={() => act = true} id='deletesubmitbutton2' >DELETE</button>
        //     </div>
        // </form >
        // <form onSubmit={handleSubmit} id='editspotform' >
        //     <div id='signupheader1'>
        //         <div id='signupexitbutt1' onClick={() => closeModal()}>
        //             x
        //         </div>
        //         <div id='signupheadertext1'>
        //             <div id="signupmainheader1">Edit Your Home</div>
        //             <div id='signupsubheader1'> Welcome {user?.firstName}</div>
        //         </div>
        //     </div>
        //     <div id='signupformcont1'>

        //         Address
        //         <label className="signuplabel">
        //             <input
        //                 type="text"
        //                 value={address}
        //                 onChange={(e) => setAddress(e.target.value)}
        //                 placeholder='Address'
        //                 pattern='^[0-9]+\s{1}.+'
        //                 title="Address must be in correct format e.g. '11 California St.'"
        //                 required
        //             />
        //         </label>
        //         City
        //         <label className="signuplabel">
        //             <input
        //                 type="text"
        //                 value={city}
        //                 onChange={(e) => setCity(e.target.value)}
        //                 placeholder='City'
        //                 required
        //             />
        //         </label>
        //         State
        //         <label className="signuplabel">
        //             <input
        //                 type="text"
        //                 value={state}
        //                 onChange={(e) => setStats(e.target.value)}
        //                 placeholder='State   e.g "CA"'
        //                 minLength='2'
        //                 maxLength='2'
        //                 pattern='^[A-Z]{2}$'
        //                 title="Two Capital Letters Please"
        //                 required
        //             />
        //         </label>
        //         Country
        //         <label className="signuplabel">
        //             <input
        //                 type="text"
        //                 value={country}
        //                 onChange={(e) => setCountry(e.target.value)}
        //                 placeholder='Country'
        //                 required
        //             />
        //         </label>
        //         Name
        //         <label className="signuplabel">
        //             <input
        //                 type="text"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //                 placeholder='Name'
        //                 required
        //             />
        //         </label>
        //         Description
        //         <label className="signuplabel">
        //             <textarea
        //                 type="text"
        //                 value={description}
        //                 onChange={(e) => setDescription(e.target.value)}
        //                 placeholder='Description'
        //                 maxLength='255'
        //                 required
        //             />
        //         </label>
        //         Price
        //         <label className="signuplabel">
        //             <input
        //                 type="integer"
        //                 value={price}
        //                 onChange={(e) => setPrice(e.target.value)}
        //                 placeholder='Price'
        //                 max={10000}
        //                 min={20}
        //                 title='Must be between 20 and 10,000'
        //                 required
        //             />
        //         </label>
        //         <ul id='errorscreaterev'>
        //             {errors.map((error, idx) => <li className='errors' key={error + idx}>{error}</li>)}
        //         </ul>
        //     </div>
        //     <button type="submit" onMouseOver={() => act = false} id='createsubmitbutton'>Update</button>
        //     <button type='submit' onMouseOver={() => act = true} id='deletesubmitbutton' >DELETE</button>
        // </form>
    );
}

export default EditSpot;
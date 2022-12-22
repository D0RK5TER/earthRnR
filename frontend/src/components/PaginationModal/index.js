import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pathURL } from "../../utilities/location";
import { getAllSpots } from '../../store/spots';
import './PaginationForm.css'
import { useModal } from '../../context/Modal';

function PaginationForm() {
    const history = useHistory()
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(9999)
    const [lake, setLake] = useState(false)
    const [rv, setRv] = useState(false)
    const [tree, setTree] = useState(false)
    const [earth, setEarth] = useState(false)
    const [mansion, setMansion] = useState(false)
    const [country, setCountry] = useState(false)
    const [island, setIsland] = useState(false)
    const [piano, setPiano] = useState(false)
    const [pools, setPools] = useState(false)
    const [games, setGames] = useState(false)
    const [desert, setDesert] = useState(false)
    const [contain, setContain] = useState(false)
    const [beach, setBeach] = useState(false)
    const [windmill, setWindmill] = useState(false)
    const [snow, setSnow] = useState(false)
    const [art, setArt] = useState(false)
    const [iconic, setIconic] = useState(false)
    const [japan, setJapan] = useState(false)


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
        if (earth) type += 'dirt'
        if (mansion) type += `mansion`
        if (country) type += 'country'
        if (island) type += 'island'
        if (piano) type += 'piano'
        if (pools) type += 'pools'
        if (games) type += 'games'
        if (desert) type += 'desert'
        if (contain) type += 'contain'
        if (beach) type += 'beach'
        if (windmill) type += 'windmill'
        if (snow) type += 'snow'
        if (art) type += 'creative'
        if (iconic) type += 'iconic'
        if (japan) type += 'japan'

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
            <div id="inputcont">
                <div id='mincont'>

                    <div id='pricecol'>
                        Price
                        <input
                            id='pricetop'
                            className="pagiinput"
                            type="number"
                            placeholder="Min: $"
                            value={+min}
                            min={1}
                            max={9999}
                            onChange={(e) => setMin(+e.target.value)}
                        />
                        <input
                            id='pricebot'
                            className="pagiinput"
                            type="number"
                            placeholder='Max: $'
                            value={+max}
                            min={+min + 1}
                            max={9999}
                            onChange={(e) => setMax(+e.target.value)}
                        />
                    </div>
                    <div id='pricecol'>
                        Bedrooms
                        <select id="cars" name="cars">
                            <option value="volvo">1 Bed</option>
                            <option value="saab">2 Beds</option>
                            <option value="fiat">3 Beds</option>
                            <option value="audi">4 Beds</option>
                        </select>
                        Bathrooms
                        <select id="cars" name="cars">
                            <option value="volvo">1 Bath</option>
                            <option value="saab">2 Baths</option>
                            <option value="fiat">3 Baths</option>
                        </select>
                    </div>
                </div>

                <div id='checkboxcont'>
                    Types of Locations
                    <div id="checkboxpagi">

                        <div>
                            Island
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={island}
                                onChange={(e) => setIsland(!island)}
                            />
                        </div>
                        <div>
                            RV
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={rv}
                                onChange={(e) => setRv(!rv)}
                            />
                        </div>
                        <div>
                            Tree
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={tree}
                                onChange={(e) => setTree(!tree)}
                            />
                        </div>
                        <div>
                            Dirt
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={earth}
                                onChange={(e) => setEarth(!earth)}
                            />
                        </div>
                        <div>
                            Mansion
                            <input
                                style={{
                                    background: 'url(https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg)',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={mansion}
                                onChange={(e) => setMansion(!mansion)}
                            />
                        </div>
                        <div>
                            Farm
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={country}
                                onChange={(e) => setCountry(!country)}
                            />
                        </div>
                        <div>
                            Lake
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={lake}
                                onChange={(e) => setLake(!lake)}
                            />
                        </div>
                        <div>
                            Piano
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={piano}
                                onChange={(e) => setPiano(!piano)}
                            />
                        </div>
                        <div>
                            Pool
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={pools}
                                onChange={(e) => setPools(!pools)}
                            />
                        </div>
                        <div>
                            Game
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={games}
                                onChange={(e) => setGames(!games)}
                            />
                        </div>
                        <div>
                            Desert
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={desert}
                                onChange={(e) => setDesert(!desert)}
                            />
                        </div>
                        <div>
                            Beach
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={beach}
                                onChange={(e) => setBeach(!beach)}
                            />
                        </div>
                        <div>
                            Contain                        <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={contain}
                                onChange={(e) => setContain(!contain)}
                            />
                        </div>
                        <div>
                            Windmill
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={windmill}
                                onChange={(e) => setWindmill(!windmill)}
                            />
                        </div>
                        <div>
                            Snow                        <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={snow}
                                onChange={(e) => setSnow(!snow)}
                            />
                        </div>
                        <div>
                            Art
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={art}
                                onChange={(e) => setArt(!art)}
                            />
                        </div>
                        <div>
                            Iconic
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={iconic}
                                onChange={(e) => setIconic(!iconic)}
                            />
                        </div>
                        <div>
                            Hanoks
                            <input
                                style={{
                                    background:
                                        'url("https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg")',
                                    backgroundSize: 'contain'
                                }}
                                type="checkbox"
                                value={japan}
                                onChange={(e) => setJapan(!japan)}
                            />
                        </div>
                    </div >
                </div>
            </div>
            <button type="submit" id="signupbutton">Search</button>
            {/* <button type='reset'>Reset</button> */}

        </form >
    );
}

export default PaginationForm;
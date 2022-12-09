import React, {  useState, useRef } from 'react'







function PriceSlider() {
    const scaleRef = useRef()
    // const input1 = useRef(0)
    // const input2 = useRef(500)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)

    // const [price, setPrice] = useState(0)

    const config1 = useRef({
        start: 0,
        end: 0
    })
    const config2 = useRef({
        start: 0,
        end: 0
    })

    const onMouseDown = (e) => {
        // Fire everything up if you hold left click or touch screen over the thumbs
        if (config1.current.mouseDown && config.current.thumbID !== 0) {
            config.current.moveEndX = e.touches ? e.touches[0].clientX : e.clientX
            // On every move, we calculating current thumbs positions
            const leftThumbPosition = computeStyle(thumb1Ref.current, "left")
            const rightThumbPosition = computeStyle(thumb2Ref.current, "left")

            // Calculating last thumbs positions before you started to trag the thumbs
            const stepsR = config.current.position + steps("right")
            const stepsL = config.current.position - steps("left")
            if (direction() === "right") {
                config.current.thumb.style.left = stepsR < config.current.containerWidth - config.current.thumbWidth ? stepsR + "px" : config.current.containerWidth - config.current.thumbWidth + "px";

            }

            if (direction() === "left") {

                config.current.thumb.style.left = stepsL >= config.current.thumbWidth ? stepsL + "px" : config.current.thumbWidth + "px";


            }
        }
    }
    const onMouseUp = () => {
        config.current.mouseDown = false
        config.current.position = 0
        config.current.thumb = false
        config.current.thumbID = 0
        config.current.moveStartX = 0;
        config.current.moveEndX = 0;
    }

    const steps = (x) => {
        if (x === "right") return config.current.moveEndX - config.current.moveStartX
        if (x === "left") return config.current.moveStartX - config.current.moveEndX
    }
    const direction = () => {
        if (config.current.moveEndX > config.current.moveStartX) return "right"
        if (config.current.moveEndX < config.current.moveStartX) return "left"
    }
    // const direction2 = () => {
    //     if (config2.current.moveEndX > config2.current.moveStartX) return "right"
    //     if (config2.current.moveEndX < config2.current.moveStartX) return "left"
    // }

    return (
        <form class="range-slider">
            <h3>Select your Filters</h3>
            <h4>{min}----{max}</h4>
            broken form below
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
            {/* <old dubl slider broken^^^^^^^^^^^ */}
            <input value="10" min="10" max="1000"  type="range" />
            <input value="500" min="10" max="500"  type="range" />
        </form>
    )
}



export default PriceSlider
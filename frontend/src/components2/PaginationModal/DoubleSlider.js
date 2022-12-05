import React, {  useState, useRef } from 'react'







function PriceSlider() {
    const scaleRef = useRef()
    // const input1 = useRef(0)
    // const input2 = useRef(500)
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(500)

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
            {/* <span class="rangeValues"></span> */}
            <input value="10" min="10" max="500"  type="range" />
            <input value="500" min="10" max="500"  type="range" />
        </form>
    )
}



export default PriceSlider
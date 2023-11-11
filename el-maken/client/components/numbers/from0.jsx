"use client"
import React from "react"
import { UseSpring, animated, useSpring } from "react-spring"

const Number = ({ n }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 50,
        config: { mass: 10, tension: 20, fraction: 100 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
export default Number;
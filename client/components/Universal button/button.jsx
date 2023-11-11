import React from 'react'
import "./button.css"
const button = ({ label ,nav}) => {
    return (
        <div className='border-btn ss'style={nav ? {border:"1px black solid"}:{border:"1px white solid"}} >
            <div className='text-btn ss' style={nav ? {color:"black"}:{color:"white"}} >{label}</div>
        </div>
    )
}

export default button
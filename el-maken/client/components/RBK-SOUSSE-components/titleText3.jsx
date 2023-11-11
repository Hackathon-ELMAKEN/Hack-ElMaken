"use client"
import React, { useEffect } from 'react'
import "./titleText3.css"
const titleText3 = () => {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show1")
                }
                else {
                    entry.target.classList.remove("show1")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden1")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <div className="title hidden1"><p id="title1">TRANSFORME TON <span className='pinkies'>AVENIR,</span> APPRENDS A <span className='pinkies'>CODER.</span></p><p id="title2" >REJOINGEZ NOTRE BOOTCAMP A <span className='pinkies animated-text'> SOUSSE.</span></p></div>
    )
}

export default titleText3
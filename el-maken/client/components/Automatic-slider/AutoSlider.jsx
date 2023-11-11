"use client"
import React, { useEffect } from 'react'
import "./autoSlider.css"
import "../../app/landing.css"
const AutoSlider = () => {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show7")
                }
                else {
                    entry.target.classList.remove("show7")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden7")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <div className="automatic-slider">
            <div className="slider">
                <div className="slide-track hidden7">
                    <div className="slide2">
                        <img src="access.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="orange.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="talan.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="pwc.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="office.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="intigo.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="/images/logo_vega.png" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="next-step.webp" alt="" />
                    </div>
                    <div className="slide2">
                        <img src="think-it.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AutoSlider
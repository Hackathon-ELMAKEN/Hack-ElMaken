"use client"
import React,{useEffect} from 'react'
import Aos from 'aos'
export const BeforeSlider = () => {
useEffect(()=>{
    Aos.init()
},[])
    return (
        <div className="before-automatic-slider" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h1 className="before-automatic-slider-title">Ils <span className="rose">recrutent</span> parmi nos diplômés</h1>
            <p className="before-automatic-slider-paragraph">More than 100 hiring partners and lots of cool recruiting events.</p>
        </div>
    )
}

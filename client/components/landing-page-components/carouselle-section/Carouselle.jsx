"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import VideoCarouselle from '../video-carouselle/videoCarouselle'
import "./carouselle.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Data from './data'
const Carouselle = () => {
    const [slide, setSlide] = useState(false)
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show4")
                }
                else {
                    entry.target.classList.remove("show4")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden4")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    entry.target.classList.add("show5")
                }
                else {
                    console.log("a");
                    entry.target.classList.remove("show5")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden5")
        hiddenElements.forEach((el) => observer.observe(el))
    }, [slide])

    const [current, setCurrent] = useState(0);
    const length = Data.length
    const [play, setPlay] = useState(1)
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!(Array.isArray(Data)) && Data.length <= 0) {
        return null
    }

    return (
        <>
            <p className='vc-title hidden4'>Vie candidat</p>
            <p className='experience hidden4'>Une expérience <span className='pinkie'>immersive</span> unique</p>
            <div className='hr-line3'></div>
            <div className='vc-container'><Link href={"/postuler"}><div className='border-btn-5'>
                <div className='text-btn-5'>Postuler</div>
            </div></Link></div>

            <div className='circles-container'>
                <span className={current === 0 ? "circle active" : "circle"}></span>
                <span className={current === 1 ? "circle active" : "circle"}></span>
                <span className={current === 2 ? "circle active" : "circle"}></span>
            </div>
            <FaArrowAltCircleLeft className='left-arrow' onClick={() => { prevSlide(); setPlay(1); setSlide(!slide) }} />
            <FaArrowAltCircleRight className='right-arrow' onClick={() => { nextSlide(); setPlay(1); setSlide(!slide) }} />
            {
                Data.map((el, index) => {
                    return (
                        <>
                            {index === current && (<p className='resume-candidat hidden5'>{el.resume}</p>)}
                            {index === current && (<p className='fullname hidden5'>{el.fullname}</p>)}
                            {index === current && (<p className='job hidden5'>{el.job}</p>)}
                            {index === current && (<img className='company-logo hidden5' src={el.companyLogo}></img>)}
                            <div className='video-candidat'>
                                {index === current && (<div className="video-carouselle" key={index}><VideoCarouselle src={el.video} thumbnail={el.thumbnail} setPlay={setPlay} play={play} /></div>)}

                            </div>
                        </>
                    )
                })
            }
        </>

    )
}

export default Carouselle
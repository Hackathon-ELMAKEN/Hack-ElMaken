"use client"
import React, { useEffect } from 'react'
import "./titleText6.css"
const TitleText6 = () => {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show8")
                }
                else {
                    entry.target.classList.remove("show8")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden8")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <div><h1 className='text5-h1 hidden8'>Projets récemments publiés</h1></div>
    )
}

export default TitleText6
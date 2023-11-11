'use client'
import React, { useEffect } from 'react'
import "./comapnies.css"
const Companies = () => {
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show6")
                }
                else {
                    entry.target.classList.remove("show6")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden6")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <>
            <p className='title-companies hidden6'>Décrochez un poste dans les meilleures entreprises tech</p>
            <p className='text-companies hidden6'>Développez de nouvelles compétences techniques en quelques semaines grâce à nos formations intensives et immersives.</p>
        </>
    )
}

export default Companies
"use client"
import React,{useEffect} from 'react'

export const MainHeader = ({img,text}) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                }
                else {
                    entry.target.classList.remove("show")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <header className="main-header">
            <img className="emploi-apres-diplome-image" src={img} />
            <h1 className="header-content hidden" >{text}</h1>
        </header>
    )
}

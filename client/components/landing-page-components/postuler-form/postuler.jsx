"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import "../../../app/landing.css"
import "./postuler.css"
const postuler = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show11")
                }
                else {
                    entry.target.classList.remove("show11")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden11")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    const router = useRouter()
    return (
        <div onClick={() => router.push("#")} className='hidden11'><div className='border-btn-4'>
            <div className='text-btn-4'>Postuler</div>
        </div></div>
    )
}

export default postuler
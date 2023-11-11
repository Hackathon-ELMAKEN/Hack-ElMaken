"use client"
import React, { useEffect } from 'react'
import VideoPlayer from '@/components/Player/VideoPlayer'
import "./videoCarouselle.css"
const videoCarouselle = ({ src, thumbnail, setPlay, play }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show3")
                }
                else {
                    entry.target.classList.remove("show3")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden3")
        hiddenElements.forEach((el) => observer.observe(el))
    })
 

    return (
        <div className=' video-landing-page hidden3'> <VideoPlayer videoSrc={src} thumbnailSrc={thumbnail} setPlay={setPlay} play={play} /></div>
    )
}

export default videoCarouselle
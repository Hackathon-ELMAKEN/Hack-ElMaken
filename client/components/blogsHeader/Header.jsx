"use client"
import React,{useEffect} from 'react'
import "./blogs.css"

const Header = ({title}) => {
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
    <div className='title hidden'>
      {title}
    </div>
  )
}

export default Header

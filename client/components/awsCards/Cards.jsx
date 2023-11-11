"use client"
import React,{useEffect, useRef} from 'react'
import "./cards.css"

const Cards = () => {
  const observerRef = useRef(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observerRef.current.unobserve(entry.target); // Stop observing after animation
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => {
      observerRef.current.observe(el);
    });
  return () => {
      observerRef.current.disconnect();
    };
  }, [])
  return (
    <div className="cards-container">
    <div className="card-item hidden">
      <p>1</p>
      <p>Cloud Foundation</p>
    </div>
    <div className="card-item hidden">
      <p>2</p>
      <p>Linux Fundamentals</p>
    </div>
    <div className="card-item hidden">
      <p>3</p>
      <p>Networking Fundamentals</p>
    </div>
    <div className="card-item hidden">
      <p>4</p>
      <p>Security Fundamentals</p>
    </div>
    <div className="card-item hidden">
      <p>5</p>
      <p>Python Programming</p>
    </div>
    <div className="card-item hidden" >
      <p>6</p>
      <p>Databases Fundamentals</p>
    </div>
    <div className="card-item hidden">
      <p>7</p>
      <p>AWS Core Services</p>
    </div>
    <div className="card-item hidden">
      <p>8</p>
      <p>Employability Skills</p>
    </div>
    <div className="card-item hidden">
      <p>9</p>
      <p>Cloud Practitioner Certification Practice</p>
    </div>
  </div>
  )
}

export default Cards

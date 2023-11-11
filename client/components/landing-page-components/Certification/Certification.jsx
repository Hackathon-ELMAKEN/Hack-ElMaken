"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import "./certification.css"
const Certification = () => {
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
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show9")
                }
                else {
                    entry.target.classList.remove("show9")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden9")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show10")
                }
                else {
                    entry.target.classList.remove("show10")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden10")
        hiddenElements.forEach((el) => observer.observe(el))
    })

    return (
        <>
            <p className='votre-certification hidden8'>Votre Certification</p>
            <div className='rbk-cert-card hidden9'>
                <div class="card2">
                    <div class="circle2"></div>

                    <div class="card-inner2">
                        <img src="RBK.png" alt="" className='img-in-cert' />
                        <p className='text-in-cert' >Certification nationale</p>
                        <p className='resume-in-cert' ><span className='bold-text'>Intitulé: </span> Full-stack JavaScript Professional</p>
                        <p className='resume-in-cert'> <span className='bold-text'>Organisme certifiant: </span> RBK</p>
                        <p className='resume-in-cert'><span className='bold-text'>Pré-requis de certification: </span> Terminer le programmeRBK avec toutes ses phases avec succès et passer les examens de certification avec succès</p>
                        <p className='resume-in-cert'><span className='bold-text'>Examens: </span>Examen toutes les 6 semaines et projet de fin d’études</p>
                    </div>
                </div>
                <div className='cert-btn-container'><Link href={"/fullStack"}><div className='border-btn-7'>
                    <div className='text-btn-7'>Découvrez plus</div>
                </div></Link></div>
            </div>

            <div className='AWS-cert-card hidden10'>
                <div class="card3">
                    <div class="circle3"></div>
                    <div class="card-inner3">
                        <img src="awsRestart.png" alt="" />
                        <p className='text-in-cert' >Certification nationale</p>
                        <p className='resume-in-cert' ><span className='bold-text'>Intitulé: </span>  AWS Certified Cloud practitioner</p>
                        <p className='resume-in-cert'> <span className='bold-text'>Organisme certifiant: </span> Amazon Web Services</p>
                        <p className='resume-in-cert'><span className='bold-text'>Pré-requis de certification: </span> Terminer le programme AWS re/start avec succès</p>
                        <p className='resume-in-cert'><span className='bold-text'>Examens: </span> Examen toutes les 6 semaines et projet de fin d’études
                            *La formation et la certification AWS re/start est100% gratuite pour tous et accessible sans obligation d'achat, elle est offerte par RBK et AWS</p>
                    </div>
                </div>
                <div className='cert-btn-container'><Link href={"/Aws"}><div className='border-btn-8'>
                    <div className='text-btn-8'>Découvrez plus</div>
                </div></Link></div>
            </div>
        </>
    )
}

export default Certification
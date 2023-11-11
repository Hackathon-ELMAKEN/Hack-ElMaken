'use client'
import React ,{useEffect, useState} from 'react'
import "./landing.css"
import BlackContainerNumbers from '@/components/landing-page-components/black-container-numbers/black-container-numbers'
import Carouselle from '@/components/landing-page-components/carouselle-section/Carouselle'
import TitleText from '@/components/landing-page-components/title-text/title-text'
import Form from '@/components/landing-page-components/form-container/form'
import Companies from '@/components/landing-page-components/companies-section/Companies'
import AutoSlider from '@/components/Automatic-slider/AutoSlider'
import Certification from '@/components/landing-page-components/Certification/Certification'
const page = () => {
  
     
    useEffect(() => { 
         if(sessionStorage.getItem('ipClient') === null) {
        fetch('http://127.0.0.1:3001/visitors/increment', {
          method: 'POST',
        })
          .then(response => response.json())
          .then(data => {
            console.log('Visitor count incremented:', data);
            sessionStorage.setItem('ipClient',data.ipClient); 

          })
          .catch(error => {
            console.error('Error incrementing visitor count:', error);
          });}
      }, []);
    return (
        <div className='landing-container'>
            <section className='image-landing-container' >
                <img src="/images/man-and-woman-collaborating-in-tech-industry.avif" alt="landing" />
                <div className='btn-img-container'>
                    <a href='/postuler'><div className='border-btn-4'>
                        <div className='text-btn-4'>Postuler</div>
                    </div></a></div>
                <div className="form-text-container">
                    <TitleText />
                    <Form />
                </div>
            </section>
            <section className='promo-landing-container'>
                <div className="announcement">
                    <div className="text-ads">
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                        <p>Profitez d'une bourse exceptionnelle de -40%</p>
                    </div>
                </div>
            </section >
            <section className='black-container'>
                <div id='awd-title'>5 mois pour devenir Developpeur Full-Stack</div>
                <div id='awd-resume'>L'objectif de cette formation est de permettre à toute personne, quel que soit son niveau initial (débutant, curieux ou avancé) ou son profil(reconversion professionnelle, montée en compétences…), d'acquérir les notions techniques et humaines nécessaires pour débuter avec succès une carrière dans la tech</div>
                <div className='sticker' id='sticker-1'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>Format flexible de 5 à 12 mois</span></div>
                <div className='sticker' id='sticker-2'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>1 professeur pour 7 étudiants</span></div>
                <div className='sticker' id='sticker-3'><span className='star'><img src="icons8-star-100.png" alt="" /></span><span className='sticker-text'>Sur le campus ou en ligne</span></div>
                <div id='hr-line2'> </div>
                <BlackContainerNumbers number={1000} label={"+"} idstat={"stat1"} textStat={"Diplômés de RBK depuis 2016"} />
                <BlackContainerNumbers number={93} label={"%"} idstat={"stat2"} textStat={"Taux d'employabilité de nos étudiants"} />
                <BlackContainerNumbers number={1000} idstat={"stat3"} textStat={"De cours en seulement 5 mois"} spanid={"time-spent"} indc={"h"} />
                <BlackContainerNumbers number={1251} idstat={"stat4"} textStat={"Comme 1er salaire moyen (2022)"} spanid={"money-spent"} indc={"TND"} />
            </section>
            <section className='video-and-about-container'>
                <Carouselle />
            </section>
            <section className='companies-container'>
                <Companies />
            </section>
            <AutoSlider />
            <section className='certifications-container'>
                <Certification />
            </section>
        </div >
    )
}

export default page


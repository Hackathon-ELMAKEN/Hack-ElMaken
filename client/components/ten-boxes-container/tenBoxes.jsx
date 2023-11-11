"use client"
import React, { useEffect } from 'react'
import Computer from '../computer/computer'
import Lottie from "lottie-react"
import Aos from 'aos'
import career from "../../public/career.json"
import "./tenBoxes.css"
export const TenBoxes = () => {
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
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showen")
                }
                else {
                    entry.target.classList.remove("showen")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hiddenX")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    
    return (
        <div className="four-5-grid">
            <div id="box-grid-1">
                {/* <div  className="four-5-grid-img" ref={container}></div> */}
                <div className="four-5-grid-img" >
                    <Computer />
                </div>
            </div>
            <div className="four-5-grid-content-free hidden" id="box-grid-2">
                <h1 className="four-5-grid-title" id="larger-title">Notre <span className="rose">service de carrières</span> sera là pour vous.</h1>
                <p className="four-5-grid-paragraph" id="larger-paragraph">Une fois la formation terminée, vous bénéficiez de notre<br /> service Carrières personnalisé. Nous vous préparons aux<br /> entretiens techniques et RH et vous mettons en relation<br /> avec les recruteurs.​​</p>
            </div>
            <div className="four-5-grid-content hidden"   id="box-grid-3">
                <h1 className="four-5-grid-title">Des sessions de formation sur la recherche d'emploi</h1>
                <p className="four-5-grid-paragraph">Une semaine de plus de 40 heures de formation dédiée à la recherche d'emploi et plusieurs sessions de formation tout au long de votre parcours de formation.</p>
            </div>
            <div className="four-5-grid-content hiddenX"   id="box-grid-4">
                <div className="text-adjust-grid">
                    <h1 className="four-5-grid-title" >Faire carrière chez RBK</h1>
                    <p className="four-5-grid-paragraph" >Comme beaucoup de nos diplômés, rejoignez<br /> notre équipe à la fin de votre cursus et faites carrière en tant que IT trainer,<br /> nous vous formons et aidons à progresser parmi<br /> nos équipes. Optez pour cette option<br /> pour de larges perspectives<br /> d'avenir. Sky is the limit !</p>
                </div>
                <Lottie loop={true} className="four-5-grid-img-2" animationData={career} />
            </div>
            <div className="four-5-grid-content hiddenX"   id="box-grid-5">
                <h1 className="four-5-grid-title">Coaching individuel <br />personnalisé</h1>
                <p className="four-5-grid-paragraph">Rencontrez notre équipe du services carrières pour des sessions de coaching individuelle afin de vous aider à définir votre parcours professionnel et de revoir votre stratégie de candidature et <br />vos documents.</p>
            </div>
            <div className="four-5-grid-content hidden"   id="box-grid-6">
                <h1 className="four-5-grid-title">Une mise en relation avec les entreprises</h1>
                <p className="four-5-grid-paragraph">Nous recevons souvent des demandes de recrutement par les entreprises avec lesquelles nous vous mettons en relation et/ou envoyons votre CV.</p>
            </div>
            <div className="four-5-grid-content hidden"   id="box-grid-7">
                <h1 className="four-5-grid-title">Soyez recruté par nos partenaires de recrutement</h1>
                <p className="four-5-grid-paragraph">Vous rencontrerez lors de nos career days en face à face des entreprises qui recrutent activement des profils tech juniors et pourrez également poser toutes vos questions de recrutement à des experts.</p>
            </div>
            <div className="four-5-grid-content hiddenX"   id="box-grid-8">
                <h1 className="four-5-grid-title">Des évènement de recrutement <br /> périodiques tout au long de l'année</h1>
                <p className="four-5-grid-paragraph">Nous invitons les entreprises à venir rencontrer nos diplômés tout au long de l'année.</p>
            </div>
            <div className="four-5-grid-content hidden"   id="box-grid-9">
                <h1 className="four-5-grid-title">Accès à notre communauté internationale</h1>
                <p className="four-5-grid-paragraph">Coming soon: A la fin de vos études vous aurez accès à notre notre communauté ou vous pourrez bénéficier d'un mentoring par nos anciens étudiants et recevoir des alertes pour des centaines d'offres d'emploi par an.</p>
            </div>
            <div className="four-5-grid-content hiddenX"   id="box-grid-10">
                <h1 className="four-5-grid-title">Copy Amélioration de votre Digital footprint et votre CV</h1>
                <p className="four-5-grid-paragraph">Devenez très recrutable en mettant en valeur votre CV, votre lettre de motivation et votre profil LinkedIn. Vous obtiendrez également des conseils pour tirer le meilleur parti de votre profil Github.</p>
            </div>
        </div>
    )
}

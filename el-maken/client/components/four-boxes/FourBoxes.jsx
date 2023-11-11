"use client"
import React,{useEffect} from 'react'
import Lottie from 'lottie-react'
import community from "../../public/community.json"
import talent from "../../public/talent.json"
import meeting from "../../public/meeting.json"
import service from "../../public/service.json"
const FourBoxes = () => {
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
        <div className="second-grid hidden">
            <div className="second-grid-box hidden" id="second-grid-box-1">
                <Lottie loop={true} className="photo-number" animationData={community} />
                <div className="grid-box-grid">
                    <h1 className="second-grid-box-title">Rejoignez un réseau solide</h1>
                    <p className="second-grid-box-paragraph">Accédez à une communauté de 1000+ talents technologiques au sein d'un réseau de recrutement solide regroupant les meilleures entreprises technologiques</p>
                </div>
            </div>
            <div className="second-grid-box hidden" id="second-grid-box-2">
                <Lottie loop={true} className="photo-number" animationData={talent} />
                <div className="grid-box-grid">
                    <h1 className="second-grid-box-title">Rencontrez des talents tech uniques</h1>
                    <p className="second-grid-box-paragraph">Nos diplômés combinent souvent leurs compétences technologiques avec leurs expériences ou études antérieures et ils sont impatients de continuer à apprendre.</p>
                </div>
            </div>
            <div className="second-grid-box-free">
                <h1 className="second-grid-box-free-title">Vous êtes <span className="rose">une entreprise ?</span></h1>
                <p className="second-grid-box-free-paragraph">RBK rend plus facile que jamais la recherche de candidats développeurs qualifiés ayant les compétences et les capacités de programmation dont vous avez besoin. Des développeurs front-end et back-end aux développeurs full stack et aux praticiens certifiés AWS Cloud, votre prochain développeur est ici.</p>
            </div>
            <div className="second-grid-box hidden" id="second-grid-box-3">
                <Lottie loop={true} className="photo-number" animationData={meeting} />
                <div className="grid-box-grid">
                    <h1 className="second-grid-box-title">Gratuité des services</h1>
                    <p className="second-grid-box-paragraph">Nos services d'accompagnement à l'embauche de nos diplômés sont gratuits pour les entreprises</p>
                </div>
            </div>
            <div className="second-grid-box hidden" id="second-grid-box-4">
                <Lottie loop={true} className="photo-number" animationData={service} />
                <div className="grid-box-grid">
                    <h1 className="second-grid-box-title">Assistez à nos job fairs</h1>
                    <p className="second-grid-box-paragraph">Nous organisons des salons de l'emploi pour que nos diplômés et nos partenaires de recrutement puissent se rencontrer et évaluer s'il y a un ajustement mutuel.</p>
                </div>
            </div>
            <div className="three-photos-grid">
                <img className="three-photos-grid-class" src="image 16.png" id="three-photos-grid-1" />
                <img className="three-photos-grid-class" src="image 15.png" id="three-photos-grid-2" />
                <img className="three-photos-grid-class" src="image 17.png" id="three-photos-grid-3" />
            </div>
        </div>
    )
}

export default FourBoxes
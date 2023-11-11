import React from "react"
import Slider from "@/components/infinite-slider/infinite-slider"
import Number from "@/components/numbers/from0"
import {MainHeader} from "@/components/main-header/Header.jsx"
import { TenBoxes } from "@/components/ten-boxes-container/tenBoxes.jsx"
import  FourBoxes  from "@/components/four-boxes/FourBoxes.jsx"
import { BeforeSlider } from "@/components/before-slider/BeforeSlider.jsx"
import "./emploiCSS.css"
const Emploi = () => {
    
    return (
        <div className="main-container">
            <MainHeader img={"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" } text={"emploi apres diplome"}/>
            <div className="black-container">
                <h1 className="block-title">Obtenez votre job de rêve grâce<br /> à notre <span className="rose">services carrières.</span></h1>
                <h3 className="block-desc">Notre Service carrières vous accompagne de manière<br /> personnalisée pour vous préparer à décrocher un emploi<br /> grâce à notre réseau de partenaires employeurs.</h3>
                <div className="three-box-container">
                    <div className="box-stat" id="box-1">
                        <div><h1 className="statNumbers"><Number n={1000} /><span id="span-after-number">+</span></h1></div>
                        <p className="stat-desc">Diplômés de RBK<br /> depuis 2016</p>
                    </div>
                    <div className="box-stat" id="box-2">
                        <h1 className="statNumbers" ><Number n={93} /><span>%</span></h1>
                        <p className="stat-desc">Taux d'employabilité<br /> de nos étudiants</p>
                    </div>
                    <div className="box-stat" id="box-3">
                        <h1 className="statNumbers"><Number n={1251} /><span>TND</span></h1>
                        <p className="stat-desc">Comme 1er salaire<br /> moyen (2022)</p>
                    </div>
                </div>
            </div>
           <TenBoxes/>
            <div className="text-box">
                <h1 className="text-box-title">Un <span className="rose">réseau mondial</span> d'anciens étudiants et de recruteurs</h1>
                <p className="text-box-paragraph">Nos anciens étudiants travaillent et entreprennent dans le monde entier, repoussant les limites à tous les niveaux de l'ingénierie logicielle. Depuis 2014, notre diplôme est un gage de sérieux et de qualité auprès de centaines d'employeurs du monde entier.</p>
                <div className="div-for-image">
                    <img className="text-box-img" src="Scroll Up.png" alt="" />
                </div>
            </div>
            <div >
                <Slider />
            </div>
            <FourBoxes />
            <BeforeSlider/>
            <div className="automatic-slider">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src="access.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="orange.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="talan.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="pwc.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="office.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="intigo.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="vega.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="next-step.webp" alt="" />
                        </div>
                        <div className="slide">
                            <img src="think-it.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emploi;
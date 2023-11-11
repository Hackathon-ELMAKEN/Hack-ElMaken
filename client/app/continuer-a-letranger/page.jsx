'use client'
import React, { useEffect } from "react";
import { MainHeader } from "@/components/main-header/Header.jsx";
import "./continue.css"
const Continuer = () => {
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
        <div className="main-container">
            <MainHeader img={"/a-letranger.png"} text={"Continuer a l'étranger"}/>
            <div className="intro">
            <h1 className="intro-title">Alternance et <span className="rose">Mobilité internationale</span></h1>
                
                    <p className="intro-paragraph">RBK offre un soutien personnalisé à chaque diplômé souhaitant poursuivre ses études à l'étranger dans l'un de nos établissements partenaires grâce à notre département de mobilité internationale.</p>
                    <button className="S-inscrie">S'inscrie</button>
                
                <img className="globe" src="globe.png" alt="" />
            </div>
            <div className="text" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h1 className="text-title">Etudier en travaillant en <span className="rose">France</span> ou à <span className="rose">Dubai</span></h1>
                <p className="text-paragraph">ReBootKamp (RBK) vise à promouvoir la mobilité internationale, en mettant à disposition de ses étudiants un vaste réseau international de partenaires et une offre diversifiée de formation diplômantes.
                    A l’issue de la formation bootcamp, les apprenants ont ainsi la possibilité de continuer leurs études en alternance à l'étranger.</p>
            </div>
            <div className="three-boxs-container">
                <div className="three-boxs-container-box hidden">
                    <h1 className="three-boxs-container-title rose">France</h1>
                    <img className='three-boxs-container-img' src="eiffel tower.png" alt="" />
                    <p className="three-boxs-container-paragraph">Formation par alternance, un système de formation qui intègre une expérience de travail où vous vous formez alternativement en entreprise privée ou publique et dans un établissement d'enseignement partenaire qui se charge de vos études et vous offre un salaire.</p>
                </div>
                <div className="three-boxs-container-box hidden">
                    <h1 className="three-boxs-container-title rose">Dubai</h1>
                    <img className='three-boxs-container-img' src="image 18.png" alt="" />
                    <p className="three-boxs-container-paragraph">Formation par alternance, vous vous acquittez de vos frais d'études et nous vous aidons à décrocher un emploi à Dubai.</p>
                </div>
                <div className="three-boxs-container-box hidden">
                    <h1 className="three-boxs-container-title rose">Plus !</h1>
                    <img className='three-boxs-container-img' src="globe (1).png" alt="" />
                    <p className="three-boxs-container-paragraph">D'autres destinations et d'autres possibilités sont à venir, restez connectés pour recevoir les mises à jour</p>
                </div>
            </div>
            <div className="foreign-programmes">
                <div className="vertical-line hidden"></div>
                <h1 className="foreign-programmes-title" id="foreign-programmes-title-one">Un réseau <span className="rose">d'écoles partenaires</span> à l'internationale</h1>
                <div className="arrows">
                    <div className="arrow-one hidden"><div className="black"></div><h1>Open IT à Montpellier</h1><img src="Arrow.png" alt="" /></div>
                    <div className="arrow-one hidden"><div className="black"></div><h1>ESTIAM à Lyon</h1><img src="Arrow.png" alt="" /></div>
                    <div className="arrow-one hidden"><div className="black"></div><h1>Digital College à Paris</h1><img src="Arrow.png" alt="" /></div>
                    <div className="arrow-one hidden"><div className="black"></div><h1>Akalis à Paris</h1><img src="Arrow.png" alt="" /></div>
                    <div className="arrow-one hidden"><div className="black"></div><h1>Collège de Paris à Dubaï</h1><img src="Arrow.png" alt="" /></div>
                </div>
                <h1 className="foreign-programmes-title" id="foreign-programmes-title-two">Un large choix de <span className="rose">programmes</span></h1>
                <div className="programme">
                    <div className="programme-box left">
                        <h1 className="programme-title one">Programmes <span className="rose">Bachelor</span></h1>
                        <ul className="programmme-paragaph one">Diplôme: (Bac+5 / Titre RNCP niveau 7)
                            Durée du programme : 2 années
                            Specialités:
                            <li>MS Informatique</li>
                            <li>MBA IT Training</li>
                            <li>Manager de projets spécialisation informatique</li>
                            <li>MS Spécialiste de la Data</li>
                            <li>MS Chef de projet intelligence artificielle</li>
                            <li>MBA International digital project management</li></ul>
                    </div>
                    <div className="programme-box right">
                        <h1 className="programme-title two">Programmes <span className="rose">Master & MBA</span></h1>
                        <ul className="programmme-paragaph one">
                            Diplôme: (Bac+5 / Titre RNCP niveau 7)
                            <li>Durée du programme :</li>
                            <li>2 années Specialités:</li>
                            <li>MS Informatique</li>
                            <li>MBA IT Training</li>
                            <li>Manager de projets spécialisation informatique</li>
                            <li>MS Spécialiste de la Data</li>
                            <li>MS Chef de projet intelligence artificielle</li>
                            <li>MBA International digital project management</li></ul>
                    </div>
                </div>
            </div>
            <div className="text" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h1 className="text-title title-two">Taux d’<span className="rose">acceptation</span>acceptation écoles partenaires</h1>
                <img src="Approval.png" alt="" />
                <p className="text-paragraph">Les étudiants certifiés par les bootcamps de RBK ont la garantie d’être acceptés dans l’une de nos universités et écoles partenaires en France ou à Dubai, si ils remplissent les conditions d’éligibilité. Faute de quoi, RBK s’engage à rembourser à l’étudiant les frais de son dossier mobilité-internationale.</p>
            </div>
            <div className="four-boxes">
                <div className="card-container hidden">
                    <div className="card">
                        <div className="front-content" id="front-content-div">
                            <p>Taux d’</p><span className="rose front-content-size">acceptation de l'altérnance</span>
                        </div>
                        <div className="content">
                            <p>
                                RBK et ses partenaires ne peuvent garantir que l’étudiant arrives à décrocher un emploi en tant qu’altérant, ce processus étant un processus de recrutement des entreprises qui sont totalement indépendantes. Par ailleurs, le service carrières proposera à l’étudiant des solutions pour améliorer son profil et son employabilité localement et à l’étranger (Formation en langues, stages, projets, etc. qu'il pourra réaliser par ses propres moyens si besoin), il pourra par la suite postuler à nouveau et reprendre le processus pour continuer ses études à l’étranger.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container hidden">
                    <div className="card">
                        <div className="front-content">
                            <p>Taux d’</p><span className="rose front-content-size">acceptation du Visa</span>
                        </div>
                        <div className="content">
                            <p>
                                A titre indicatif et afin de donner une idée sur les taux d’acceptation moyen des trois dernières années, qui varie d’une année à une autre, les postulants à nos écoles partenaires on eu un taux d'acceptation du visa de 67% pour la France et de plus de 91% pour Dubai.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container hidden">
                    <div className="card">
                        <div className="front-content">
                           <span className="rose front-content-size">Frais </span><p>&nbsp;de souscription</p>
                        </div>
                        <div className="content hidden">
                            <p>
                                418 DT HT (19% TVA)
                                Hors tout autre frais relatifs à votre dossier qui peuvent résulter du processus par la suite
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container hidden">
                    <div className="card">
                        <div className="front-content">
                            <p>Qui est &nbsp;</p><span className="rose front-content-size">éligible</span>
                        </div>
                        <div className="content">
                            <p>
                            1. être diplômé d'un programme bootcamp de RBK<br />
                            2. Avoir un bachelor, License ou équivalent pour les programmes de niveau Master, et équivalent bac pour l'entrée au niveau bachelor. Admission possible en 3eme année de bachelor pour ceux qui ont un BTS ou un BTP.<br />
                            3. Avoir un niveau de français intermédiaire (B1-B2)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Continuer;
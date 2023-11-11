"use client"
import React from 'react'
import "./footer.css"
import { usePathname } from 'next/navigation'
const footer = () => {
    const path = usePathname()
    if (path === "/Login" || path === "/Register" || path === "/forgotPassword") {
        return
    }
    return (
        <footer>
            <div className='container-footer'>
                <div className='sec logo-footer-container '>
                    <img src="../RBK-white.png" alt="Logo" className=' logo-footer' />
                </div>
                <div className='sec nosProgrammes ' >
                    <h3>Nos Programmes</h3>
                    <ul className='footer-links'>
                        <li className='footer-link'>
                            <a href="#">Développeur web</a>
                        </li>
                        <li className='footer-link aws'><a href="#">Cloud computing AWS re/start</a></li>
                    </ul>

                    <div className='sec nosBootcamps'>
                        <h3>Nos BootCamps</h3>
                        <ul className='footer-links'>
                            <li className='footer-link'><a href="#">RebootKamp El Gazala</a></li>
                            <li className='footer-link'><a href="#">RebootKamp Sousse</a></li>
                            <li className='footer-link'><a href="#">RebootKamp El Kef</a></li>
                        </ul>
                    </div>
                </div>

                <div className='sec autres'>
                    <h3>Autres</h3>
                    <ul className='footer-links'>
                        <li className='footer-link'><a href="#">Emploi après diplome</a></li>
                        <li className='footer-link'><a href="#">Continuer a l’étranger</a></li>
                        <li className='footer-link'><a href="#">Events</a></li>
                        <li className='footer-link'><a href="#">Blog</a></li>
                        <li className='footer-link'><a href="#">Contact</a></li>
                        <li className='footer-link'><a href="#">Projets récemment publiés
                        </a></li>
                    </ul>
                </div>
                <div className='sec followus '>
                    <div className='follow-us-second-container' >
                        <h3>FOLLOW US</h3>
                        <ul className='footer-links social'>
                            <li className='footer-link'><a href="https://www.facebook.com/ReBootKamp"><img src="/icons8-facebook (2).svg" alt="" className='sci' /></a></li>
                            <li className='footer-link'><a href="https://www.instagram.com/rebootkamp_rbk/"><img src="/icons8-instagram (2).svg" className='sci' alt="" /></a></li>
                            <li className='footer-link'><a href="https://www.linkedin.com/company/rebootkamp-rbk/?originalSubdomain=tn"><img src="/icons8-linked-in.svg" className='sci' alt="" /></a></li>
                            <li className='footer-link'><a href="https://www.youtube.com/c/ReBootKampRBKTunisia"><img src="/icons8-youtube (1).svg" className='sci' alt="" /></a></li>
                        </ul>
                        <span id='btn-footer'><div className='border-btn2' >
                            <div className='text-btn2' >Inscription</div>
                        </div></span>
                    </div>
                </div>
                <div className='copy-right-text'>
                    <p>Copyright © 2019-2023 REBOOTKAMP Tunisie. All rights reserved.</p>
                </div>
            </div>

        </footer>
    )
}

export default footer
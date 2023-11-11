"use client"
import React, { use, useState } from 'react'
import "../../app/Login/login.css"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from '../Login-components/firebaseConfig'
const FPComp = () => {
    const [email, setEmail] = useState("")
    const [popUp, setPopUp] = useState(false)
    const [errPopUp, setErrPopUp] = useState(false)
    const forgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            setPopUp(true)
            setErrPopUp(false)
        } catch (err) {
            setPopUp(false)
            setErrPopUp(true)
            console.log(err);
        }
    }
    return (
        <div className="login-root">
            <div
                className="box-root flex-flex flex-direction--column"
                style={{ minHeight: "100vh", flexGrow: 1 }}
            >
                <div className="loginbackground box-background--white padding-top--64">
                    <div className="loginbackground-gridContainer">
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "top / start / 8 / end" }}
                        >
                            <div
                                className="box-root"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                                    flexGrow: 1
                                }}
                            ></div>
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "4 / 2 / auto / 5" }}
                        >
                            <div
                                className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "6 / start / auto / 2" }}
                        >
                            <div
                                className="box-root box-background--blue800"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "7 / start / auto / 4" }}
                        >
                            <div
                                className="box-root box-background--blue animationLeftRight"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "8 / 4 / auto / 6" }}
                        >
                            <div
                                className="box-root box-background--gray100 animationLeftRight tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "2 / 15 / auto / end" }}
                        >
                            <div
                                className="box-root box-background--cyan200 animationRightLeft tans4s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "3 / 14 / auto / end" }}
                        >
                            <div
                                className="box-root box-background--blue animationRightLeft"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "4 / 17 / auto / 20" }}
                        >
                            <div
                                className="box-root box-background--gray100 animationRightLeft tans4s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                        <div
                            className="box-root flex-flex"
                            style={{ gridArea: "5 / 14 / auto / 17" }}
                        >
                            <div
                                className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                                style={{ flexGrow: 1 }}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="box-root padding-top--24 flex-flex flex-direction--column"
                    style={{ flexGrow: 1, zIndex: 9 }}
                >
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <h1>
                            <a href="http://localhost:3000/" rel="dofollow">
                                REBOOTKAMP
                            </a>
                        </h1>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <span className="padding-bottom--15"> Vous recevrez le lien vous permettant de réinitialiser votre mot de passe.</span>
                                <form id="stripe-login">
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                        {popUp ? (<p style={{ color: "green" }}>Un email vous a été envoyé.</p>) : <></>}
                                        {errPopUp ? (<p style={{ color: "red" }}>Veuillez insérer une adresse email existante.</p>) : <></>}
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="Continuer" value="Continuer" onClick={(e) => { e.preventDefault(), forgotPassword() }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer-link padding-top--24">
                            <span>
                                Retour à la
                                <a href="/Login"> Connexion</a>
                            </span>
                            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                <span>
                                    <a href="http://localhost:3000/">© ReBootKamp</a>
                                </span>
                                <span>
                                    <a href="#">Contact</a>
                                </span>
                                <span>
                                    <a href="#">Confidentialité et conditions</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FPComp
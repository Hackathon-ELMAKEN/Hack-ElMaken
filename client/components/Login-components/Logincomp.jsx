"use client"
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie/cjs/Cookies';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Login-components/firebaseConfig'

import axios from 'axios';
const Logincomp = ({params}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [popUp, setPopUp] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    
    
    const cookies = new Cookies();

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);

            if (user) {
                if (user.user.emailVerified) {
                    const fireBaseToken = await user.user.getIdTokenResult(false)
                    axios.post("http://localhost:3001/user/getOne", {
                        email: fireBaseToken.claims.email
                    })
                        .then((res) => {
                            const jwtToken = res.data
                            cookies.set("userInfo", jwtToken)
                            if(sessionStorage.getItem("previousLocation")){
                                window.location.replace(sessionStorage.getItem("previousLocation"))
                                sessionStorage.removeItem("previousLocation")

                            }else{
                                window.location.replace("/")
                            }
                            // window.location.replace("/")//! used this beacuse router.push() will distort the css
                        })
                        .catch((err) => console.log(err))
                } else {
                    setPopUp(true)
                }

            }
        } catch (err) {
            setPopUp(true)
            setErrMsg(err.message)
            console.log(err.message);
        }
    }
    const errorMessage = () => {
        if (errMsg === "Firebase: Error (auth/invalid-email).") {
            return "Adresse e-mail invalide"
        } else if (errMsg === "Firebase: Error (auth/missing-password).") {
            return "Mot de passe manquant"
        } else if (errMsg === "Firebase: Error (auth/wrong-password).") {
            return "Mot de passe incorrect"
        } else {
            return "Vérifier votre adresse e-mail"
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
                                <span className="padding-bottom--15">Connectez-vous à votre compte.</span>
                                <form id="stripe-login">
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <div className="grid--50-50">
                                            <label htmlFor="password">Mot de passe</label>
                                            <div className="reset-pass">
                                                <a href="/forgotPassword">Mot de passe oublié ?</a>
                                            </div>
                                        </div>
                                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                        {popUp ? (<p style={{ color: 'red' }}>{errorMessage()}</p>) : <></>}
                                    </div>

                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="Se connecter" value="Se connecter" onClick={(e) => { handleSubmit(e) }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer-link padding-top--24">
                            <span>
                                Vous n'avez pas de compte ? <a href="/Register">S'inscrire</a>
                            </span>
                            <span>Ou</span>
                            <span> Retournez à la page <a href="/">d'accueil</a></span>
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

export default Logincomp
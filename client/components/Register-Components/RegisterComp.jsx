"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../Login-components/firebaseConfig'
import { useRouter } from 'next/navigation'
const RegisterComp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [allUsers, setAllUsers] = useState([])

    const [valid, setValid] = useState({
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        password: false
    })
    const router = useRouter()
    //* error message timout
    const [error, setError] = useState(false)
    const errorPopUp = () => {
        setError(true)
        const timer = setTimeout(() => {
            setError(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }

    useEffect(() => {
        axios.get("http://localhost:3001/user/getAll")
            .then((res) => { setAllUsers(res.data) })
            .catch((err) => console.log(err))
    }, [])
    //*----------------FIREBASE---------------------*/
    //*handling form fields start
    const handlePassword = (e) => {
        if (e.target.value.length !== 0) {
            setValid({ password: true })

        } else setValid({ password: false })

    }
    const handleUsername = (e) => {
        if (e.target.value.length !== 0) {
            setValid({ username: true })


        } else setValid({ username: false })
    }
    const handleFirstname = (e) => {
        if (firstName.length !== 0) {
            setValid({ firstName: true })

        } else setValid({ firstName: false })
    }
    const handleLastName = (e) => {
        if (lastName.length !== 0) {
            setValid({ lastName: true })

        } else setValid({ lastName: false })
    }
    const handleEmail = (e) => {
        if (email.indexOf("@") !== -1 && email.indexOf(".com") !== -1) {
            setValid({ email: true })

        } else setValid({ email: false })
    }
    //*handling form fields end 

    //* submit function
    const register = () => {
        const truthy = Object.values(valid).every(value => {
            if (value === true) {
                return true
            } else return false
        })
        if (truthy) {
            setError(false)
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    const user = res.user

                    axios.post("http://localhost:3001/user/addOne", {
                        username, email: user.email, firstName, lastName,
                    })
                        .then((res) => {
                            console.log(res.data); sendEmailVerification(user).then((res2) => { console.log(res2); router.push("/Login") }).catch((err) => console.log(err))
                        })
                        .catch((err) => console.log(err))
                })
                .catch((err) => console.log(err))
        }
        else { errorPopUp(); }

    }
    //*----------------FIREBASE---------------------*/
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
                                <span className="padding-bottom--15">Créer un compte.</span>
                                <form id="stripe-login">
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="Prenom">Prenom</label>
                                        <input type="text" name="prenom" onChange={(e) => { setFirstName(e.target.value); handleFirstname(e) }} />
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="Nom">Nom de famille</label>
                                        <input type="text" name="Nom" onChange={(e) => { setLastName(e.target.value); handleLastName(e) }} />
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="Username">Nom d'utilisateur</label>
                                        <input type="text" name="Username" onChange={(e) => { setUsername(e.target.value); handleUsername(e) }} />
                                        {allUsers.map((el) => {
                                            if (el.username === username) {

                                                return <p style={{ color: "red" }} key={el.id}>Nom d'utilisateur déjà utilisée</p>

                                            }
                                        })}
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <label htmlFor="email">Adresse e-mail</label>
                                        <input type="email" name="email" onChange={(e) => { setEmail(e.target.value); handleEmail(e) }} />
                                        {allUsers.map((el) => {
                                            if (el.email === email) {

                                                return <p style={{ color: "red" }} key={el.id}>Adresse e-mail déjà utilisée</p>
                                            }
                                        })}
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <div className="grid--50-50">
                                            <label htmlFor="password">Mot de passe</label>
                                        </div>
                                        <input type="password" name="password" onChange={(e) => { setPassword(e.target.value); handlePassword(e) }} />
                                    </div>
                                    {error ? <p style={{ color: "red" }}>Veuillez vous assurer que tous les champs sont remplis correctement</p> : null}
                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="S'inscrire" value="S'inscrire" onClick={(e) => { e.preventDefault(); register() }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer-link padding-top--24">
                            <span>
                                Vous avez déjà un compte ? <a href="/Login" >Se connecter</a>
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

export default RegisterComp
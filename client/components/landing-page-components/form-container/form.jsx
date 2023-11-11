"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import "./form.css"



const form = () => {
   

    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        accept: false,
      });


      const isFormDataEmpty = () => {
        return (
          !formData.prenom ||
          !formData.nom ||
          !formData.email 
        );
      };

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show2")
                }
                else {
                    entry.target.classList.remove("show2")
                }
            })
        })
        const hiddenElements = document.querySelectorAll(".hidden2")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    return (
        <form className='form-container hidden2'>
            <h3 id='title-form'>Réservez votre place en suivant ces quelques étapes simples.</h3>
            <p id='question'>Que voulez-vous étudier ? <span className='pinkies'>*</span> </p>
            <div className='radio-container'><input type="radio" id='dev-web-radio' />  <span id='dev-web'>Développement Web</span></div>
            <div className='info'>
                <p id='required' className='pinkies'>Champs Obligatoires *</p>
                <input id='inp1' type="text" placeholder='Prenom *'  value={formData.prenom} onChange={(e) => setFormData((prevData) => ({ ...prevData, prenom: e.target.value }))}/>
                <input id='inp2' type="text" placeholder='Nom de famille *' value={formData.nom} onChange={(e) => setFormData((prevData) => ({ ...prevData, nom: e.target.value }))}/>
                <input id='inp3' type="email" placeholder='Votre e-mail *'value={formData.email} onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))} />
                <input id='inp4'  type="text" placeholder='Votre Téléphone *'value={formData.phone} onChange={(e) => setFormData((prevData) => ({ ...prevData, phone: e.target.value }))} />
            </div>
            <div className='tac-container'>
                <input type="checkbox" id='tac-checkbox' /> <span id='tac' value={formData.accept} onChange={(e) => setFormData((prevData) => ({ ...prevData, accept: e.target.checked }))}>En soumettant ce formulaire, j'accepte la politique de confidentialité de RBK.</span>
            </div>
            <div className='btn-form-container'>
                {isFormDataEmpty() ? (
                    <div className='border-btn-3 disabled-btn'>
                        <div className='text-btn-3'>Poursuivre</div>
                    </div>
                ) : (
                    <Link
                        href={{
                            pathname: '/postuler2',
                            query: { ...formData },
                        }}
                        passHref
                       >
                            <div className='border-btn-3'>
                                <div className='text-btn-3'>Poursuivre</div>
                            </div>
                   
                    </Link>
                )}
            </div>
        </form>
    )
}




export default form
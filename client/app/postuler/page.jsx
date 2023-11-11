'use client'
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from "next/link";
import './style.css';

const Page = () => {
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
  





  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    accept: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    
  const isFormDataEmpty = () => {
    return (
      !formData.prenom ||
      !formData.nom ||
      !formData.email ||
      !formData.phone
    );
  };

  return (
    <div className='card-container-1'>
      <div className="container">
        <img className="background-image" src="./fullStack.png" alt="Background" />
        <div className="text-container-1 hidden" >Postuler maintenant et profiter d'une bourse de 40%</div>
       </div> 
     <div className='card-image-postuler-grid-2'>
      <div className='card-2'>       
        <h1>Réservez votre place en suivant ces quelques étapes simples.</h1>
        <p>Lorsque vous déposez votre candidature, notre équipe Admission vous recontacte rapidement pour planifier un entretien de 30 minutes afin de discuter avec vous de votre projet professionnel.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="prenom ">Prénom: *</label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={(e) => setFormData((prevData) => ({ ...prevData, prenom: e.target.value }))} required />

          <label htmlFor="nom">Nom de famille: *</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={(e) => setFormData((prevData) => ({ ...prevData, nom: e.target.value }))} required />

          <label htmlFor="email">Votre e-mail: *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))} required />

          <label htmlFor="phone">Téléphone: *</label>
          <PhoneInput
            id="phone"
            name="phone"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(value) => setFormData((prevData) => ({ ...prevData, phone: value }))}
            defaultCountry="TN"
            required
          />
          <div className='checkbox'>
            <input type="checkbox" id="accept" name="accept" checked={formData.accept} onChange={(e) => setFormData((prevData) => ({ ...prevData, accept: e.target.checked }))} required />
            <label htmlFor="accept">En soumettant ce formulaire, j'accepte la politique de confidentialité de RBK.</label>
          </div>
          <Link
               style={{textDecoration : 'none'}}
               href={{
                pathname: '/postuler2',
                query: { ...formData },
              }}
              passHref
            ><input type="submit" value="Poursuivre ma condidature"  disabled={isFormDataEmpty()}/>  </Link>
            </form>
          </div>
       <div>
       <img className='postuler-img' src="./Postuler2.png" alt="" />
       </div>
       </div>
       
    </div>



  );
};

export default Page;

"use client"
import React, { useEffect, useState } from 'react'
import "./eventDetailed.css"
import { useParams } from 'next/navigation'
import axios from 'axios'
export const EventDetailed = () => {
  const [event, setEvent] = useState([])
  const param = useParams()
  const id =param.eventDetails
console.log(param);
  useEffect(() => {
    fetch()
  }, [])

  const fetch = () => {
    axios.get(`http://localhost:3001/events/getOneEvent/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err))
  }

  return (
      
        <div className='event-detailed-container'>
          <h1 className='event-detailed-title'>{event.title}</h1>
          <p className='pre-description'>{event.preDescription}</p>
          <button className='event-button'>Les inscriptions sont closes<a>Voir d'autres événements</a></button>
          <img src={event.image} alt="" />
          <h5 className='event-detaield-info'>heure et lieu </h5>
          <div className='heure'>
            <p >{event.heure}</p>
            <p>{event.lieu}</p>
          </div>
          <h1 className='event-detaield-info'> À propos de l'événement</h1>
          <div className='event-detailed-desc'>{event.description}</div>
        </div>
      
    

  )
}

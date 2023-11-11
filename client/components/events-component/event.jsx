"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import "./event.css"
export const Event = () => {
    const [events, setEvents] = useState([])

    
    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        axios.get("http://localhost:3001/events/getAllEvents")
            .then((res) => setEvents(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {events.map((event) => (
                <div className='one-event-x'>
                    <div className='event-date-x'>
                        <img src="date.png" alt="" />
                        <h3>{event.heure}</h3>
                    </div>
                    <h1 className='event-title-x'>{event.title}</h1>
                    <div className='event-paragraph-x truncate'>{event.description}</div>
                    <Link className='read-more-x' href={`/events/${event.id}`}>
                   <span className='read-more-text-x'>read more</span>
                    </Link>
                    <img className='event-img-x' src={event.image} alt="" />
                    <div className='line-after-x'></div>
                </div>
            ))}
        </div>

    )
}

"use client"
import React from 'react'
import { MainHeader } from '@/components/main-header/Header'
import { Event } from '@/components/events-component/event'
import "./events.css"
const Events = () => {
  return (
    <div>
        <MainHeader className='main-header-css' img={"https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} text={"events"} />
        <div className='events-intro'>
          <h1>learn to <span className='rose'>code</span></h1>
          <div className='into-line'></div>
          <h2>Come join one of our workshops and learn how to code for free. Our coding workshops range from beginner-friendly to intermediate-friendly as we aim to help you get started on your journey of learning to code. Our goal is to offer these workshops as both a utility for learning the fundamentals of programming and as a teaser of our fun and intuitive teaching style that you will experience in <span className='rose'>RBK</span></h2>
        </div>
       <Event/>
    </div>
  )
}
export default Events
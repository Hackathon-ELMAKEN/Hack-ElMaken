import React, { useEffect } from 'react'
import { EventDetailed } from '@/components/events-component/eventDetailed'
const EventDetails = () => {
  useEffect(()=>{
    sessionStorage.setItem("navbar","nested")
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("navbar");
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  })
  return (
    <div>
        <EventDetailed />
    </div>
  )
}
export default EventDetails

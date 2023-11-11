import React from 'react'
import Cards from '@/components/Recent-Projects-components/cards/cards'
import "./recentProjects.css"
import TitleText6 from '@/components/Recent-Projects-components/titleText6/titleText6'

const page =  () => {
    return (
        <div className='recent-projects-container'>
            <section className='image-recentP-container' >
                <img src="/images/20567151.png" alt="projects" />
                <div className='projects-text-container'><TitleText6 /></div>
            </section>
            <section className='cards-section-container'>
                <Cards />
            </section>
        </div>
    )
}

export default page
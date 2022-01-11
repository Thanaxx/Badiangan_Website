import React from 'react'
import Awards from '../components/Awards-slide'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Lgu from '../components/Lgu'
import Newsmain from '../components/News-main'

function Home() {
    return (
        <>
            <Hero />
            <Awards />
            <Newsmain />
            <Jobs />
            <Lgu />
            <Contact />
        </>
    )
}

export default Home

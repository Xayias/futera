import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Analytics from "../components/Analytics"
import Newsletter from "../components/Newsletter"
import Cards from "../components/Cards"
import Footer from "../components/Footer"

const HomeDetails = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomeDetails
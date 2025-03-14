import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../compontents/Newsletter";

const HomeDetails = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
        </div>
    )
}

export default HomeDetails
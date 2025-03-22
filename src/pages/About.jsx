import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/aboutheaderbg.webp"

const AboutDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="About Futera"
                subtitle="Driven by innovation, Futera delivers next-gen networking, AI, and data security solutions for businesses shaping tomorrow."
                backgroundImage={headerImage}
            />
            <Footer />
        </div>
    )
}

export default AboutDetails;
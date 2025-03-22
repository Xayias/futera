import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/aboutheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/___"

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
            <Highlight 
                highlightTitle=""
                highlightSubtitle=""
                highlightImage={highlightImage}
                highlightParagraph=""
                highlightCTA=""
            />
            <Footer />
        </div>
    )
}

export default AboutDetails;
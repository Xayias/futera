import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/aboutheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/abouthighlight.webp"

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
                highlightTitle="Bringing Innovation for the Future"
                highlightSubtitle="PEOPLE THAT CONNECTS US ALL"
                highlightImage={highlightImage}
                highlightParagraph="We are a team dedicated to improving the wider internet and tech. Learn how we shape our enviornment to help and educate those dedicated to serving those through technology."
                highlightCTA="Read Our Story"
            />
            <Footer />
        </div>
    )
}

export default AboutDetails;
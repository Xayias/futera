import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/productsheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/serverhighlight.webp"

const CompanyDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="Explore Our Solutions"
                subtitle="At Futera, we design secure, scalable technology tailored for the modern world — from intelligent networking to AI-driven analytics."
                backgroundImage={headerImage}
            />
            <Highlight 
                highlightTitle="Low Throttle Networking"
                highlightSubtitle="PROVIDE HIGH SPEED CONNECTION"
                highlightImage={highlightImage}
                highlightParagraph="Keep your customers connected via fast internet speeds using our state of the art server farm services. Never worry about the status of your online services connectivity."
                highlightCTA="View Networking Solutions"
            />
            <Footer />
        </div>
    )
}

export default CompanyDetails;
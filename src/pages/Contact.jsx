import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/contactheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/___"

const ContactDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="Let’s Connect"
                subtitle="Whether you’re interested in a demo, partnership, or just have questions — our team is here to help."
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

export default ContactDetails;
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/contactheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/contacthighlight.webp"

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
                highlightTitle="We Are Always A Call or Email Away"
                highlightSubtitle="YOU HAVE QUESTIONS, WE HAVE ANSWERS"
                highlightImage={highlightImage}
                highlightParagraph="We are here to help you with any inquiries, questions or general feedback. Our 24/7 support staff is standing by to provide the quality assistance you deserve."
                highlightCTA="Contact Us Today"
            />
            <Footer />
        </div>
    )
}

export default ContactDetails;
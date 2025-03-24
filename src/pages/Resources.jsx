import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/resourcesheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/resourceshighlight.webp"

const ResourcesDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="Resources & Insights"
                subtitle="Stay ahead with Futera's latest thought leadership, technical documentation, product guides, and industry events."
                backgroundImage={headerImage}
            />
            <Highlight 
                highlightTitle="Aim for Innovation and Perfection"
                highlightSubtitle="GET ALL THE HELP YOU NEED"
                highlightImage={highlightImage}
                highlightParagraph="Seek out the information you need to expand your horizons and stay ahead of the curve to better serve your users and grow your business in the right ways. We offer rich resources such as documentation, guides and hold industry workshops nation wide."
                highlightCTA="Find The Best Recources For You"
            />
            <Footer />
        </div>
    )
}

export default ResourcesDetails;
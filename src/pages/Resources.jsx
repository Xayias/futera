import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/resourcesheaderbg.webp"

const ResourcesDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="Resources & Insights"
                subtitle="Stay ahead with Futera's latest thought leadership, technical papers, product guides, and industry reports."
                backgroundImage={headerImage}
            />
            <Footer />
        </div>
    )
}

export default ResourcesDetails;
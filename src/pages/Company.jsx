import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/productsheaderbg.webp"

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
            <Footer />
        </div>
    )
}

export default CompanyDetails;
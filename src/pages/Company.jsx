import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/productsheaderbg.webp"
import Highlight from "../components/Highlight"
import highlightImage from "../assets/serverhighlight.webp"
import ProductComparisonGrid from '../components/ProductComparisonGrid';
import Cards from '../components/Cards';

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
            <ProductComparisonGrid 
                products={[
                    { name: "Futera CORE" },
                    { name: "Futera AI" },
                    { name: "Futera SHIELD" },
                ]}
                features={[
                    { label: "Real-Time Monitoring", tooltip: "Monitor netowrk activity in real-time.", values: [true, true, false] },
                    { label: "Cloud Compatible", tooltip: "Works with AWS, Azure, and Google Cloud.", values: [true, true, true] },
                    { label: "AI Integration", tooltip: "Machine learning enhancements and prediction models.", values: [false, true, false] },
                    { label: "End-to-End Encryption", tooltip: "Full data encryption from device to destination.", values: [false, false, false] },
                    { label: "24/7 Support", tooltip: "Round-the-clock expert assistance.", values: [true, true, true] },
                ]}
            />
            <Cards />
            <Footer />
        </div>
    )
}

export default CompanyDetails;
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import headerImage from "../assets/productsheaderbg.webp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';

const CompanyDetails = () => {
    return (
        <div>
            <Navbar />
            {/* Add your company-specific content here */}
            <PageHeader 
                title="Our Products"
                subtitle="Futera Technologies is leading innovation in networking, machine learning, and data security."
                headerBG={headerImage}
            />
            <Footer />
        </div>
    )
}

export default CompanyDetails;
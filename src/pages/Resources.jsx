import React from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';

const ResourcesDetails = () => {
    return (
        <div>
            <Navbar />
            <h1>Resources</h1>
            <p>Futera Technologies is leading innovation in networking, machine learning, and data security.</p>
            {/* Add your company-specific content here */}
            <Footer />
        </div>
    )
}

export default ResourcesDetails;
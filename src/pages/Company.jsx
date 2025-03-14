import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const CompanyDetails = () => {
    return (
        <div>
            <Navbar />
            <h1>About the Company</h1>
            <p>Futera Technologies is leading innovation in networking, machine learning, and data security.</p>
            {/* Add your company-specific content here */}
        </div>
    )
}

export default CompanyDetails;
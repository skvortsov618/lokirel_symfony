import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Missing from './components/Missing';
import 'swiper/scss';
import Contacts from './components/Contacts';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';
import AgreementPopup from './components/AgreementPopup';

const Index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Missing />} />
            </Routes>
            <AgreementPopup />
        </Router>
    )
}

export default Index;
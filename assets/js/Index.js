import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Missing from './components/Missing';
import 'swiper/scss';
import Contacts from './components/Contacts';
import PrivacyPolicy from './components/PrivacyPolicy';
import Navbar from './components/Navbar';
import AgreementPopup from './components/AgreementPopup';
import {myTheme} from "./components/Landing/CustomComponents/customTheme";
import {ThemeProvider} from "@mui/material";
import AdminLogin from "./components/Admin/AdminLogin";
import Blog from "./components/Blog/Blog";
import AdminPanel from './components/Admin/AdminPanel';
import getCookie from './helpers/Helpers';

const Index = () => {
    
    return (
        <Router>
            <ThemeProvider theme={myTheme}>
                <Navbar/>
                <Routes>
                    <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/vhod" element={<AdminLogin/>}/>
                    <Route path="/admin" element={<AdminPanel/>}/>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="*" element={<Missing/>}/>
                </Routes>
                <AgreementPopup/>
            </ThemeProvider>
        </Router>
    )
}

export default Index;
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
import {getRole} from './helpers/Helpers';
import BlogPost from './components/Blog/BlogPost';
import AdminFeedback from './components/Admin/AdminFeedback';
import BlockCarousel from './components/Landing/BlockCarousel';
import AdminGallery from './components/Admin/AdminGallery';
import AdminArticles from './components/Admin/AdminArticles';
import AdminPost from './components/Admin/AdminPost';

const Index = () => {
    
    return (
        <Router>
            <ThemeProvider theme={myTheme}>
                <Navbar/>
                <Routes>
                    <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>
                    <Route path="blog/:post_slug" element={<BlogPost/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                    <Route exact path="/vhod" element={<AdminLogin/>}/>
                    {getRole() == 'admin' && <Route path="/admin" element={<AdminPanel/>}>
                        <Route index element={<div>WELCOME ADMIN</div>}/>
                        <Route path="/admin/articles/:post_id" element={<AdminPost/>} />
                        <Route path="/admin/articles" element={<AdminArticles/>} />
                        <Route path="/admin/gallery" element={<AdminGallery/>} />
                        <Route path="/admin/feedback" element={<AdminFeedback />} />
                    </Route>}
                    <Route exact path="/" element={<Landing/>}/>
                    <Route path="*" element={<Missing/>}/>
                </Routes>
                <AgreementPopup/>
            </ThemeProvider>
        </Router>
    )
}

export default Index;
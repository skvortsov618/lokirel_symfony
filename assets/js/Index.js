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
import AdminWelcome from './components/Admin/AdminWelcome';
import AdminLanding from './components/Admin/AdminLanding';
import AdminBlog from './components/Admin/AdminBlog';
import AdminPolicy from './components/Admin/AdminPolicy';
import AdminContacts from './components/Admin/AdminContacts';
import AdminFooter from './components/Admin/AdminFooter';
import AdminUsers from './components/Admin/AdminUsers';
import AdminCache from './components/Admin/AdminCache';

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
                        <Route index element={<AdminWelcome />}/>
                        <Route path="/admin/articles/:post_id" element={<AdminPost/>} />
                        <Route path="/admin/articles" element={<AdminArticles/>} />
                        <Route path="/admin/gallery" element={<AdminGallery/>} />
                        <Route path="/admin/landing" element={<AdminLanding/>} />
                        <Route path="/admin/blog" element={<AdminBlog/>} />
                        <Route path="/admin/feedback" element={<AdminFeedback />} />
                        <Route path="/admin/privacypolicy" element={<AdminPolicy/>} />
                        <Route path="/admin/contacts" element={<AdminContacts/>} />
                        <Route path="/admin/footer" element={<AdminFooter/>} />
                        <Route path="/admin/users" element={<AdminUsers/>} />
                        <Route path="/admin/cache" element={<AdminCache/>} />
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
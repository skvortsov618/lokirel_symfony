import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Missing from './components/Missing';



import 'swiper/scss';

const Index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Missing />} />
            </Routes>
        </Router>
    )
}

export default Index;
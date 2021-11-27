import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/scss';

class Home extends Component {

    render() {
        return (
            <div>
                <p>THIS COMES FROM REACT HOME</p>
                <Swiper
                    modules={[Mousewheel, Navigation]}
                    navigation
                    mousewheel
                    // direction={"vertical"}
                    onSlideChange={()=>console.log('slide change')}
                >
                    <SwiperSlide>SLIDE 1</SwiperSlide>
                    <SwiperSlide>SLIDE 2</SwiperSlide>
                    <SwiperSlide>SLIDE 3</SwiperSlide>
                    <SwiperSlide>SLIDE 4</SwiperSlide>
                </Swiper>
            </div>
        )
    }
}

export default Home;
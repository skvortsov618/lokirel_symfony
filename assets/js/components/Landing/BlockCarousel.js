import React from "react";
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss"
import SwiperCard from "./SwiperCard";

const BlockCarousel = () => {

    const carousel_title = "Спасенные нами растения";

    return ( 
        <div className="blockCarousel" style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white"
        }}>
            <h2 className="BlockCarousel__title" style={{
                textAlign: "center",
                color: "black",
                height: "10%"
            }}>
                { carousel_title }
            </h2>
            <Swiper 
                spaceBetween={50}
                slidesPerView={3}
                loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style= {{
                    height: 500,
                    margin: "0px 100px 0px 100px",
                    overflow: "hidden"
                }}
            >
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default BlockCarousel;
import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

import "swiper/scss"
import SwiperCard from "./SwiperCard";

const BlockCarousel = () => {

    const carousel_title = "Спасенные нами растения";

    return ( 
        <div className="blockCarousel">
            <h2 className="blockCarousel__title">
                { carousel_title }
            </h2>
            <div className="blockCarousel__swiper-container" style={{paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    slidesPerView={1}
                    spaceBetween={30}
                    //менять количество слайдов нужно в мобильной версии, скорее всего через пропсы прокидывать
                    //перед этим определяя с какого устройства человек сидит
                    //----вжух вжух  - breakpoints! для корректного отображения надо менять размер слайда в зависимости от размера экрана
                    loop
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        1000: {
                          slidesPerView: 3,
                        },
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                    style= {{
                        //не знаю как сдесь написать стиль не инлайн
                        height: '65vh',
                    }}
                >
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage="https://images7.alphacoders.com/451/451013.jpg" cardText="saorins"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
 
export default BlockCarousel;
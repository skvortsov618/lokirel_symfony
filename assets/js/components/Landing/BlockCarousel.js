import React from "react";
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss"
import SwiperCard from "./SwiperCard";

const BlockCarousel = () => {

    const carousel_title = "Спасенные нами растения";

    return ( 
        <div className="blockCarousel">
            <h2 className="blockCarousel__title">
                { carousel_title }
            </h2>
            <div className="blockCarousel__swiper-container">
                <Swiper
                    spaceBetween={10}
                    //менять количество слайдов нужно в мобильной версии, скорее всего через пропсы прокидывать
                    //перед этим определяя с какого устройства человек сидит
                    //----вжух вжух  - breakpoints! для корректного отображения надо менять размер слайда в зависимости от размера экрана
                    slidesPerView={1}
                    loop
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          width: 640,
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                    style= {{
                        //не знаю как сдесь написать стиль не инлайн
                        height: '65vh',
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
        </div>
    );
}
 
export default BlockCarousel;
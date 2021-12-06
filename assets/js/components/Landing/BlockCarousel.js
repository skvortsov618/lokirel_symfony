import React from "react";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import img01 from '../../../images/photos/carousel/01.png'
import img02 from '../../../images/photos/carousel/02.png'
import img03 from '../../../images/photos/carousel/03.jpg'
import img04 from '../../../images/photos/carousel/04.jpg'
import img05 from '../../../images/photos/carousel/05.jpg'
import img06 from '../../../images/photos/carousel/06.jpg'

import "swiper/scss"
import "swiper/scss/navigation"
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
                    <SwiperSlide><SwiperCard cardImage={img01} cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage={img02} cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage={img03} cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage={img04} cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage={img05} cardText="saorins"/></SwiperSlide>
                    <SwiperSlide><SwiperCard cardImage={img06} cardText="saorins"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
 
export default BlockCarousel;
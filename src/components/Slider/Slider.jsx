import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='mb-10 mt-20'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                
            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <h1>slide1</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <h1>slide2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <h1>slide3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <h1>slide4</h1>
                    </div>
                </SwiperSlide>
            </Swiper>


            {/* <div className="slide slide2">
                <h1>slide1</h1>
            </div>
            <div className="slide slide3">
                <h1>slide1</h1>
            </div>
            <div className="slide slide4">
                <h1>slide1</h1>
            </div> */}

        </div>
    );
};

export default Slider;
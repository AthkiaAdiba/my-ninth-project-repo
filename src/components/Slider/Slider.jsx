import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='mb-10 mt-16 lg:mt-20'>
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
                        <div className='flex items-center mr-0 md:mr-[300px] lg:mr-[500px]'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Awesome Family Home</h2>
                                <ul className='grid grid-cols-2 gap-y-2 text-base lg:text-xl font-medium mt-8'>
                                    <li>Living Room</li>
                                    <li>Private Balcony</li>
                                    <li>City Views</li>
                                    <li>Modern Kitchen</li>
                                </ul>
                                <div className='flex justify-between text-xl lg:text-3xl font-medium mt-8 lg:mt-14'>
                                    <p>$580,000</p>
                                    <p>12000 sq ft</p>
                                </div>
                                <Link><button className="mt-7 lg:mt-14 btn btn-outline hover:bg-gray-700 text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <div className='flex items-center mr-0 md:mr-[300px] lg:mr-[500px]'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Golden Oak Hideaway</h2>
                                <ul className='grid grid-cols-2 gap-y-2 text-base lg:text-xl font-medium mt-8'>
                                    <li>Living Room</li>
                                    <li>Swimming pool</li>
                                    <li>Kitchen</li>
                                    <li>Outdoor hot tub</li>
                                </ul>
                                <div className='flex justify-between text-xl lg:text-3xl font-medium mt-8 lg:mt-14'>
                                    <p>$430,000</p>
                                    <p>14000 sq ft</p>
                                </div>
                                <Link><button className="mt-7 lg:mt-14 btn btn-outline hover:bg-gray-700 text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <div className='flex items-center mx-7 lg:mx-0 mr-0 md:mr-[300px] lg:mr-[600px] ml-7 md:ml-0 lg:ml-8'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Serenity Haven Cottage</h2>
                                <ul className='grid grid-cols-2 gap-x-1 md:gap-x-5 lg:gap-x-0 gap-y-2 text-base lg:text-xl font-medium mt-8'>
                                    <li>Cozy living room</li>
                                    <li>Tranquil garden</li>
                                    <li>Fully equipped kitchen</li>
                                    <li>Relaxing outdoor patio</li>
                                </ul>
                                <div className='mr-6 lg:mr-0 flex justify-between text-xl lg:text-3xl font-medium mt-8 lg:mt-14'>
                                    <p>$620,000</p>
                                    <p>13000 sq ft</p>
                                </div>
                                <Link><button className="mt-7 lg:mt-14 btn btn-outline hover:bg-gray-700 text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <div className='flex items-center mx-7 lg:mx-0 mr-0 md:mr-[300px] lg:mr-[500px] ml-7 md:ml-0 lg:ml-8'>
                            <div className='font-roboto text-white'>
                                <h2 className='text-2xl lg:text-5xl font-bold'>Whispering Pines Retreat</h2>
                                <ul className='grid grid-cols-2 gap-y-2 gap-x-3 lg:gap-x-0 text-base lg:text-xl font-medium mt-8'>
                                    <li>Spacious living room</li>
                                    <li>Scenic walking trails</li>
                                    <li>Modern kitchen</li>
                                    <li>Private outdoor deck</li>
                                </ul>
                                <div className='mr-6 lg:mr-0 flex justify-between text-xl lg:text-3xl font-medium mt-8 lg:mt-14'>
                                    <p>$500,000</p>
                                    <p>14000 sq ft</p>
                                </div>
                                <Link><button className="mt-7 lg:mt-14 btn btn-outline hover:bg-gray-700 text-white">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
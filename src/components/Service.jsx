import React from 'react';

import Footer from '../layout/Footer';
import Breadcrumb from '../layout/Breadcrumb';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

class Service extends React.Component {

    constructor() {
        super();
    }

    render() {

        return(
            <>
               
                <Breadcrumb label="My Services" pageTitle="Service"></Breadcrumb>
                <section className="services spad">
                    <div className="spad-inner inner">
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-2.png" alt="" />
                                </div>
                                <h4>Scriptwriting and editing</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-1.png" alt="" />
                                </div>
                                <h4>Motion graphics</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-2.png" alt="" />
                                </div>
                                <h4>Scriptwriting and editing</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-3.png" alt="" />
                                </div>
                                <h4>Video distribution</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-4.png" alt="" />
                                </div>
                                <h4>Video hosting</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-4.png" alt="" />
                                </div>
                                <h4>Video hosting</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="logo spad">
                    <div className="logo-inner inner">
                        <Swiper
                            className="logo__carousel"
                            spaceBetween={15}
                            slidesPerView={5}
                            modules={[Autoplay]}
                            autoplay={true}
                            loop={true}
                            breakpoints={{
                                200: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-1.png" alt="" /></a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-2.png" alt="" /></a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-3.png" alt="" /></a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-4.png" alt="" /></a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-5.png" alt="" /></a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href="#" className="logo__item"><img src="/assets/img/logo/logo-6.png" alt="" /></a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    }
}

export default Service;
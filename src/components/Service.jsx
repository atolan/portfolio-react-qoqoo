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
                                <h4>Frontend Development</h4>
                                <p>
                                    I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals.<br />
                                    With strong knowledge of React and Vue and Redux, I can cleancode and make your site stylish and sophisticated.
                                </p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-1.png" alt="" />
                                </div>
                                <h4>Backend Development</h4>
                                <p>
                                    I have full skilled backend experience using Node.js and Django, Laravel.<br />
                                    You may have noticed my backend skills in design and implementation of a high-performance, secure, backend architecture.
                                </p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-2.png" alt="" />
                                </div>
                                <h4>NFT Development</h4>
                                <p>
                                    With Strong understanding and experience in developing blockchain and distributed ledger technologies, smart contracts, consensus algorithms I can be responsible for Development of NFT Marketplace, Game, staking and minting site.
                                    Main language is solidity and rust, C#.
                                </p>
                            </div>
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-3.png" alt="" />
                                </div>
                                <h4>Communication and Teamwork</h4>
                                <p>
                                    Excellent analytical, problem solving, communication, technical, multi-tasking and a motivated team player with excellent inter-personal skills
                                </p>
                            </div>
                        </div>
                        {/* <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-3.png" alt="" />
                                </div>
                                <h4>Deep Learning</h4>
                                <p>
                                    A Seasoned, highly skilled, and multifaceted AI professional.
                                </p>
                            </div>
                        </div> */}
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-4.png" alt="" />
                                </div>
                                <h4>DApps Development</h4>
                                <p>
                                    If you require a Web App or Decentralized Blockchain Application that is built efficiently and will function properly well into the future, I can develop it for you that you can easily maintain. 
                                </p>
                            </div>
                            
                        </div>
                        <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-4.png" alt="" />
                                </div>
                                <h4>Project Management</h4>
                                <p>
                                    Adept at managing operations and leading high-performance teams, to achieve quality results within the set deadlines, using strong motivational, advisory, technical, and communication skills.
                                </p>
                            </div>
                        </div>
                        {/* <div className="services-box">
                            <div className="services__item">
                                <div className="services__item__icon">
                                    <img src="/assets/img/icons/si-4.png" alt="" />
                                </div>
                                <h4>Unity Game Development</h4>
                                <p>Whether you’re halfway through the editing process, or you haven’t even started, our post
                                    production services can put the finishing touches.</p>
                            </div>
                        </div> */}
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
                                <div className="logo__item"><img src="/assets/img/logo/react.svg" alt="" /><p>React.js</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/vue.svg" alt="" /><p>Vue.js</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/node.svg" alt="" /><p>Node.js</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/laravel.svg" alt="" /><p>Laravel</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/django.svg" alt="" /><p>Django</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/ethereum.svg" alt="" /><p>Ethereum</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/rust.svg" alt="" /><p>Rust</p></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="logo__item"><img src="/assets/img/logo/solidity.svg" alt="" /><p>Solidity</p></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </>
        )
    }
}

export default Service;
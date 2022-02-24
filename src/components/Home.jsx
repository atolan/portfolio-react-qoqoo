import { Component } from "react";
import Count from './Count';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import data from '../data/data.json'

class Home extends Component {

    constructor(props)
    {
        super(props);
    }

    componentDidMount() {

        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });

    }

    render()
    {
        return(
            <>
                {/* <Header /> */}
                <main>
                    {/* <!-- Hero Section Begin --> */}
                    <section className="hero">
                        <Swiper 
                            className="hero__slider"
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[EffectFade, Autoplay]}
                            effect="fade"
                            autoplay={true}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide>
                                <div className="hero__item set-bg" data-setbg="/assets/img/hero/hero01.png">
                                    <div className="hero-box inner">
                                        <div className="hero__text">
                                            <span>For Website and Web System</span>
                                            <h2>Fullstack Developer’s Portfolio</h2>
                                            <a href="/about" className="primary-btn">See more about me</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero__item set-bg" data-setbg="/assets/img/hero/hero02.png">
                                    <div className="hero-box inner">
                                        <div className="hero__text">
                                            <span>For Dapps and NFT release</span>
                                            <h2>Blockchain Developer’s Portfolio</h2>
                                            <a href="/about" className="primary-btn">See more about me</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero__item set-bg" data-setbg="/assets/img/hero/hero03.png">
                                    <div className="hero-box inner">
                                        <div className="hero__text">
                                            <span>For Unity and NFT Game</span>
                                            <h2>Unity Game Developer’s Porfolio</h2>
                                            <a href="/about" className="primary-btn">See more about me</a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                    {/* <!-- Hero Section End --> */}

                    {/* <!-- Services Section Begin --> */}
                    <section className="services spad">
                        <div className="services-inner inner">
                            <div className="col-4">
                                <div className="services__title">
                                    <div className="section-title">
                                        <span>My Services</span>
                                        <h2>What Can I Do?</h2>
                                    </div>
                                    <p>If you hire me you will get a blockchain @ Fullstack professional to make your business to success and, once the project is over.</p>
                                    <a href="#" className="primary-btn">View all services</a>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="/assets/img/icons/si-3.png" alt="" />
                                        </div>
                                        <h4>Dapps Development</h4>
                                        <p>
                                            Development of Decentralized Applications like NFT Marketplace, DEX, Defi and NFT Games which uses Cryptocurrencies and Smart contract with Web3.js and React, Vue.<br />
                                            With the technology and know-how that can handle various developments, I flexibly provide what the client wants to develop.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="/assets/img/icons/si-1.png" alt="" />
                                        </div>
                                        <h4>Website Production</h4>
                                        <p>
                                            Produce general websites such as corporate websites, EC websites, and landing pages. <br />
                                            I will provide a more effective website that is close to the problems that our customers are having.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="/assets/img/icons/si-2.png" alt="" />
                                        </div>
                                        <h4>App Development</h4>
                                        <p>
                                            I ask about problems that could not be realized with existing products and services, and I am trying to develop according to your request.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="services__item__icon">
                                            <img src="/assets/img/icons/si-4.png" alt="" />
                                        </div>
                                        <h4>Web System Developement</h4>
                                        <p>
                                            I will develop and realize a system that "I wish there was something like this", such as communication and efficiency improvement within the company.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Services Section End --> */}

                    {/* <!-- Counter Section Begin --> */}
                    <section className="counter">
                        <div className="counter__content inner">
                            {data.counts.map(count => <Count key={count.id} data={count}/>)}
                        </div>
                    </section>
                    {/* <!-- Counter Section End --> */}

                    {/* <!-- Latest Blog Section Begin --> */}
                    <section className="latest spad">
                        <div className="inner">
                            <div className="section-title center-title">
                                {/* <span></span> */}
                                <h2>My Works</h2>
                            </div>
                            <Swiper 
                                className="latest__slider"
                                spaceBetween={15}
                                slidesPerView={3}
                                modules={[Pagination, Autoplay]}
                                autoplay={true}
                                loop={true}
                                breakpoints={{
                                    200: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                }}
                                >
                                {data.portfolios.map(portfolio => {
                                    return (
                                        <SwiperSlide key={portfolio.id}>
                                            <div className="blog__item latest__item" style={{backgroundImage: `url('/assets/img/portfolio/${portfolio.img}')`}}>
                                                <div>
                                                    <h4>{portfolio.title}</h4>
                                                    <ul>
                                                        <li>{portfolio.stacks}</li>
                                                    </ul>
                                                    <a href={portfolio.link} target="_blank">Site View<span className="arrow_right"></span></a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            
                        </div>
                    </section>
                    {/* <!-- Latest Blog Section End --> */}

                    {/* <!-- Call To Action Section Begin --> */}
                    <section className="callto spad set-bg" data-setbg="/assets/img/callto-bg.jpg">
                        <div className="callto__text inner">
                            <h2>Fresh Ideas, Fresh Moments Giving Wings to your Stories.</h2>
                            <a href="#">Start your stories</a>
                        </div>
                    </section>
                    {/* <!-- Call To Action Section End --> */}
                </main>
            </>
        )
    }
}

export default Home;
import React, { useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });
    });

    const filterPortfolio = (e, keyword) => {
        document.querySelector('.portfolio__filter .active').classList.remove('active');
        e.target.classList.add('active');
    }

    // const filterPortfolio =(keyword) => (e) => {
    //     console.log(keyword)
    // }

    return(
        <>
            {/* <Header /> */}

            <Breadcrumb label="Portfolio" pageTitle="Portfolio"/>

            <section className="portfolio spad">
                <div className="portfolio-inner inner">
                    <ul className="portfolio__filter">
                        <li className="active" data-filter="*" onClick={(e) => { filterPortfolio(e, 'all') } }>All</li>
                        {/* <li data-filter=".branding" onClick={ filterPortfolio('branding') }>Branding</li> */}
                        <li data-filter=".branding" onClick={(e) => { filterPortfolio(e, 'branding') } }>Branding</li>
                        <li data-filter=".digital-marketing" onClick={(e) => { filterPortfolio(e, 'digital-marketing') } }>Digital marketing</li>
                        <li data-filter=".web" onClick={(e) => { filterPortfolio(e, 'web') } }>Web</li>
                        <li data-filter=".photography" onClick={(e) => { filterPortfolio(e, 'photography') } }>Photography</li>
                        <li data-filter=" .ecommerce" onClick={(e) => { filterPortfolio(e, 'ecommerce') } }>eCommerce</li>
                    </ul>
                    <div className="portfolio__gallery">
                        <div className="mix branding">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-1.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mix digital-marketing">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-2.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <span>Photography</span>
                                </div>
                            </div>
                        </div>
                        <div className="mix web">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-3.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mix photography">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-4.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mix ecommerce">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-5.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <span>Photography</span>
                                </div>
                            </div>
                        </div>
                        <div className="mix branding">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-6.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mix web">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-7.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mix photography">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-8.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <span>Photography</span>
                                </div>
                            </div>
                        </div>
                        <div className="mix ecommerce">
                            <div className="portfolio__item">
                                <div className="portfolio__item__video set-bg" data-setbg="/assets/img/portfolio/portfolio-9.jpg">
                                </div>
                                <div className="portfolio__item__text">
                                    <h4>VIP Auto Tires & Service</h4>
                                    <ul>
                                        <li>eCommerce</li>
                                        <li>Magento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination__option">
                        <a href="#" className="arrow__pagination left__arrow"><span className="arrow_left"></span> Prev</a>
                        <a href="#" className="number__pagination">1</a>
                        <a href="#" className="number__pagination">2</a>
                        <a href="#" className="arrow__pagination right__arrow">Next <span className="arrow_right"></span></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;
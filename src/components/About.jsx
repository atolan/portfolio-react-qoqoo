import React, { useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';

import data from '../data/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });
    });

    return(
        <>
            <Breadcrumb label="About Me" pageTitle="About"/>

            <section className="about spad">
                <div className="about-inner inner">
                    <div className="about__text">
                        <div className="section-title">
                            <span>Fullstack & Blockchain Developer</span>
                            <h2>Who am I?</h2>
                        </div>
                        {/* <div className="about__part">
                            <div className="part">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="/assets/img/icons/si-3.png" alt="" />
                                    </div>
                                    <h4>Video distribution</h4>
                                    <p>Whether you’re halfway through the editing process, or you.</p>
                                </div>
                            </div>
                            <div className="part">
                                <div className="services__item">
                                    <div className="services__item__icon">
                                        <img src="/assets/img/icons/si-4.png" alt="" />
                                    </div>
                                    <h4>Video hosting</h4>
                                    <p>Whether you’re halfway through the editing process, or you.</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="about__text__desc">
                            <p>
                                Just a Passionate and Skilled Fullstack & Blockchain Developer with 7 years of experience in web and 3 years in blockchain.<br /><br />
                                My goal is to contribute my web & blockchain development expertise and customer service sales skills to your company. <br />
                                Believe your business currently serves real people with real issues and you need a dedicated webmaster to help build your business with responsibility, accountability, and exceptional service etiquette.<br /><br />
                                Looking for employment that utilizes my diverse business experience in Web & Blockchain Development and offers the opportunity for career advancement along with the further expansion of IT skills.
                            </p>
                            <h3>Educations</h3>
                            <h5>
                                Bachelor’s Degree, Tokyo University of Science, Tokyo
                            </h5>
                            <p>
                                ・ Major in Computer Science<br />
                                ・ Bachelor's Degree Computer Science<br />
                                ・ GPA: 4.0
                            </p>
                        </div>
                    </div>
                    <div className="about__pic">
                        <div className="about__pic--ttl clear">
                            <h3>Skills</h3>
                        </div>
                        <div className="skill-wrapper">
                            {data.skills.map(skill => {
                                return(
                                    <div className="progress clear" key={skill.id}>
                                        <div className="skill-name">{ skill.label }</div>
                                        <div className="skill-bar">
                                            <div className="bar" style={{width:`${ skill.percentage }%`}}></div>
                                        </div>
                                        <div className="skill-lavel" data-skill-value="90%">{ skill.percentage }%</div>
                                    </div>
                                )
                            })}
                        </div> 
                    </div>
                </div>
            </section>

            <section className="testimonial spad set-bg" data-setbg="/assets/img/testimonial-bg.jpg">
                <div className="section-title center-title">
                    <span>Loved By Clients</span>
                    <h2>What clients say?</h2>
                </div>
                <div className="testimonial__slider inner">

                    <Swiper 
                        className="testimonial__slider"
                        spaceBetween={15}
                        slidesPerView={3}
                        modules={[Pagination, Autoplay]}
                        autoplay={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
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
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial__item">
                                <div className="testimonial__text">
                                    <p>Delivers such a great service that it can benefit all kinds of people from any number
                                        of industries.</p>
                                </div>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Krista Attorn</h5>
                                        <span>Web Designer</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default About;
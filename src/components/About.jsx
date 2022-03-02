import React, { useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Preloader from '../layout/Preloader';
import WaterWave from 'react-water-wave';
import Background from "/assets/img/testimonial-bg.jpg";

import data from '../data/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

const About = () => {

    useEffect(() => {
        var backgroundElments = document.querySelectorAll('.set-bg');
        backgroundElments.forEach(function (elem) {
            var bg = elem.getAttribute('data-setbg');
            elem.style.backgroundImage = 'url(' + bg + ')';
        });

        setTimeout(() => {
            document.querySelector('.preloader').style.display = "none";  
        }, 1000);
    });

    return(
        <>
            <Preloader />
            <Breadcrumb label="About Me" pageTitle="About"/>

            <section className="about spad">
                <div className="about-inner inner">
                    <div className="about__text">
                        <div className="section-title">
                            <span>Fullstack & Blockchain Developer</span>
                            <h2>Who am I?</h2>
                        </div>
                        <div className="about__text__desc">
                            <p>
                                Just a Passionate and Skilled Fullstack & Blockchain Developer with 7 years of experience in web and 3 years in blockchain.<br /><br />
                                My goal is to contribute my web & blockchain development expertise and customer service sales skills to your company. <br />
                                Believe your business currently serves real people with real issues and you need a dedicated webmaster to help build your business with responsibility, accountability, and exceptional service etiquette.<br /><br />
                                Looking for employment that utilizes my diverse business experience in Web & Blockchain Development and offers the opportunity for career advancement along with the further expansion of IT skills.
                            </p>
                        </div>
                        <a href="/assets/cv_yoshino.pdf" target="_blank" className="primary-btn">View Resume</a>
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
                    <div className="about__edu">
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
                    <div className="about__edu">
                        <h3>Employment History</h3>
                        <h5>Senior Engineer & PM, Trenser Technology Solutions (P), Tokyo</h5>
                        <p className="date">Feb 2014 – Nov 2016</p>
                        <p>
                            ・Design and development of Invoice generation via email and printer using Jasper Reports.<br />
                            ・Took part in the production management system and business management system. I was charge of
                            backend and frontend. I used vue as a frontend framework and laravel as a backend framework.I
                            succeeded here, so promoted to PM and contributed sales improvement of company.<br />
                            ・Developed front-end applications using ReactJS, Flux, NodeJS and Docker and Built Spring based
                            Java and Scala services to support Enterprise Web application
                        </p>
                        <h5>Senior Engineer, Cellid Co., Ltd., Tokyo</h5>
                        <p className="date">Jan 2017 – Aug 2019</p>
                        <p>
                            ・Engaged in R&D work in the NLP field of Deep Learning and speed-up work of code for GPU, and
                            was in charge of the project leader.<br />
                            ・Developed a UI that overlays digital information on a large-scale real space and visualizes it.<br />
                            ・In particular, developed applications for various devices such as Android and iOS using Unity.<br />
                            ・Took part in Ethereum based NFT Gift Card and NFT Point Reward Platform.<br />
                            https://amaten.io/
                        </p>
                        <h5>Fullstack & Blockchain Developer, Freelancer</h5>
                        <p className="date">Jan 2020 –</p>
                        <p>
                            ・Content integrated management system using CMS<br />
                            Web system for delivering content appropriately and quickly to new channels that are increasing day
                            by day. All content publishing is done through the API. It is possible to obtain accurate information
                            that needs to be known about the daily work efficiency of staff. It is possible to classify the report on
                            the monitoring category into the required conditions and output it.<br />
                            -By migrating the server to the data center, we are making efforts not only for troubleshooting when
                            replacing the system, but also for security and disaster countermeasures.<br />
                            -Reduced man-hours by 23% by reducing the burden of server operation and integrating accounting
                            and personnel salary data.<br />
                            ・Online payment system of card company (WEB version)<br />
                            Undertook and developed a WEB system that allows online payment using the card balance.
                            Interviewed sales employees who usually use the system, and designed it so that they could pick up
                            and improve the efficiency of personal work that requires man-hours.
                            The system had the following configuration.<br />
                            -Browser plugin: Introduced for transaction security<br />
                            -Membership website (interface)<br />
                            -Communication server with VAN server (backend)
                        </p>
                    </div>
                </div>
            </section>
            <WaterWave
                style={{
                    paddingTop: "100px",
                    paddingBottom: "50px",
                    backgroundSize: "contain",
                    overflow: "hidden",
                    background: `url(${Background}) no-repeat top center`
                  }}
                  dropRadius={20}
                  perturbance={0.01}
                  interactive={true}
            >
                {() => {
                    return(
                        <>
                            <div className="section-title center-title">
                                <span>Loved By Clients</span>
                                <h2>What clients say?</h2>
                            </div>
                            <div className="testimonial__slider inner">

                                <Swiper 
                                    className="testimonial__slider"
                                    spaceBetween={15}
                                    slidesPerView={3}
                                    modules={[Pagination, Navigation, Autoplay]}
                                    autoplay={true}
                                    loop={true}
                                    // navigation
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
                                                <p>
                                                    お仕事内容も的確に指示していただき、スムーズに作業ができました。メッセージの返信も早く、契約からお支払いまで、敏速にご対応頂けました。今後も一緒にお仕事をさせていただきたい信頼できるクライアントさんでした。修正指示も非常に親切でした。プロジェクトをより迅速に、完全に実行していなかったのが残念です。これから良い縁になることを希望します。次の機会には、品質を確保するために最善を尽くいたします。ありがとうございました。
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>山口博美</h5>
                                                    <span>Photographer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item">
                                            <div className="testimonial__text">
                                                <p>
                                                    {/* この度は誠にありがとうございました。
                                                    とてもいいホームページが完成してとても満足です。
                                                    細かい指定にも柔軟に対応して頂き感謝致します。
                                                    また機会ございましたらよろしくお願い致します。 */}
                                                    Thank you very much for this time.<br />
                                                    Very happy that a very good homepage has been completed.
                                                    Thank you for your flexibility in responding to detailed specifications.<br />
                                                    If you have another chance, thank you.
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>Zechariah Beer</h5>
                                                    <span>Individual Store Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item">
                                            <div className="testimonial__text">
                                                <p>
                                                    {/* 納期に関しまして遅れたのですが、その後のやり取りで丁寧に対応していただき、修正も問題なくおこなっていただきました。
                                                    ありがとうございます。
                                                    納期に関してが不安でしたが、納期を守っていただける上てあれば再度依頼したいと考えております。 */}
                                                    Although the delivery date was delayed, I received a polite response in the subsequent exchanges and made corrections without any problems.<br />
                                                    Thank you very much.<br />
                                                    I was worried about the delivery date, but I would like to request it again if I can meet the delivery date.
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>Tomoya Miyazawa</h5>
                                                    <span>Individual entrepreneur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item">
                                            <div className="testimonial__text">
                                                <p>
                                                {/* 素晴らしいランサーさんです。
                                                お手軽な料金設定に加えて、レスポンスの速さ、納品物のクオリティ、どれをとっても大満足です。
                                                今後とも長くお付き合いさせていただければと思います。 */}
                                                    A wonderful freelancer.<br />
                                                    In addition to easy pricing, very satisfied with the speed of response and the quality of the deliverables.<br />
                                                    I hope to continue to be with you for a long time.
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>Lenny Rosenbaum</h5>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item">
                                            <div className="testimonial__text">
                                                <p>
                                                    {/* 驚くほど仕事のできる方です。
                                                    こちらの仕様書から更に良くなるように提案していただいたり、納期も前倒しで収めていただきました。
                                                    デザインも一級品ですので安心して仕事をお願いできました。
                                                    是非次回もよろしくお願いします！ */}
                                                    A person who can work surprisingly.<br />
                                                    From this specification, I asked you to make a suggestion to make it even better, and I also received the delivery date ahead of schedule.<br />
                                                    The design is also first-class, so I was able to ask for work with confidence.
                                                    I look forward to working with you next time!
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>Megane Kirlin</h5>
                                                    <span>AI-related business owners</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial__item">
                                            <div className="testimonial__text">
                                                <p>
                                                    {/* とても細かく連絡を取り合うことができました。
                                                    また、都度発生したこちらの変更等の要望に対して丁寧に対応してくださりました。非常に信頼できるワーカー様です。
                                                    今後ともよろしくお願いいたします。 */}
                                                    I was able to keep in touch with them in great detail.<br />
                                                    In addition, he politely responded to requests such as changes that occurred each time. A very reliable worker.<br />
                                                    I look forward to working with you in the future.
                                                </p>
                                            </div>
                                            <div className="testimonial__author">
                                                <div className="testimonial__author__pic">
                                                    <img src="/assets/img/testimonial/ta-1.jpg" alt="" />
                                                </div>
                                                <div className="testimonial__author__text">
                                                    <h5>Maeda</h5>
                                                    <span>IT consultant</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* AI、OpenCV、TensorFlow、keras、MNIST、scipyを使用して画像処理を行っています。
                                    サッカー試合分析ウェブシステム、ロボット視覚システムの開発、スズメ種類識別、競馬分析、筆記体認識などを行いました。
                                    深層学習は基本的にRoboflow、kaggle、Google Colabを利用して行われました。
                                    現在はyolov5を多く利用しています。 */}
                                </Swiper>
                            </div>
                        </>
                    )
                } 
                }
            </WaterWave>
            
        </>
    )
}

export default About;
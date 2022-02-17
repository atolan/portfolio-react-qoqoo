import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Breadcrumb from '../layout/Breadcrumb';


class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return(
            <>
                <Header />
    
                <Breadcrumb label="Contact Me" pageTitle="Contact"/>
    
                <section className="contact-widget spad">
                    <div className="contact-inner inner">
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Address</h4>
                                    <p>Los Angeles Gournadi, 1230 Bariasl</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Hotline</h4>
                                    <p>1-677-124-44227 • 1-688-356-66889</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Email</h4>
                                    <p>Support@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
                <section className="contact spad">
                    <div className="contact-inner inner">
                        <div className="contact__form">
                            <h3>Get in touch</h3>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Email" />
                                <textarea placeholder="Message"></textarea>
                                <button type="submit" className="site-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
    
                <Footer />
            </>
        )   
    }
    
}

export default Contact;
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../layout/Breadcrumb';
import Preloader from '../layout/Preloader';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = (fieldName) => e => {
        this.setState({
            [fieldName]: e.target.value
        });
    }

    handleSumit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;
        alert('Something went wrong, please try again later');
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    componentDidMount() {
        setTimeout(() => {
            document.querySelector('.preloader').style.display = "none";  
        }, 1000);
    }

    render() {

        const {name, email, message} = this.state;

        return(
            <>
                <Preloader />
                <Breadcrumb label="Contact Me" pageTitle="Contact"/>
    
                <section className="contact-widget spad">
                    <div className="contact-inner inner">
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <img src="/assets/img/icons/email.png" alt="" />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Email</h4>
                                    <a href="mailto:kself651120@gmail.com">kself651120@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <img src="/assets/img/icons/skype.png" alt="" />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Skype ID</h4>
                                    <a href="skype:live:.cid.bbb9b9699ea43b9c">skype:live:.cid.bbb9b9699ea43b9c</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <img src="/assets/img/icons/telegram.png" alt="" />
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Telegram</h4>
                                    <a href="https://t.me/atolan1216">@atolan1216</a>
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
                                <input type="text" value={name} onChange={this.handleChange("name")} placeholder="Name" />
                                <input type="text" value={email} onChange={this.handleChange("email")} placeholder="Email" />
                                <textarea placeholder="Message" value={message} onChange={this.handleChange("message")}></textarea>
                                <button type="submit" onClick={this.handleSumit} className="site-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )   
    }
    
}

export default Contact;
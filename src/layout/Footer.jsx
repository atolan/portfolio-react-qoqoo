import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Footer extends Component {

    render() {

        return(
            <footer className="footer">
                <div className="footer-inner inner">
                    <div className="footer__top">
                        <div className="footer__top__logo">
                            <a href="/"><img src="assets/img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="footer__option">
                        <div className="footer__option__item">
                            <h5>About Me</h5>
                            <p>
                                A Passionate and Skilled Fullstack and Blockchain Developer.<br />
                                I am confidence in Web and App Development with React, Node.js and Django.<br />
                                Also I can help you in high-performance, secure, scalable Dapps and NFT Game Development.
                            </p>
                            <a href="#" className="read__more">Read more <span className="arrow_right"></span></a>
                        </div>
                        <div className="footer__option__item">
                            <h5>Who we are</h5>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/service">Services</NavLink></li>
                                <li><NavLink to="/history">History</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer__option__item">
                            <h5>Our work</h5>
                            <ul>
                                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><a href="https://github.com/atolan" target="_blank">GitHub</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright__text">Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | This portfolio is made with by Haruki Yoshino
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
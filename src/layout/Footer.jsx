import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Footer extends Component {

    render() {

        return(
            <footer className="footer">
                <div className="footer-inner inner">
                    <div className="footer__top">
                        <div className="footer__top__logo">
                            <a href="#"><img src="assets/img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="footer__option">
                        <div className="footer__option__item">
                            <h5>About us</h5>
                            <p>Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service
                                production company specializing.</p>
                            <a href="#" className="read__more">Read more <span className="arrow_right"></span></a>
                        </div>
                        <div className="footer__option__item">
                            <h5>Who we are</h5>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer__option__item">
                            <h5>Our work</h5>
                            <ul>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright__text">Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                aria-hidden="true"></i> by Colorlib
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
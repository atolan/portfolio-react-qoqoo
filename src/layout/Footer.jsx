import { Component } from "react";

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
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Locations</a></li>
                            </ul>
                        </div>
                        <div className="footer__option__item">
                            <h5>Our work</h5>
                            <ul>
                                <li><a href="#">Feature</a></li>
                                <li><a href="#">Latest</a></li>
                                <li><a href="#">Browse Archive</a></li>
                                <li><a href="#">Video for web</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <p className="footer__copyright__text">Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                                aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
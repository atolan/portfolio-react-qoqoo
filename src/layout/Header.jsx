import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {

  componentDidMount() {
      // document.getElementById("preloder").style.opacity = "0";
      // setTimeout(() => {
      //   document.querySelector(".loader").style.opacity = "0";  
      // }, 200);
  }

  render() {

    return(
      <>
        {/* <div id="preloder">
            <div className="loader"></div>
        </div> */}

        <header className="header">
            <div className="header-inner inner">
                <div className="header__logo">
                    <a href="/">
                      <img src="/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className="header__nav__option">
                    <nav className="header__nav__menu mobile-menu">
                        <ul>
                            <li className="active"><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/history">History</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
      </>
    )
  }
}

export default Header;
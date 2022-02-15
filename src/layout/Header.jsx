import { Component } from "react";

class Header extends Component {

  render() {

    return(
      <>
        {/* <div id="preloder">
            <div className="loader"></div>
        </div> */}

        <header className="header">
            <div className="header-inner inner">
                <div className="header__logo">
                    <a href="./index.html">
                      <img src="/assets/img/logo.png" alt="" />
                    </a>
                </div>
                <div className="header__nav__option">
                    <nav className="header__nav__menu mobile-menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./about.html">About</a></li>
                            <li><a href="./portfolio.html">Portfolio</a></li>
                            <li><a href="./services.html">Services</a></li>
                            <li><a href="./history">History</a></li>
                            <li><a href="./contact.html">Contact</a></li>
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
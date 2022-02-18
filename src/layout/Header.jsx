import { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={tab:1}
  }

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
                            <li className={this.state.tab==1?"active":""}><NavLink to="/"  onClick={()=>{this.setState({tab:1})}}>Home</NavLink></li>
                            <li className={this.state.tab==2?"active":""} ><NavLink onClick={()=>{this.setState({tab:2})}} to="/about">About</NavLink></li>
                            <li className={this.state.tab==3?"active":""} ><NavLink onClick={()=>{this.setState({tab:3})}} to="/portfolio">Portfolio</NavLink></li>
                            <li className={this.state.tab==4?"active":""} ><NavLink onClick={()=>{this.setState({tab:4})}} to="/service">Services</NavLink></li>
                            <li className={this.state.tab==5?"active":""} ><NavLink onClick={()=>{this.setState({tab:5})}} to="/history">History</NavLink></li>
                            <li className={this.state.tab==6?"active":""} ><NavLink onClick={()=>{this.setState({tab:6})}} to="/contact">Contact</NavLink></li>
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
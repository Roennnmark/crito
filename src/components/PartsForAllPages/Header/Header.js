import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../../assets/images/Logo-1.svg'

const Header = () => {
  return (
    <header>
        
        <div className="container">
            <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>

            <Link to="/"><img className="logotype" src={Logo} alt="crito logotype" /></Link>

            <div className="contactinformation-bar">
                <div className="content-box">
                    <i className="fa-sharp fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="socialmedia-bar">
                    <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></Link>
                    <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
            <div className="menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/detailnews">News Detail</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
                <a className="btn-yellow" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </header>
  )
}

export default Header
import React from 'react';
import Logo from '../../assets/images/Logo-1.svg'
import footerLines from '../../assets/images/lines-5.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="footer-info-bar">
            <div className="container">
                <button className="btn-menubars-2"><i className="fa-solid fa-bars-staggered"></i></button>
                <div className="info-and-links">
                    <div className="logo-text">
                        <img src={Logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="info-gadgets">
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Features</p>
                        <p>Works</p>
                        <p>Career</p>
                    </div>
                    <div className="info-gadgets">
                        <h3>Help</h3>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="info-gadgets">
                        <h3>Resources</h3>
                        <p>Free eBooks</p>
                        <p>Development Tutorial</p>
                        <p>How to - Blog</p>
                        <p>Youtube Playlist</p>
                    </div>
                    <div className="info-gadgets">
                        <h3>Link</h3>
                        <p>Free Ebooks</p>
                        <p>Development Tutorial</p>
                        <p>How to - Blog</p>
                        <p>Youtube Playlist</p>
                    </div>
                </div>
            </div>
            <div className="lines-footer"><img src={footerLines} alt="lines-for-footer" /></div>
        </div>
        <div className="footer-bar">
            <div className="container">
                <div className="rights-bar">
                    <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                </div>
                <div className="media-social">
                    <Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></Link>
                    <Link to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
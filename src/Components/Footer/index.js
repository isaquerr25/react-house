/* eslint-disable import/no-anonymous-default-export */
import './style.css'
import logo from '../../img/logo.svg';
import { render } from 'react-dom'
import { FaLinkedin, FaFacebook, FaTwitterSquare, FaInstagramSquare, FaArrowAltCircleRight } from "react-icons/fa";


export default ()=>{
    return (
        <div className="conten-footer">
            <div className="conten-msn">
                <img src={logo} alt="Real Estate" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul>
                    <li><FaLinkedin className='react-icons' /></li>
                    <li><FaFacebook  className='react-icons'/></li>
                    <li><FaTwitterSquare className='react-icons'/></li>
                    <li><FaInstagramSquare className='react-icons'/></li>
                </ul>
                <p>© 2021 . All rights reserved.</p>
            </div>
            <div className="conten-lists">
                <div>
                    <h3>Take a tour</h3>
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Our Company</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Agents</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Media</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="conten-subscribe">
                <h3>Subscribe</h3>
                <p>Subscribe to get latest property, blog news from us</p>
                <div className='input-lup' >
                    <input type="text" placeholder='Email Address' />
                    <FaArrowAltCircleRight className="lupa" />
                </div>
                
            </div>
        </div>
    )
}
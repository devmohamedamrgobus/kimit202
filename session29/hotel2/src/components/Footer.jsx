import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img/Image-01.jpg.webp'
import img2 from '../assets/img/Image-02.jpg.webp'
import img3 from '../assets/img/Image-03.jpg.webp'
import img4 from '../assets/img/Image-04.jpg.webp'
import img5 from '../assets/img/Image-05.jpg.webp'
import img6 from '../assets/img/Image-06.jpg.webp'
import img7 from '../assets/img/Image-07.jpg.webp'
import img8 from '../assets/img/Image-08.jpg.webp'

export default function Footer() {
  return (
    <>
    <footer className="footer">
        <div className="left-footer">
            <div className="foot">
                <h6 className="footer_title">About Agency</h6>
                <p>The world has become so fast paced <br/>that people don’t want to stand by <br/> reading a page of information, they <br/> would much rather look at a<br/>presentation and understand the <br/> message. It has come to a point </p>
            </div>
            <div className="foot">
                <h6 className="footer_title">Navigation Links</h6>
                <div className="foot1">
                    <ul className="list_style">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">Feature</Link></li>
                        <li><Link to="#">Services</Link></li>
                        <li><Link to="#">Portfolio</Link></li>
                        </ul>
                </div>
                <div className="foot2">
                    <ul className="list_style">
                        <li><Link to="#">Team</Link></li>
                        <li><Link to="#">Pricing</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        </ul>
                </div>
            </div>
        </div>
        <div className="right_footer">
            <div className="r1">
                <h6 className="footer_title">Newsletter</h6>
                <p>For business professionals caught <br/> between high OEM price and <br/> mediocre print and graphic output, </p>
                <div className="input">
                    <input name="EMAIL" placeholder="Email Address " onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email" />
                    <button className="sub-btn"><i className="fa-solid fa-location-arrow"></i></button>
                    </div>
            </div>
            <div className="r1">
                <h6 className="footer_title">InstaFeed</h6>
                <div className="footer-photos">
                    <div className="p"><img src={img1} alt="" /></div>
                    <div className="p"><img src={img2} alt="" /></div>
                    <div className="p"><img src={img3} alt="" /></div>
                    <div className="p"><img src={img4} alt="" /></div>
                    <div className="p"><img src={img5} alt="" /></div>
                    <div className="p"><img src={img6} alt="" /></div>
                    <div className="p"><img src={img7} alt="" /></div>
                    <div className="p"><img src={img8} alt="" /></div>
                </div>
            </div>
        </div>
        <hr />
        <div className="foot-links">
            <div className="copyright">
                <p className="c-copyright">
                    Copyright © 2024 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i> by<span> Colorlib</span>
                    </p>
            </div>
            <div className="media">
                <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="#"><i className="fa-brands fa-dribbble"></i></Link>
                <Link to="#"><i className="fa-brands fa-behance"></i></Link>
            </div>

        </div>
    </footer>
    </>
  )
}

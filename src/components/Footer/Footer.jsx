import React from "react";
import logo from "../../assets/logo/logo-white.png"
import fb from "../../assets/social/fb.png"
import ig from "../../assets/social/ig.png"
import tw from "../../assets/social/tw.png"
import ln from "../../assets/social/ln.png"
import image1 from "../../assets/bg/news-image1.png"
import image2 from "../../assets/bg/news-image2.png"
import image3 from "../../assets/bg/news-image3.png"
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-section__wrapper">
      <div className="container">
        <div className="footer-section__container">
          <div className="box1">
            <div className="logo-wrapper">
              <img src={logo} alt="HOVATRAVELS" />
            </div>
            <p>We are committed to giving the most wonderful travel experience through offering the most user friendly online booking solutions on the market. Mobile, tablet, laptop & desktop users enjoy a fully tailored experience while browsing our travel portal. We boast your travel experience with our technology.</p>
            <button>Read More</button>
          </div>
          <div className="box2">
            <ul>
              <h5>Quick Links</h5>
              <li>Login</li>
              <li>Register</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact Us</li>
              <li>Bill Payment</li>
              <li>Manage Booking</li>
            </ul>
          </div>
          <div className="box3">
            <div className="box3-t">
              <h5>Popular Tags</h5>
              <div className="tags__container">
              <p className="tags">
                Flights
              </p>
              <p className="tags">
                Hotels
              </p>
              <p className="tags">
                Hovapay
              </p>
              <p className="tags">
                Hovasms
              </p>
              </div>
            </div>
            <div className="box3-b">
              <h5>Follow Us</h5>
              <p>Follow us on our social media handles to access more sweet deals
              </p>
              <ul className="sm-links">
                <li>
                  <a href="/">
                    <img src={fb} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={ig} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={tw} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={ln} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="box4">
            <h5>Recent News</h5>
            <div className="news-container">
                <img src={image1} alt="" />
                <div className="news-content">
                    <p>MANCHESTER UNITED <br/>TOURIST ATTACTIONS</p>
                    <span>June 29, 2022</span>
                </div>
            </div>
            <div className="news-container">
                <img src={image2} alt="" />
                <div className="news-content">
                    <p>MANCHESTER UNITED <br/>TOURIST ATTACTIONS</p>
                    <span>June 29, 2022</span>
                </div>
            </div>
            <div className="news-container">
                <img src={image3} alt="" />
                <div className="news-content">
                    <p>MANCHESTER UNITED <br/>TOURIST ATTACTIONS</p>
                    <span>June 29, 2022</span>
                </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
            <p>2022 Hovatravel Limited. All rights reserved</p>
            <ul className="flinks">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

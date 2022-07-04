import React, { useState } from "react";
import logo1 from "../../assets/logo/logo1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import call from "../../assets/social/call.png";
// import whatsapp from "../../assets/social/Whatsapp.png";
// import mail from "../../assets/social/mail.png";
import flag from "../../assets/icons/flag.png";
import dp from "../../assets/icons/dropdown.png";
import menuBtn from "../../assets/icons/hamburger.png";
import closeBtn from "../../assets/icons/close-btn.png";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // =============Navigattion bar container=====================//
    <div className="navbar__container">
      {/* Navigation (left) container */}
      <div className="logo__container">
        <Link to="/">
          <img src={logo1} alt="Hovapay" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-left-links__container">
        <li>
          <Link to="">flights</Link>
        </li>
        <li>
          <Link to="">hotels</Link>
        </li>
        <li className="more-dropdown">
          <Link to="">More</Link>
          <img src={dp} alt="" className="" />
          <div className="support-dropdown-content">
            <div className="support-dropdown-item">
              <img src={flag} alt="" className="support-item-img" />
              <span>NGN</span>
            </div>
            <div className="support-dropdown-item">
              <a href="https://api.whatsapp.com/send/07044040403">Home</a>
            </div>
            <div className="support-dropdown-item">
              <a href="mailto:support@hovapay.ng">Hovapay</a>
            </div>
            <div className="support-dropdown-item">
              <a href="mailto:support@hovapay.ng">Hovasms</a>
            </div>
          </div>
        </li>
      </ul>

      {/* Navigation (right) container */}
      <ul className="navbar-right-side__container">
        {/* <div className="support-dropdown">
          <li>support</li>
          <div className="support-dropdown-content">
            <div className="support-dropdown-item">
              <img src={call} alt="" className="support-item-img" />
              <a href="tel:+2347044040403">0704 404 0403</a>
            </div>
            <div className="support-dropdown-item">
              <img src={whatsapp} alt="" className="support-item-img" />
              <a href="https://api.whatsapp.com/send/07044040403">WhatsApp</a>
            </div>
            <div className="support-dropdown-item">
              <img src={mail} alt="" className="support-item-img" />
              <a href="mailto:support@hovapay.ng">support@hovapay.ng</a>
            </div>
          </div>
        </div>
        <li className="currency">
          <img src={flag} alt="" />
          <span>NGN</span>
        </li> */}
        <li className="help">Help</li>
        <li className="manage">Manage My Booking</li>
        <div className="btn-container">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
        <li className="hamburger-menu">
          <img src={menuBtn} alt="" onClick={() => setOpenMenu(true)} />
        </li>
        {openMenu && (
          <div className="menu">
            <img
              src={closeBtn}
              alt=""
              onClick={() => setOpenMenu(false)}
              className="close-btn"
            />
            <ul className="m-nav__container">
              <li className="m-nav-items" onClick={() => setOpenMenu(false)}>
                Flights
              </li>
              <li className="m-nav-items" onClick={() => setOpenMenu(false)}>
                Hotels
              </li>
              <li className="m-nav-items" onClick={() => setOpenMenu(false)}>
                Bill Payment
              </li>
              <li className="more-dropdown">
                <div className="m-nav-flex">
                  <Link to="">More</Link>
                  <img src={dp} alt="" className="" />
                </div>
                <div className="support-dropdown-content">
                  <div className="support-dropdown-item m-nav-flex">
                    <img src={flag} alt="" className="support-item-img" />
                    <span>NGN</span>
                  </div>
                  <div className="support-dropdown-item">
                    <a href="https://api.whatsapp.com/send/07044040403">Home</a>
                  </div>
                  <div className="support-dropdown-item">
                    <a href="mailto:support@hovapay.ng">Hovapay</a>
                  </div>
                  <div className="support-dropdown-item">
                    <a href="mailto:support@hovapay.ng">Hovasms</a>
                  </div>
                </div>
              </li>
              <li className="m-nav-items" onClick={() => setOpenMenu(false)}>
                <div className="m-nav-flex">
                  <p>Currency</p>
                  <img src={flag} alt="" />
                </div>
              </li>
              <li onClick={() => setOpenMenu(false)}>Manage Booking</li>
              <div className="btn-container">
                <button className="login">Login</button>
                <button className="register">Register</button>
              </div>
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

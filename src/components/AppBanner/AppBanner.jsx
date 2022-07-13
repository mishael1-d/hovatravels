import React from "react";
import appBanner from "../../assets/bg/app.png";
import IOS from '../../assets/icons/IOS-image.png'
import Andriod from '../../assets/icons/Play-store.png'
import qr from '../../assets/icons/app-qr.svg'
import './AppBanner.css'

function AppBanner() {
  return (
    <div className="app-banner__wrapper">
      <div className="container">
        <div className="app_advert_container">
          <img src={appBanner} alt="" className="advert_img" />
          <div className="app-advert__content">
            <h2>Get an Amazing Mobile App Experience</h2>
            <p>
              Download our Mobile App free today to book your flights, hotels,
              and visas and get amazing deals on the go!
            </p>
            <div className="download-links">
              <div className="store-links">
                  <img src={IOS} alt="" className="d-links ios"/>
                  <img src={Andriod} alt="" className="d-links" />
              </div>
              <p>OR</p>
              <div className="qr-code-link">
                  <img src={qr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;

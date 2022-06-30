import React from "react";
import fingerprint from "../../assets/icons/fingerprint.png"
import lcd from "../../assets/icons/Lcd.png"
import multi from "../../assets/icons/Multiple \File.png"
import payment from "../../assets/icons/Payment.png"
import './Why.css'

function Why() {
  return (
    <div className="why-section__container">
      <div className="container">
        <div className="card__container">
          <div className="card-content__container">
            <img src={fingerprint} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Security</h5>
              <p>
                Secured products made to <br />encourage responsible <br />disclosure by researchers.
              </p>
            </div>
          </div>
          <div className="card-content__container">
            <img src={lcd} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Flexibility Small</h5>
              <p>
                Have control over a user- <br />friendly, fast, easy to <br />understand system.
              </p>
            </div>
          </div>
          <div className="card-content__container">
            <img src={multi} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Multi-Lingual</h5>
              <p>
                Our system enables user <br />to sitch to any language <br />of their preference.
              </p>
            </div>
          </div>
          <div className="card-content__container">
            <img src={payment} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Payment Gateway</h5>
              <p>
                Supports all the payment <br />gateways carried by major <br />e-payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;

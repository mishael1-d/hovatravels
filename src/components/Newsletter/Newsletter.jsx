import React from "react";
import send from '../../assets/icons/send.png'
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter__wrapper">
      <div className="container">
        <div className="newsletter__container">
        <h4>Subscribe to our Newsletter</h4>
        <div className="subscribe__container">
          <div className="form__container">
            <input
              type="email"
              className="email-field"
              placeholder="Enter your Email Address"
            />
            <button type="submit" className="button-btn">
              Subscribe
<img src={send} alt="" className="send" />
            </button>
          </div>
        </div>
        <p className="p-footer">
          {" "}
          Your privacy is important to us, so we'll never spam you or share your
          info with third parties. Take a look at our privacy policy. You can
          unsubscribe at any time.{" "}
        </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

import React from "react";
import image1 from "../../assets/bg/image1.png"
import image2 from "../../assets/bg/image2.png"
import image3 from "../../assets/bg/image3.png"
import image4 from "../../assets/bg/image4.png"
import "./Content.css"

function Content() {
  return (
    <div className="content-section__wrapper">
      <div className="container">
        <div className="content-content__container">
            <div className="content-item">
                <img src={image1} alt="" />
                <h5 className="centent-item__title">best quality guarantee</h5>
                <p>"Official ticket agent. No refund, <br />ticket renewal."</p>
            </div>
            <div className="content-item">
                <img src={image2} alt="" />
                <h5 className="centent-item__title">easy payment</h5>
                <p>"Convenient payment and very <br />safe, intelligent booking system."</p>
            </div>
            <div className="content-item">
                <img src={image3} alt="" />
                <h5 className="centent-item__title">customer care 24/7</h5>
                <p>"Cheap Domestic Flights, <br />International Cheap Flights."</p>
            </div>
            <div className="content-item">
                <img src={image4} alt="" />
                <h5 className="centent-item__title">thoughtful service</h5>
                <p>"Support Free Support Related <br />Information."</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

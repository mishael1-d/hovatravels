import React from "react";
import image from "../../assets/bg/side-image.png";
import badge from "../../assets/icons/badge.png";
import image1 from "../../assets/partners/airp.png";
import image2 from "../../assets/partners/emirates.png";
import image3 from "../../assets/partners/ibomair.png";
import image4 from "../../assets/partners/jumeirah.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Information.css";

const options = {
  margin: 8,
  responsiveClass: true,
  loop: true,
  dots: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
};

function Information() {
  return (
    <div className="info-section__wrapper">
      <div className="container">
        <div className="info-section__container">
          <div className="info-section-content">
            <div className="info-section-content-text">
              <h5>Necessary Information</h5>
              <ul>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>
                    Do passengers who travel on airplanes require a pre-flight
                    medical certificate before they are allowed to fly.
                  </p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>
                    Guide to distinguish real tickets from fake after booking
                    and payment has been completed.
                  </p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>Lost tickets, how to handle.</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>
                    Carrying extra items may not carry-on luggage when boarding
                    an aircraft.
                  </p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>Airlines have airport shuttles and fees.</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>Are Taxi services available in all areas.</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>The popular hotels in my city.</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>
                    The items are not carry checked baggage when boarding the
                    aircraft.
                  </p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>Flight tickets for the elderly and disabled .</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>Are children allowed to fly alone.</p>
                </li>
                <li className="info-list-items">
                  <img src={badge} alt="" />
                  <p>
                    Ticket prices for children, the elderly and persons with
                    disabilities are applicable..
                  </p>
                </li>
              </ul>
            </div>
            <div className="info-section-content-image">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="partners__container">
            <h5>Our Partners</h5>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="slide">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
              <div className="slide">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
              <div className="slide">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;

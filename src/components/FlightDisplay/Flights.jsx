import React from "react";
import im1 from "../../assets/bg/bg1.png";
import im2 from "../../assets/bg/bg2.png";
import im3 from "../../assets/bg/bg3.png";
import im4 from "../../assets/bg/bg1.png";
import im5 from "../../assets/bg/bg2.png";
import im6 from "../../assets/bg/bg3.png";
import airpeace from "../../assets/logo/airpeace.png"
import flyemirates from "../../assets/logo/flyemirates.png"
import ibomair from "../../assets/logo/ibomair.png"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Flights.css";

const options = {
  margin: 16,
  responsiveClass: true,
  nav: true,
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
      items: 3,
    },
  },
};
function Flights() {
  return (
    <div className="flight-wrapper">
      <div className="container">
        <div className="heading">
          <h3>Today's Flight Deals</h3>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          <figure>
            <img src={im1} alt="" className="img1" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={airpeace} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im2} alt="" className="img2" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={flyemirates} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im3} alt="" className="img3" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={ibomair} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im4} alt="" className="img4" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={airpeace} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im5} alt="" className="img5" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={ibomair} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im6} alt="" className="img5" />
            <div className="location-overlay__container">
              <div className="location-overlay__content">
                <div className="body">
                  <h5>Airpeace</h5>
                  <div>
                    <p className="location">
                      Lagos
                      <span>&#8594;</span>
                      <span>Dubai</span>
                    </p>
                    <p>June 28, 2022 - July 12, 2022</p>
                  </div>
                </div>
                <div className="airline-logo">
                  <img src={flyemirates} alt="" />
                </div>
              </div>

              <div className="paynow-overlay__container">
                <div className="paynow-overlay__content">
                  <div className="body1">
                    <p>Pay Now</p>
                    <h5>&#8358;330,502</h5>
                  </div>
                  <div className="pay-discount">
                    <div className="body">
                      <p>Pay Now</p>
                      <h5>&#8358;93,540</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Flights;

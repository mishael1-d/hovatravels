import React from "react";
import im1 from "../../assets/bg/bg1.png";
import im2 from "../../assets/bg/bg2.png";
import im3 from "../../assets/bg/bg3.png";
import im4 from "../../assets/bg/bg1.png";
import im5 from "../../assets/bg/bg2.png";
import im6 from "../../assets/bg/bg3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Hotels.css";
const options = {
  margin: 8,
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
          items: 2,

      }
  },
};

function Hotels() {
  return (
    <div className="hotel-wrapper">
      <div className="container">
        <div className="heading">
          <h3>Hotels in Popular Locations</h3>
        </div>
        <OwlCarousel
          className="owl-theme"
          {...options}
        >
          <figure>
            <img src={im1} alt="" className="img1" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>Dubai</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
            </div>
          </figure>
          <figure>
            <img src={im2} alt="" className="img2" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>Lagos</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
              </div>
          </figure>
          <figure>
            <img src={im3} alt="" className="img3" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>London</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
              </div>
          </figure>
          <figure>
            <img src={im4} alt="" className="img4" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>Abuja</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
              </div>
          </figure>
          <figure>
            <img src={im5} alt="" className="img5" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>Nairobi</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
              </div>
          </figure>
          <figure>
            <img src={im6} alt="" className="img5" />
            <div className="hotel-overlay__container">
              <div className="hotel-overlay__content">
                <div className="body">
                  <h5>Dubai</h5>
                  <p>300 Hotels</p>
                </div>
              </div>
              </div>
          </figure>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Hotels;

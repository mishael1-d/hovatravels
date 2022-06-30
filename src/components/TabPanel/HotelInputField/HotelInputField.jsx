import React from "react";
import bestvalue from "../../../assets/icons/bestvalue.png";
import "./HotelInputField.css";

function HotelInputField() {
  return (
    <div className="inputField__container">

      <div className="hotelSearchInput__container">
        <div className="inputContainer">
          <label htmlFor="from" className="input-label">
            Going to ?
          </label>
          <input type="text" id="from" placeholder="Destination, city, hotel name" />
        </div>
      </div>
      <div className="right">
        <div className="hotelRight__container">
          <div className="hotelDate__container">
            <div className="dateContainer departing">
              <label htmlFor="from" className="input-label">
                Check-in
              </label>

              <input type="date" id="from" placeholder="City or Airport" />
            </div>
            <div className="dateContainer returning">
              <label htmlFor="from" className="input-label">
                Check-out
              </label>
              <input type="date" id="from" placeholder="City or Airport" />
            </div>
          </div>
          <div className="hotelSearchInput__container">
            <div className="inputContainer">
              <label htmlFor="from" className="input-label">
                Rooms and guests
              </label>
              <input type="text" id="from" placeholder="City or Airport" />
            </div>
          </div>
          <div className="search-btn">
            <button>Search hotels</button>
          </div>
        </div>
        <div className="hotelbottom">
          <div className="bestValue">
            <img src={bestvalue} alt="" />
            <p>Best Value guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelInputField;

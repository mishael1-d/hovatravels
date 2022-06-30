import React from "react";
import bestvalue from "../../../assets/icons/bestvalue.png";
import "./HotelInputField.css";
import BasicSelect from "../Dropdown/Dropdowns";

function HotelInputField() {
  return (
    <div className="hotelInputField__container">
      <div className="hotelSearchInput__container">
        <div className="hotelInputField__container-top">
          <div className="hotelInputContainer">
            <label htmlFor="from" className="input-label">
              Going to ?
            </label>
            <input
              type="text"
              id="from"
              placeholder="Destination, city, hotel name"
            />
          </div>
        </div>
        <div className="hotelInputField__container-middle">
          <div className="hotelRight__container">
            <div className="hotelDate__container">
              <div className="hotelDateContainer departing">
                <label htmlFor="from" className="input-label">
                  Check-in
                </label>

                <input type="date" id="from" placeholder="City or Airport" />
              </div>
              <div className="hotelDateContainer returning">
                <label htmlFor="from" className="input-label">
                  Check-out
                </label>
                <input type="date" id="from" placeholder="City or Airport" />
              </div>
            </div>
          </div>
        </div>
        <div className="hotelInputField__container-bottom">
        <div className="bestValue">
            <img src={bestvalue} alt="" />
            <p>Best Value guaranteed</p>
          </div>
        </div>
      </div>
      <div className="v-divider" />
      <div className="hotelInput-buttons__container">
        <BasicSelect />
        <button className="search-btn">Search Hotels</button>
      </div>
    </div>
  );
}

export default HotelInputField;

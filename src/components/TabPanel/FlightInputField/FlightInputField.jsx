import * as React from "react";
import switchBtn from "../../../assets/icons/switch-btn.png";
import bestvalue from "../../../assets/icons/bestvalue.png";
import "./FlightInputField.css";
import BasicSelect from "../Dropdown/Dropdowns";

export default function InputField() {
  return (
    <div className="inputField__container">
      <div className="flightSearchInput__container">
        <div className="inputField__container-top">
          <div className="inputContainer">
            <label htmlFor="from" className="input-label">
              From Where ?
            </label>
            <input type="text" id="from" placeholder="City or Airport" />
            <img src={switchBtn} alt="" />
          </div>
          <div className="inputContainer">
            <label htmlFor="from" className="input-label">
              To Where ?
            </label>
            <input type="text" id="from" placeholder="City or Airport" />
          </div>
        </div>
        <div className="inputField__container-middle">
          <div className="flightRight__container">
            <div className="flightDate__container">
              <div className="dateContainer departing">
                <label htmlFor="from" className="input-label">
                  Leaving on
                </label>

                <input type="date" id="from" placeholder="City or Airport" />
              </div>
              <div className="dateContainer returning">
                <label htmlFor="from" className="input-label">
                  Returning on
                </label>
                <input type="date" id="from" placeholder="City or Airport" />
              </div>
            </div>
          </div>
        </div>
        <div className="inputField__container-bottom">
          <div className="checkbox_col">
            <div className="checkbox-input">
              <input type="checkbox" name="check" id="check" />
            </div>
            <p>My dates are flexible (+/- days)</p>
          </div>
          <div className="bestValue">
            <img src={bestvalue} alt="" />
            <p>Best Value guaranteed</p>
          </div>
        </div>
      </div>
      <div className="v-divider" />
      <div className="input-buttons__container">
        <ToggleSwitch/>
        <BasicSelect />
        <button className="search-btn">Search Flights</button>
      </div>
    </div>
  );
}


export const ToggleSwitch = () => {
  return (
    <div className="switch-container">
      <p>Trip Type</p>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
               name="tripType" id="tripType" />
        <label className="label" htmlFor="tripType">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
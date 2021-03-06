import React, { useState, useContext } from "react";
import switchBtn from "../../../assets/icons/switch-btn.png";
import bestvalue from "../../../assets/icons/bestvalue.png";
import "./FlightInputField.css";
import BasicSelect from "../Dropdown/Dropdowns";
import { AppContext } from "../../../App";

export default function InputField({ suggestions, toSuggestions, activeTab }) {
 const {
  filteredSuggestions,
  setFilteredSuggestions,
  activeSuggestionIndex,
  setActiveSuggestionIndex,
  showSuggestions,
  setShowSuggestions,
  input,
  setInput,
  filteredToSuggestions,
  setFilteredToSuggestions,
  activeToSuggestionIndex,
  setActiveToSuggestionIndex,
  showToSuggestions,
  setShowToSuggestions,
  toinput,
  setToInput,
  switchSides,
  setSwitchSides
} = useContext(AppContext)
  // Functionality for from suggestion
  //===================================================================
  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  // Functionality for to suggestion
  //====================================================================
  const onToChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = toSuggestions.filter(
      (toSuggestion) =>
        toSuggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setToInput(e.target.value);
    setFilteredToSuggestions(unLinked);
    setActiveToSuggestionIndex(0);
    setShowToSuggestions(true);
  };

  const onToClick = (e) => {
    setFilteredToSuggestions([]);
    setToInput(e.target.innerText);
    setActiveToSuggestionIndex(0);
    setShowToSuggestions(false);
  };

  //Functionality to switch sides
  //======================================================================
  const switchFields = () => {
    if (input.length > 1) {
      setSwitchSides(!switchSides);
    }
  };

  //Dropdown component for from input fiels
  //====================================================================
  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <p>No suggestions!</p>
      </div>
    );
  };

  //Dropdown component for to input fiels
  //====================================================================
  const ToSuggestionsListComponent = () => {
    return filteredToSuggestions.length ? (
      <ul class="suggestions">
        {filteredToSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeToSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onToClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <p>No suggestions!</p>
      </div>
    );
  };

  return (
    <div className="inputField__container">
      <div className="flightSearchInput__container">
        {window.innerWidth <= "1200" && <ToggleSwitch />}
        <div className="inputField__container-top">
          <div className="inputContainer">
            <label htmlFor="from" className="input-label">
              From Where ?
            </label>
            <input
              type="text"
              id="from"
              placeholder="City or Airport"
              onChange={onChange}
              value={!switchSides ? input : toinput}
            />
            <img src={switchBtn} alt="" onClick={switchFields} />
            {showSuggestions && input && <SuggestionsListComponent />}
          </div>
          <div className="inputContainer">
            <label htmlFor="from" className="input-label">
              To Where ?
            </label>
            <input
              type="text"
              id="from"
              placeholder="City or Airport"
              onChange={onToChange}
              value={switchSides ? input : toinput}
            />
            {showToSuggestions && toinput && <ToSuggestionsListComponent />}
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
        {window.innerWidth > "1200" && <ToggleSwitch />}
        <BasicSelect activeTab={activeTab} />
        <button className="search-btn">Search Flights</button>
      </div>
    </div>
  );
}

export const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);
  const handleSwitchChange = () => {
    setToggle(!toggle);
  };
  return (
    <div className="switch-container">
      <h5>Trip Type</h5>
      <div className="toggle-switch">
        <div className="switch-btn" onClick={handleSwitchChange}>
          <p className={!toggle ? "active-switch" : ""}>ROUND TRIP</p>
          <p className={toggle ? "active-switch" : ""}>1 WAY</p>
        </div>
      </div>
    </div>
  );
};

import React, { useContext} from "react";
import bestvalue from "../../../assets/icons/bestvalue.png";
import "./HotelInputField.css";
import BasicSelect from "../Dropdown/Dropdowns";
import { AppContext } from "../../../App";

function HotelInputField({ activeTab, suggestions }) {
  const {
    filteredSuggestions,
    setFilteredSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
    showSuggestions,
    setShowSuggestions,
    input,
    setInput
  } = useContext(AppContext)

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
              onChange={onChange}
              value={input}
            />
            {showSuggestions && input && <SuggestionsListComponent />}
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
      <div className={activeTab === "tab2" && "tab2-v-divider"} />
      <div className="hotelInput-buttons__container">
        <BasicSelect activeTab={activeTab} />
        <button
          className={
            activeTab === "tab2" ? "search-btn tab2-search-btn" : "search-btn"
          }
        >
          Search Hotels
        </button>
      </div>
    </div>
  );
}

export default HotelInputField;

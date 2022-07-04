import * as React from "react";
import flightIcon from "../../assets/icons/flight.png";
import hotelIcon from "../../assets/icons/hotel.png";
import InputField from "./FlightInputField/FlightInputField";
import HotelInputField from "./HotelInputField/HotelInputField";
import "./TabPanel.css";

export const FirstTab = ({ activeTab }) => {
  return (
    <div className="firstTab">
      <InputField
        activeTab={activeTab}
        suggestions={[
          "Lagos",
          "Abuja",
          "Delta",
          "Kano",
          "Calabar",
          "Uyo",
          "Owerri",
          "Minna",
          "Jos",
        ]}
        toSuggestions={[
          "Lagos",
          "Abuja",
          "Delta",
          "Kano",
          "Calabar",
          "Uyo",
          "Owerri",
          "Minna",
          "Jos",
        ]}
      />
    </div>
  );
};
export const SecondTab = ({ activeTab }) => {
  return (
    <div className="secondTab">
      <HotelInputField activeTab={activeTab} 
      suggestions={[
        "Transcorp Hotel, Abu Dhabi, Dubai",
        "Jumeirah Hotels and Resort",
        "Ibis London City - Shoreditch",
        "The Ritz-Carlton Hotel, Toronto, Canada",
        "Premier Inn London Croydon Town Centre Hotel, London",
        "Four Seasons Hotel, Toronto, Canada"
      ]}
      />
    </div>
  );
};

function TabPanel() {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="tabpanel__container">
      <ul className="tab-nav__container">
        <li
          onClick={handleTab1}
        >
          <div className="tab-title">
            <img src={flightIcon} alt="" />
            <p>Book Flights</p>
          </div>
        </li>
        <li
        className="tab2-title"
          onClick={handleTab2}
        >
          <div className="tab-title ">
            <img src={hotelIcon} alt="" />
            <p>Find Hotels</p>
          </div>
        </li>
      </ul>
      <div className={activeTab === "tab1" ? "tab-content__container" : "tab-content__container tab2-content__container"}>
        {activeTab === "tab1" ? (
          <FirstTab activeTab={activeTab} />
        ) : (
          <SecondTab activeTab={activeTab} />
        )}
      </div>
    </div>
  );
}
export default TabPanel;

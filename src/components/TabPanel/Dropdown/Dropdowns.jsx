import React, { useState } from "react";
import Select from "react-select";
import dropdown from "../../../assets/icons/drop.png";
import "./Dropdowns.css";

export default function BasicSelect({ activeTab }) {
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);
  const [infant, setInfant] = useState(1);
  const [count, setCount] = useState(adult + children + infant);

  const handleIncrement = () => {
    setAdult((adult) => adult + 1);
    setCount((count) => count + 1);
  };
  const handleChidrenIncrement = () => {
    setChildren((children) => children + 1);
    setCount((count) => count + 1);
  };
  const handleInfantIncrement = () => {
    setInfant((infant) => infant + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setAdult((adult) => adult - 1);
      setCount((count) => count - 1);
    }
  };
  const handleChildrenDecrement = () => {
    if (count > 0) {
      setChildren((children) => children - 1);
      setCount((count) => count - 1);
    }
  };
  const handleInfantDecrement = () => {
    if (count > 0) {
      setInfant((infant) => infant - 1);
      setCount((count) => count - 1);
    }
  };

  const handleDropdown = () => {
    setShowPassengerDropdown(!showPassengerDropdown);
  };
  const handleRoomDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="select-dropdown__container">
      {activeTab === "tab1" ? (
        <div className="select-container">
          <div className="dropdown__wrapper">
            <div className="dropdown__container" onClick={handleDropdown}>
              <p className="label">{count} Passengers</p>
              <img src={dropdown} alt="" />
            </div>
          </div>
          {showPassengerDropdown && (
            <Passenger
              increment={handleIncrement}
              handleChidrenIncrement={handleChidrenIncrement}
              handleInfantIncrement={handleInfantIncrement}
              handleDecrement={handleDecrement}
              handleChildrenDecrement={handleChildrenDecrement}
              handleInfantDecrement={handleInfantDecrement}
              adult={adult}
              children={children}
              infant={infant}
              activeTab={activeTab}
              setShowPassengerDropdown={setShowPassengerDropdown}
            />
          )}
          <Select
            className="select-btn"
            classNamePrefix="select-dropdown"
            defaultValue={options2[0]}
            isSearchable={false}
            name="Trip Type"
            options={options2}
          />
        </div>
      ) : (
        <div className="select-container">
          <Select
            className="select-btn"
            classNamePrefix="tab2-select-dropdown"
            defaultValue={options3[0]}
            isSearchable={false}
            name="Trip Type"
            options={options3}
          />
          <div className="dropdown__wrapper">
            <div
              className="tab2-dropdown__container"
              onClick={handleRoomDropdown}
            >
              <p className="label">Rooms and Guests</p>
              <img src={dropdown} alt="" />
            </div>
          </div>
          {showDropdown && (
            <Passenger
              increment={handleIncrement}
              handleDecrement={handleDecrement}
              handleChidrenIncrement={handleChidrenIncrement}
              handleInfantIncrement={handleInfantIncrement}
              adult={adult}
              children={children}
              infant={infant}
              activeTab={activeTab}
            />
          )}
        </div>
      )}
    </div>
  );
}

const options2 = [
  { value: "Economy", label: "Economy" },
  { value: "premiuom economy", label: "Premiun Economy" },
  { value: "business", label: "Business" },
  { value: "first class", label: "First Class" },
];
const options3 = [
  {
    value: "What are you travelling for?",
    label: "What are you travelling for?",
  },
  { value: "Business", label: "Business" },
  { value: "Leisure", label: "Leisure" },
];
export const Passenger = ({
  increment,
  handleChidrenIncrement,
  handleInfantIncrement,
  handleDecrement,
  handleChildrenDecrement,
  handleInfantDecrement,
  activeTab,
  adult,
  children,
  infant,
  setShowPassengerDropdown
}) => {
  return (
    <div
      className={
        activeTab === "tab1"
          ? "passenger-container"
          : "tab2-passenger-container"
      }
    >
      {activeTab === "tab2" && (
        <div className="passenger-item">
          <div className="item-text">
            <h4>Rooms</h4>
          </div>
          <div className="item-btns">
            <button className="decrease" name="adult" onClick={handleDecrement}>
              -
            </button>
            <input type="text" />
            <button
              className="increase"
              name="rooms"
              onClick={(e) => increment(e)}
            >
              +
            </button>
          </div>
        </div>
      )}
      <div className="passenger-item">
        <div className="item-text">
          <h4>Adult</h4>
          <p> {">"} 12years</p>
        </div>
        <div className="item-btns">
          <button className="decrease" name="adult" onClick={handleDecrement}>
            -
          </button>
          <input type="text" name="adult" value={adult} />
          <button className="increase" name="adult" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div className="passenger-item">
        <div className="item-text">
          <h4>Children</h4>
          <p>2 - 12years</p>
        </div>
        <div className="item-btns">
          <button
            className="decrease"
            name="adult"
            onClick={handleChildrenDecrement}
          >
            -
          </button>
          <input type="text" name="children" value={children} />
          <button
            className="increase"
            name="children"
            onClick={handleChidrenIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="passenger-item">
        <div className="item-text">
          <h4>Infants</h4>
          <p>{"<"} 2years</p>
        </div>
        <div className="item-btns">
          <button
            className="decrease"
            name="adult"
            onClick={handleInfantDecrement}
          >
            -
          </button>
          <input type="text" name="infant" value={infant} />
          <button
            className="increase"
            name="infant"
            onClick={handleInfantIncrement}
          >
            +
          </button>
        </div>
      </div>
      <button className="done" onClick={()=>setShowPassengerDropdown(false)}>Done</button>
    </div>
  );
};

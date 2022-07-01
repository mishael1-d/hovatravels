import React, { useState } from "react";
import Select from "react-select";
import dropdown from "../../../assets/icons/drop.png";
import "./Dropdowns.css";

export default function BasicSelect({ activeTab }) {
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [count, setCount] = useState(1);
  const [passengerCount, setPassengerCount] = useState({
    adult: 1,
    children: 1,
    infant: 1,
  });

  const handleIncrement = (e) => {
    setPassengerCount({ ...passengerCount, adult: +1 });
    setCount((count) => count + 1);
  };
  const handleDecrement = (e) => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerCount({ ...passengerCount, [name]: value });

    setCount((count) => count + parseInt(value));
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
              handleDecrement={handleDecrement}
              passengerCount={passengerCount}
              handleChange={handleChange}
              activeTab={activeTab}
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
              passengerCount={passengerCount}
              handleChange={handleChange}
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
  handleDecrement,
  passengerCount,
  handleChange,
  activeTab,
}) => {
  // const handleIncrement = ()=>{

  // }
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
            <input
              type="text"
              value={passengerCount.adult}
              name="adult"
              onChange={handleChange}
            />
            <button className="increase" name="adult" onClick={increment}>
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
          <input
            type="text"
            value={passengerCount.adult}
            name="adult"
            onChange={handleChange}
          />
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
          <button className="decrease" name="adult" onClick={handleDecrement}>
            -
          </button>
          <p>{passengerCount.children}</p>
          <button className="increase" name="children" onClick={increment}>
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
          <button className="decrease" name="adult" onClick={handleDecrement}>
            -
          </button>
          <p>{passengerCount.infant}</p>
          <button className="increase" name="infant" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <button className="done">Done</button>
    </div>
  );
};

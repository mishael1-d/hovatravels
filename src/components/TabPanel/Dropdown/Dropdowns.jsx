import * as React from "react";
import Select from "react-select";
import "./Dropdowns.css";

export default function BasicSelect() {
  // const [showDropdown, setShowDropdown] = useState(false)
  


  return (
    <div className="select-dropdown__container">
      <Select
        className="select-btn"
        classNamePrefix="select-dropdown"
        defaultValue={options2[0]}
        isSearchable={false}
        name="Trip Type"
        options={options2}
      />
      <Select
        className="select-btn"
        classNamePrefix="select-dropdown"
        defaultValue={options3[0]}
        isSearchable={false}
        name="Trip Type"
        options={options3}
      />
    </div>
  );
}

const options1 = [
  { value: "round-trip", label: "Round Trip" },
  { value: "one way", label: "One Way" },
  { value: "multi city", label: "Multi City" },
];
const options2 = [
  { value: "Passenger", label: "Passenger" },
  { value: "ghana", label: "Ghana" },
  { value: "india", label: "India" },
  { value: "togo", label: "Togo" },
];
const options3 = [
  { value: "Economy", label: "Economy" },
  { value: "premiuom economy", label: "Premiun Economy" },
  { value: "business", label: "Business" },
  { value: "first class", label: "First Class" },
];

export const Passenger = () => {
  // const [count, setCount] = useState(0)
  // const [passengers, setPassengers] = React.useState({
  //   adult: 1,
  //   children: 1,
  //   infants: 1,
  // })

  // const handleIncrement = ()=>{

  // }
  return <div className="passenger-container">
    <div className="passenger-item">
      <div className="item-text">
        <h4>Adult</h4>
        <p> {">"} 12years</p>
      </div>
      <div className="item-btns">
        <button className="decrease" name="adult">-</button>
        <p>{1}</p>
        <button className="increase" name="adult">+</button>
      </div>
    </div>
  </div>;
};

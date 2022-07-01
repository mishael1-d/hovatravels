import * as React from "react";
import Select from "react-select";
import "./Dropdowns.css";

export default function BasicSelect({ activeTab }) {
  // const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="select-dropdown__container">
      {activeTab === "tab1" ? (
        <>
          <Select
            className="select-btn"
            classNamePrefix="select-dropdown"
            defaultValue={options1[0]}
            isSearchable={false}
            name="Trip Type"
            options={options1}
          />
          <Select
            className="select-btn"
            classNamePrefix="select-dropdown"
            defaultValue={options2[0]}
            isSearchable={false}
            name="Trip Type"
            options={options2}
          />
        </>
      ) : (
        <>
          <Select
            className="select-btn"
            classNamePrefix="tab2-select-dropdown"
            defaultValue={options3[0]}
            isSearchable={false}
            name="Trip Type"
            options={options3}
          />
          <Select
            className="select-btn"
            classNamePrefix="tab2-select-dropdown"
            defaultValue={options4[0]}
            isSearchable={false}
            name="Trip Type"
            options={options4}
          />
        </>
      )}
    </div>
  );
}

const options1 = [
  { value: "Passenger", label: "Passenger" },
  { value: "ghana", label: "Ghana" },
  { value: "india", label: "India" },
  { value: "togo", label: "Togo" },
];
const options2 = [
  { value: "Economy", label: "Economy" },
  { value: "premiuom economy", label: "Premiun Economy" },
  { value: "business", label: "Business" },
  { value: "first class", label: "First Class" },
];
const options3 = [
  { value: "What are you travelling for?", label: "What are you travelling for?" },
  { value: "Business", label: "Business" },
  { value: "Leisure", label: "Leisure" },
];
const options4 = [
  { value: "Rooms and Guests", label: "Rooms and Guests" },
  { value: "Business", label: "Business" },
  { value: "Leisure", label: "Leisure" },
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
  return (
    <div className="passenger-container">
      <div className="passenger-item">
        <div className="item-text">
          <h4>Adult</h4>
          <p> {">"} 12years</p>
        </div>
        <div className="item-btns">
          <button className="decrease" name="adult">
            -
          </button>
          <p>{1}</p>
          <button className="increase" name="adult">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

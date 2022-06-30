import React from "react";
import "./Checkbox.css";

function Checkbox() {
  return (
    <div className="checkbox__container">
      <div className="content">
        <span className="title">
          <p>WHAT ARE YOU TRAVELING FOR?</p>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="">Business</label>
        </span>
        <span>
          <input type="checkbox" />
          <label htmlFor="">Leisure</label>
        </span>
      </div>
      <div className="reason">
        <p><a href="https://google.com">Why this?</a></p>
      </div>
    </div>
  );
}

export default Checkbox;

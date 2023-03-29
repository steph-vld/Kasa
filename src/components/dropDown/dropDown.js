import React, { useState } from "react";
import "./dropDown.css";
import chevron from "../../assets/chevron.png";

function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block">
      <div className="dropdown" id={`${title}`}>
        <div className="dropdown-block">
          <div className="dropdown-title">{title}</div>
          <span
            className={`dropdown-chevron ${open}`}
            onClick={() => setOpen(!open)}
          >
            <img src={chevron} alt="ouvrir menu" />
          </span>
        </div>
        {open && <div className="dropdown-txt">{description}</div>}
      </div>
    </div>
  );
}
export default Dropdown;

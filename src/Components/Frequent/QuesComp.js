import React, { useState } from "react";

export const QuesComp = ({ title, desc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordian">
        <div onClick={() => setIsActive(!isActive)}>
          <button className="accordion d-flex justify-content-between">
            {title}
            <div>{isActive ? "-" : "+"}</div>
          </button>
        </div>

        <div className="panel">{isActive && <p>{desc}</p>}</div>
      </div>
    </div>
  );
};

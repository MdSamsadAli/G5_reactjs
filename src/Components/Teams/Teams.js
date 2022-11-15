import React, { useState } from "react";
import TeamList from "./TeamsApi";

export const Teams = () => {
  const [Tmslst] = useState(TeamList);
  return (
    <div>
      <section>
        <div className="main-container team">
          <div className="row-1 row-2">
            {Tmslst.map((curValue) => {
              return (
                <div className="col-1 flex-end">
                  <div className="main-hero-img">
                    <img src={curValue.myimage} alt={curValue.myimage} />
                  </div>
                  <div className="main-hero-textarea text-left">
                    <h4>{curValue.text}</h4>
                    <p>{curValue.tag}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

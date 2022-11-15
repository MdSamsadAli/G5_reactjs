import React, { useState } from "react";
import Bar from "./ProgressBar";

export const Progress = () => {
  const [BarItem] = useState(Bar);
  return (
    <div>
      <section>
        <div className="hero-container progress-container">
          <div className="row">
            <div className="w-75">
              <h4>Progress</h4>
              <h1 className="fs-40">Our Competence</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="progress">
                {BarItem.map((curElem) => {
                  const { head, per } = curElem;
                  return (
                    <div className="progress-bar">
                      <div className="progress-text">
                        <span>Interior Photography</span>
                        <span>92%</span>
                      </div>
                      <div className="w-100">
                        <div className="w-92"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

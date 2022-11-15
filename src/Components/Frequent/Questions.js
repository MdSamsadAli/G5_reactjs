import React, { useState } from "react";
import { QuesComp } from "./QuesComp";
import FrequentItems from "./QuestionApi";

export const Questions = () => {
  const [items] = useState(FrequentItems);
  return (
    <>
      <section>
        <div className="hero-container progress-container accordian-bg">
          <div className="row">
            <div className="w-75 d-flex">
              <div className="accordion-text">
                <h1>FREQUENT ASKED QUESTIONS</h1>
                {items.map(({ title, desc }) => {
                  return <QuesComp title={title} desc={desc} />;
                })}
              </div>
              <div className="accordion-img">
                <img src="./images/mbr-4.jpg" alt="mbr-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

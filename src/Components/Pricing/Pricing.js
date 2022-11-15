import React, { useState } from "react";
import priceItem from "./PricingApi";

export const Pricing = () => {
  const [List] = useState(priceItem);
  return (
    <div>
      <section>
        <div className="hero-container bg">
          <div className="row-1">
            <h1 className="main-head-2">OUR PRICING</h1>
            <p className="main-para">Lorem Ipsum is simply dummy text</p>
            <div className="col bg-color">
              {List.map((curElem) => {
                return (
                  <>
                    <div className="interior-photography separator">
                      <h1 className="main-head">{curElem.price}</h1>
                      <h2>{curElem.begin}</h2>
                      <p>{curElem.desc}</p>
                      <div className="col-2">
                        <button type="submit" className="btn">
                          {curElem.btn}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from "react";
import ImagesList from "./ClientsApi";

export const Clients = () => {
  const [List] = useState(ImagesList);
  return (
    <div>
      <section>
        <div className="hero-container client-bg">
          <div className="row-1">
            <h1 className="main-head-2">OUR CLIENTS</h1>
            <p className="main-para">We love to work with our clients</p>
            <div className="col bg-color">
              {List.map((Items) => {
                return (
                  <div className="clients-img">
                    <img src={Items.images} alt={Items.images} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

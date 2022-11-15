import React, { useState } from "react";
import ImageList from "./WorkApi";

export const Work = () => {
  const [imgItem] = useState(ImageList);
  return (
    <div>
      <section>
        <div className="bg bg-1">
          <div className="text-center">
            <h1 className="main-head-2">OUR WORKS</h1>
            <p className="main-para">Lorem impsum lorom sit eamet.</p>
          </div>
          <div className="col--1">
            {imgItem.map((Items) => {
              const { myimage, title, desc } = Items;
              return (
                <>
                  <div className="main--img">
                    <img src={myimage} alt="img" />
                    <div className="interior-text">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

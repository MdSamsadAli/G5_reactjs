import React, { useState } from "react";
import ListItems from "./FooterApi";

export const Footer = () => {
  const [FooterItems] = useState(ListItems);
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
          </div>
          {FooterItems.map((curValue) => {
            const { header, title1, title2, title3, title4 } = curValue;
            return (
              <div className="cts">
                <div className="company">
                  <h3>{header}</h3>
                  <ul>
                    <li>
                      <a href="#">{title1}</a>
                    </li>
                    <li>
                      <a href="#">{title2}</a>
                    </li>
                    <li>
                      <a href="#">{title3}</a>
                    </li>
                    <li>
                      <a href="#">{title4}</a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

import React, { useState } from "react";
import HeaderApi from "./HeaderApi";
export const Header = () => {
  const [HeaderItems] = useState(HeaderApi);

  const [menuCollapse, setMenuCollapse] = useState(false);

  return (
    <div>
      <header>
        <div className="container">
          <div className="row sticky-header">
            <div className="col-10">
              <div className="col-2">
                <div className="logo">
                  <h1 className="nav-brand">GlassM5</h1>
                </div>

                <div className="abs">
                  <div
                    className="ham-btn"
                    onClick={() => {
                      setMenuCollapse(!menuCollapse);
                    }}
                  >
                    <span>
                      <i className="fas fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={menuCollapse ? "collapse" : " collapse toggle-bar"}
                id="toggle-bar"
              >
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <button type="submit" className="btn">
                    {" "}
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {HeaderItems.map((values) => {
              const { title, desc, headerImg } = values;
              return (
                <div className="main-hero-area">
                  <div className="main-hero-text">
                    <div className="text-area">
                      <h1>{title}</h1>
                      <p>{desc}</p>
                      <div className="col-2">
                        <button className="btn">Read More</button>
                      </div>
                    </div>
                  </div>
                  <div className="main-hero-img">
                    <div className="img-area">
                      <img src={headerImg} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

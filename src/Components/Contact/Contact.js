import React from "react";

export const Contact = () => {
  return (
    <div>
      <section>
        <div className="hero-container hello-bg contact-bg">
          <div className="row-1">
            <div className="col col--2 contact">
              <h1>Contact Us </h1>
              <div className="contact-text">
                <div className="txt">
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="name" placeholder="Email" />
                </div>
                <div className="txt">
                  <input type="text" name="name" placeholder="Subject" />
                  <input type="text" name="name" placeholder="Phone Number" />
                </div>
                <div className="txt">
                  <textarea placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn">
                  Send Your Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

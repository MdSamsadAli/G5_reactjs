import React from "react";

export const About = () => {
  return (
    <div>
      <section>
        <div className="main-container">
          <div className="row-1 row-2">
            <div className="col-1 col-center">
              <div className="main-hero-img">
                <img src="../images/mbr-1.jpeg" alt="img" />
              </div>
              <div className="main-hero-textarea">
                <h1>About Us</h1>
                <div className="col-1">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

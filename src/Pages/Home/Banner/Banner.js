import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <p className="title">
              Providing Special Care
            </p>
            <h1 className="title text-center mt-3 boled">
              For Your Pets
            </h1>
            <small>Your pet is in good hands with us! Let your favorite get the best care in our center.</small>

          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

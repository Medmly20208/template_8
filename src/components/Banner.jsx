import React from "react";
import featureIcon from "../assets/featureIcon.png";

const Banner = () => {
  return (
    <div className="text-center flex flex-col p-18 gap-4 justify-center items-center">
      <h1 className="text-4xl font-bold">
        Create your <span className="text-blue-600"> landing page</span> now
      </h1>
      <p className="text-xl font-semibold">Take your business to next level</p>
      <div>
        <button className="secondary-btn">Start your free trial</button>
        <div className="flex items-center justify-center gap-1">
          <img src={featureIcon} alt="feature icon" className="h-4 w-auto" />
          <p>No credit card required</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

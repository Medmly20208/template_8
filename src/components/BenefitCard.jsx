import React from "react";
import featureIcon from "../assets/featureIcon.png";

const BenefitCard = ({ title, description, features, image, isReverse }) => {
  const containerStyle = "flex  items-center flex-wrap justify-center gap-12";
  return (
    <div
      className={`${containerStyle}  ${isReverse ? " flex-row-reverse" : ""}`}
    >
      <div className="w-[40rem] flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-md">{description}</p>
        <div>
          {features.map((feature) => {
            return (
              <div className="flex items-center gap-2">
                <img
                  src={featureIcon}
                  alt="feature icon"
                  className="h-4 w-auto"
                />
                <p className="text-gray-500">{feature}</p>
              </div>
            );
          })}
        </div>
        <button className="secondary-btn w-fit">Start now</button>
      </div>
      <div>
        <img src={image} className=" md:w-[35rem] h-auto" />
      </div>
    </div>
  );
};

export default BenefitCard;

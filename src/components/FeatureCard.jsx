import React from "react";

const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-4 w-[22rem] border border-gray-100 rounded-md shadow-md">
      <div className="p-2 w-fit h-fit bg-blue-600 rounded-sm">
        <img src={logo} alt="feature img" className="w-6 rounded-sm" />
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;

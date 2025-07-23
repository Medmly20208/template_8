import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="mb-12">
      <h1 className="font-bold text-3xl mb-2 text-center">{title}</h1>
      <p className="text-gray-500 text-center"> {description}</p>
    </div>
  );
};

export default SectionTitle;

import React from "react";
import benefit from "../assets/benefit.png";
import vector2 from "../assets/vector2.jpg";
import vector3 from "../assets/vector3.jpg";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const benefitSections = [
    {
      title: "Launch Your Page in Seconds",
      description:
        "Effortlessly build high-converting landing pages using our drag & drop editor. No technical skills required.",
      features: [
        "No coding experience needed",
        "Built-in responsive templates",
        "Full customization options",
      ],
      image: benefit,
      isReverse: true,
    },
    {
      title: "Get Actionable Insights",
      description:
        "Monitor how your pages perform with built-in analytics. Understand what works and optimize for conversions.",
      features: [
        "Track visitor behavior",
        "Visualize engagement data",
        "Export performance reports",
      ],
      image: vector2,
      isReverse: false,
    },
    {
      title: "Optimize Every Section",
      description:
        "Test headlines, buttons, layouts, and more with built-in A/B testing tools to continuously improve your results.",
      features: [
        "Built-in A/B testing",
        "Heatmaps & scroll tracking",
        "Conversion-focused templates",
      ],
      image: vector3,
      isReverse: true,
    },
  ];
  return (
    <div className="mt-24 flex flex-col gap-8">
      {benefitSections.map((item) => {
        return (
          <BenefitCard
            title={item.title}
            description={item.description}
            features={item.features}
            image={item.image}
            isReverse={item.isReverse}
          />
        );
      })}
    </div>
  );
};

export default Benefits;

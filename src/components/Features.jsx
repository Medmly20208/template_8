import React from "react";
import SectionTitle from "./SectionTitle";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const landingPageBuilderFeatures = [
    {
      title: "Drag & Drop Editor",
      description:
        "Design your landing pages easily with a visual drag & drop interface. No coding needed.",
      logo: feature1,
    },
    {
      title: "Template Marketplace",
      description:
        "Access a library of professionally designed templates tailored for high conversions.",
      logo: feature2,
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "Ensure your pages look great on every device, from phones to desktops.",
      logo: feature3,
    },
    {
      title: "Form & Lead Management",
      description:
        "Capture leads with customizable forms and manage submissions with ease.",
      logo: feature4,
    },
    {
      title: "Multi-Language Support",
      description:
        "Reach a global audience with built-in support for multiple languages.",
      logo: feature5,
    },
    {
      title: "SEO & Analytics Tools",
      description:
        "Optimize for search engines and track performance with integrated analytics.",
      logo: feature1,
    },
    {
      title: "Integrations & Webhooks",
      description:
        "Connect with your favorite tools like Mailchimp, Zapier, and CRMs via integrations.",
      logo: feature2,
    },
    {
      title: "Custom Domains & Hosting",
      description:
        "Launch your pages with your own domain and fast, reliable hosting included.",
      logo: feature3,
    },
  ];
  return (
    <div className="mt-24" id="features">
      <SectionTitle
        title={"Why SoftwareCraftMasters"}
        description={
          " Launch your landing page in minutes on a custom sub-domain or add your own domain "
        }
      />
      <div className="flex m-auto justify-center items-center flex-col gap-8">
        <div className="flex justify-center gap-8 items-stretch gap-4 flex-wrap">
          {landingPageBuilderFeatures.map((feature) => {
            return (
              <FeatureCard
                title={feature.title}
                logo={feature.logo}
                description={feature.description}
              />
            );
          })}
        </div>
        <button className="secondary-btn">Browse all features</button>
      </div>
    </div>
  );
};

export default Features;

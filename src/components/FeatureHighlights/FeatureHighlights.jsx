import React from "react";
import "./FeatureHighlights.css";
import { FaTruck, FaLock, FaUndo, FaHeadset } from "react-icons/fa";

const FeatureHighlights = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      desc: "On all orders over $50",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "100% protected payments",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      desc: "30 day return policy",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated support team",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
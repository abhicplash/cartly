import React from "react";
import "./Categories.css";

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
  },
  {
    name: "Men's Clothing",
    image:
      "https://media.istockphoto.com/id/820806270/photo/businessman-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=RCCpoOXUIFM_teNgoRicdnySV_2SOq5HprgbQU3w1Ag=",
  },
  {
    name: "Women's Clothing",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories-title">Shop by Category</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
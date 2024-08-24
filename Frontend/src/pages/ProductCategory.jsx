import "../styles/productCategory.css";
import { useState } from "react";

const ProductCategoryPage = ({ productCategories }) => {
  // Hook for handling carousel scroll amount
  const [scrollAmount, setScrollAmount] = useState({});

  const handleScroll = (id, direction) => {
    const card = document.getElementById(id);
    const scrollStep = 300; // Amount to scroll each step

    let newScrollAmount = scrollAmount[id] || 0;

    if (direction === "right") {
      const maxScrollLeft =
        card.querySelector(".product-images").scrollWidth -
        card.querySelector(".product-images").clientWidth;
      if (newScrollAmount < maxScrollLeft) {
        newScrollAmount += scrollStep;
      }
    } else if (direction === "left") {
      if (newScrollAmount > 0) {
        newScrollAmount -= scrollStep;
      }
    }

    card.querySelector(
      ".product-images"
    ).style.transform = `translateX(-${newScrollAmount}px)`;
    setScrollAmount((prev) => ({ ...prev, [id]: newScrollAmount }));
  };

  return (
    <div className="product-category-container">
      {productCategories.map((product) => {
        const { _id, images, name, description } = product;

        return (
          <div key={_id} id={_id} className="product-card">
            <div className="product-images-wrapper">
              <button
                className="nav-button left"
                onClick={() => handleScroll(_id, "left")}
              >
                ←
              </button>
              <div className="product-images">
                {images.map((data, index) => (
                  <img
                    key={index}
                    src={data}
                    alt={`${name} ${index + 1}`}
                    className="product-image"
                  />
                ))}
              </div>
              <button
                className="nav-button right"
                onClick={() => handleScroll(_id, "right")}
              >
                →
              </button>
            </div>
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategoryPage;

import "../styles/productCategory.css";
import { useState } from "react";

const ProductCategoryPage = ({ productCategories }) => {
  // Hook for handling carousel scroll amount
  const [scrollAmount, setScrollAmount] = useState({});

  const handleScroll = (id, direction) => {
    const card = document.getElementById(id);
    if (!card) return; // Ensure card exists

    const imagesWrapper = card.querySelector(".product-images");
    if (!imagesWrapper) return; // Ensure imagesWrapper exists

    const scrollStep = 300; // Amount to scroll each step
    let newScrollAmount = scrollAmount[id] || 0;

    const maxScrollLeft = imagesWrapper.scrollWidth - imagesWrapper.clientWidth;

    if (direction === "right") {
      newScrollAmount = Math.min(newScrollAmount + scrollStep, maxScrollLeft);
    } else if (direction === "left") {
      newScrollAmount = Math.max(newScrollAmount - scrollStep, 0);
    }

    imagesWrapper.style.transform = `translateX(-${newScrollAmount}px)`;
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
                    alt={name}
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

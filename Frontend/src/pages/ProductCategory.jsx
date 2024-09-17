import { Link } from "react-router-dom";
import "../styles/productCategory.css";
const ProductCategoryPage = ({ productCategories }) => {
  return (
    <div className="product-category-container">
      {productCategories.map((product, index) => {
        const { _id, images, name, description } = product;
        return (
          <div key={_id} id={_id} className="product-card">
            <div className="product-images-wrapper">
              <Link to={`products/${name}`} target="_blank">
                <img
                  key={index}
                  src={images}
                  alt={name}
                  className="product-image"
                />
              </Link>
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

import "../styles/productCategory.css";

const ProductCategoryPage = ({ productCategories }) => {
  return (
    <div className="product-category-container">
      {productCategories.map((product) => {
        const { _id, image, name, description } = product;
        return (
          <div key={_id} className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCategoryPage;

import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  productName,
  categoryName,
  // sellerName,
  productId,
  productImage,
}) => {
  return (
    <div className="product-card">
      <img
        src={`../../server/public/uploads/${productImage}`}
        alt={`${productName}`}
        className="product-card-image"
      />
      <div className="product-card-content">
        <p className="product-card-category">
          <span style={{ color: "#d6a03b" }}>Category </span>
          <span>{categoryName}</span>
        </p>
        <h5 className="product-card-title">{productName}</h5>

        {/* <p className="product-card-seller">Seller: {sellerName}</p> */}
      </div>
      <div className="product-card-actions">
        <Link to={`/view?id=${productId}`} className="product-card-button">
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

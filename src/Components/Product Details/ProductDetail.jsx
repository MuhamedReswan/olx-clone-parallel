// ProductDetail.jsx
import React from "react";
import "./ProductDetail.css"; // You can style this component as needed

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="productDetailModal">
      <div className="productDetailContent">
        <button className="closeButton" onClick={onClose}>X</button>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} className="bigImage" />
        <p className="price">Price: &#x20B9; {product.price}</p>
        <p className="category">Category: {product.category}</p>
        <p className="description">Description: {product.description}</p>
        <p className="date">
          Created At: {new Date(product.createdAt.seconds * 1000).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-type">
            {product.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
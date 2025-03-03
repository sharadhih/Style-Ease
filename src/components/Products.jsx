import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';
import { Filter } from 'lucide-react';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique clothing types
  const clothingTypes = ['all', ...new Set(products.map(product => product.type))];

  const handleFilter = (type) => {
    setActiveFilter(type);
    if (type === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.type === type));
    }
  };

  return (
    <div className="container">
      <div className="products-header">
        <h1>All Products</h1>
        <p>Browse our collection of stylish clothing</p>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <Filter color="#4f46e5" size={20} />
          <h2>Filter by Type</h2>
        </div>
        
        <div className="filter-buttons">
          {clothingTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => handleFilter(type)}
              className={`filter-button ${activeFilter === type ? 'active' : ''}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
import React from 'react';
import { products } from '../data'; // Ensure this path is correct
import ProductCard from './ProductCard'; // Importing the ProductCard component
import { useNavigate } from 'react-router-dom';

const Traditional = () => {
  const navigate = useNavigate();
  const traditionalProducts = products.filter(product => product.category === 'traditional');

  return (
    <div style={{ backgroundColor: '#FFEDFA', minHeight: '100vh', padding: '20px' }}>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Traditional Wear Collection</h2>
        
        {/* Back Button */}
        <button className="btn btn-dark mb-3" onClick={() => navigate('/')}>⬅ Back to Home</button>

        <div className="row">
          {traditionalProducts.length > 0 ? (
            traditionalProducts.map(product => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center">No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Traditional;

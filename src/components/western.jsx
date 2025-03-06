import React from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const Western = () => {
  const navigate = useNavigate();
  const westernProducts = products.filter(product => product.category === 'western');

  return (
    <div style={{ backgroundColor: '#FFEDFA', minHeight: '100vh', padding: '20px' }}>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Western Wear Collection</h2>

        {/* Back Button */}
        <button className="btn btn-dark mb-3" onClick={() => navigate('/')}>⬅ Back to Home</button>

        <div className="row">
          {westernProducts.length > 0 ? (
            westernProducts.map(product => (
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

export default Western;

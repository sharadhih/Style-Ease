import React, { useState } from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    const results = products.filter(product => 
      product.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };

  // Get unique clothing types for suggestions
  const clothingTypes = [...new Set(products.map(product => product.type))];

  return (
    <div className="container">
      <div className="hero">
        <h1>Find Your Perfect Style</h1>
        <p>Discover the latest trends in fashion with our curated collection</p>
      
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter the type of clothing..."
              className="search-input"
            />
            <button 
              type="submit"
              className="search-button"
            >
              <Search size={20} />
            </button>
          </form>
          
          <div className="search-tags">
            <span>Popular searches:</span>
            {clothingTypes.slice(0, 5).map((type, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchTerm(type);
                  setSearchResults(products.filter(product => 
                    product.type.toLowerCase() === type.toLowerCase()
                  ));
                  setHasSearched(true);
                }}
                className="search-tag"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {hasSearched && (
        <div className="search-results">
          <h2>
            {searchResults.length > 0 
              ? `Search Results for "${searchTerm}"`
              : `No results found for "${searchTerm}"`}
          </h2>
          
          {searchResults.length > 0 && (
            <div className="product-grid">
              {searchResults.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="featured-section">
        <h2>Featured Items</h2>
        <div className="product-grid">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
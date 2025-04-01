import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageRecognition from './components/ImageRecognition';
import Home from './components/Home';
import Products from './components/Products';
import Traditional from './components/traditional';
import Western from './components/western';
import AllCategories from './components/allCategories';
import Navigation from './components/Navigation';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path="/image-recognition" element={<ImageRecognition/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/traditional" element={<Traditional />} />
            <Route path="/western" element={<Western />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

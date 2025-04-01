import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageRecognition from './components/ImageRecognition';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div>
      
        <main>
          <Routes>
            <Route path="/" element={<ImageRecognition/>} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
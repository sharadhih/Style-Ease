import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import ProductCard from "../components/ProductCard";
import CategoryNav from "./CategoryNav";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#FFEDFA", minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      {/* Hero Banner Section */}
      <div className="hero-banner text-center w-100">
        <img 
          src="/banner.jpg" 
          alt="Fashion Banner" 
          className="img-fluid w-100"
          style={{ height: "50vh", objectFit: "cover" }}
        />
      </div>

      <CategoryNav />

      {/* Main Content */}
      <div className="container flex-grow-1 py-4">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {products.slice(0, 6).map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3 w-100" style={{ fontSize: "12px" }}>
        Created with ❤️ | © {new Date().getFullYear()} Style-Ease. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;

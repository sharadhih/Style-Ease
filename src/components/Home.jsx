import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .or(
        `name.ilike.%${searchTerm}%,color.ilike.%${searchTerm}%,origin.ilike.%${searchTerm}%,fabric.ilike.%${searchTerm}%,style.ilike.%${searchTerm}%`
      ); // ✅ Fixed query formatting

    if (error) {
      console.error("Error searching products:", error);
    } else {
      setSearchResults(data);
      setHasSearched(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#FFEDFA", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header Section */}
      <nav className="navbar navbar-dark bg-black px-4 py-3" style={{ width: "100vw" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand text-white fw-bold" href="#">Style-Ease</a>
          <form className="d-flex justify-content-center w-50" onSubmit={handleSearch}>
            <div className="input-group w-100" style={{ backgroundColor: "#FFEDFA", borderRadius: "10px", padding: "5px" }}>
              <input
                type="text"
                className="form-control rounded-start border-0"
                placeholder="Search for clothing..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn text-white fw-bold px-4" type="submit" style={{ backgroundColor: "#ff66b2", borderRadius: "5px", border: "2px solid #ff66b2" }}>
                <Search size={20} className="me-1" /> Search
              </button>
            </div>
          </form>
          <div style={{ width: "100px" }}></div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <div className="hero-banner text-center">
        <img 
          src="/banner.jpeg" 
          alt="Fashion Banner" 
          className="img-fluid"
          style={{ width: "100vw", height: "50vh", objectFit: "cover" }}
        />
      </div>

      {/* Category Tabs */}
      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          {["Traditional", "Western", "All"].map((category, index) => (
            <div
              key={index}
              className="col-3 mx-3 py-3 fw-bold text-white text-uppercase text-center rounded shadow-lg"
              style={{ backgroundColor: "#ff66b2", cursor: "pointer", transition: "0.3s", fontSize: "18px", border: "2px solid #ff66b2" }}
              onClick={() => navigate(`/products?category=${category.toLowerCase()}`)}
              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container flex-grow-1 py-4">
        {hasSearched && (
          <div className="container mt-4">
            <h2>
              {searchResults.length > 0 
                ? `Search Results for "${searchTerm}"`
                : `No results found for "${searchTerm}"`}
            </h2>
            {searchResults.length > 0 && (
              <div className="row mt-3">
                {searchResults.map(product => (
                  <div key={product.id} className="col-md-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3" style={{ fontSize: "12px" }}>
        Created with ❤️ | © {new Date().getFullYear()} Style-Ease. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;

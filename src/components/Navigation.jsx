import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { supabase } from "../supabase";

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <nav className="navbar navbar-dark bg-black px-4 py-3" style={{ width: "100vw" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white fw-bold" href="/">Style-Ease</a>
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
        <div className="d-flex gap-3">
          <button 
            className="btn text-white fw-bold px-4" 
            style={{ backgroundColor: "#ff66b2", borderRadius: "5px", border: "2px solid #ff66b2" }}
            onClick={() => navigate("/image-recognition")}
          >
            Image Recognition
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
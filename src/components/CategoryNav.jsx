import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryNav = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-4">
      <div className="row justify-content-center">
        {["Traditional", "Western", "All"].map((category, index) => (
          <div
            key={index}
            className="col-3 py-3 fw-bold text-white text-uppercase text-center rounded shadow-lg mx-2"
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
  );
};

export default CategoryNav; 
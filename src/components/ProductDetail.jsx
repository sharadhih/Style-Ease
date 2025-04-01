import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryNav from "./CategoryNav";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/");
    return null;
  }

  const details = [
    { label: "Category", value: product.category },
    { label: "Color", value: product.color },
    { label: "Fabric", value: product.fabric },
    { label: "Style", value: product.style },
    { label: "Origin", value: product.origin }
  ];

  return (
    <div style={{ backgroundColor: "#FFEDFA", minHeight: "100vh", padding: "2rem" }}>
      <CategoryNav />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg" style={{ border: "none", borderRadius: "15px" }}>
              <div className="card-body p-4">
                <h2 className="card-title mb-4">{product.name}</h2>
                <div className="product-details">
                  {details.map((detail, index) => (
                    <div key={index} className="mb-3">
                      <p className="mb-0">
                        <strong>{detail.label}:</strong>{" "}
                        <span className="text-capitalize">{detail.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ backgroundColor: "#ff66b2", border: "none" }}
                  onClick={() => navigate(-1)}
                >
                  Back to Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 
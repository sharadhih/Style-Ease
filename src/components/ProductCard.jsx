import "./ProductCard.css"; // ✅ Add a CSS file for styling
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img 
        src={product.image} 
        alt={product.name} 
        onError={(e) => e.target.src = "https://via.placeholder.com/150"}
      />
      <h3>{product.name}</h3>
      <p><strong>Style:</strong> {product.style}</p>
      <p><strong>Color:</strong> {product.color}</p>
      <p><strong>Fabric:</strong> {product.fabric}</p>
      <p><strong>Origin:</strong> {product.origin}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;

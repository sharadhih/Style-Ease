import "./ProductCard.css"; // ✅ Add a CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
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

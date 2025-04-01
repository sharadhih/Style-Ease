import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category") || "all";

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");

    if (category !== "all") {
      query = query.eq("category", category);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  return (
    <div>
      <h1>{category === "all" ? "All Categories" : `${category.charAt(0).toUpperCase() + category.slice(1)} Wear`}</h1>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Products;

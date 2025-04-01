import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import CategoryNav from "./CategoryNav";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category") || "all";
  const searchTerm = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    fetchProducts();
  }, [category, searchTerm]);

  const fetchProducts = async () => {
    let query = supabase.from("products").select("*");

    if (category !== "all") {
      query = query.eq("category", category);
    }

    if (searchTerm) {
      query = query.or(
        `name.ilike.%${searchTerm}%,color.ilike.%${searchTerm}%,origin.ilike.%${searchTerm}%,fabric.ilike.%${searchTerm}%,style.ilike.%${searchTerm}%`
      );
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  return (
    <div style={{ backgroundColor: "#FFEDFA", minHeight: "100vh", padding: "2rem" }}>
      <CategoryNav />
      <div className="container mt-4">
        <h1 className="text-center mb-4">
          {searchTerm 
            ? `Search Results for "${searchTerm}"`
            : category === "all" 
              ? "All Categories" 
              : `${category.charAt(0).toUpperCase() + category.slice(1)} Wear`}
        </h1>

        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="alert alert-info">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

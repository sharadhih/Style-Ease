import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductList from "./ProductList";

const Western = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchWesternProducts();
  }, []);

  const fetchWesternProducts = async () => {
    const { data, error } = await supabase.from("products").select("*").eq("category", "western");
    if (error) {
      console.error("Error fetching western products:", error);
    } else {
      setProducts(data);
    }
  };

  return (
    <div>
      <h1>Western Wear</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Western;

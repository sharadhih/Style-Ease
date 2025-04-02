import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import ProductList from "./ProductList";

const Traditional = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTraditionalProducts();
  }, []);

  const fetchTraditionalProducts = async () => {
    const { data, error } = await supabase.from("products").select("*").eq("category", "traditional");
    if (error) {
      console.error("Error fetching traditional products:", error);
    } else {
      setProducts(data);
    }
  };

  return (
    <div>
      <h1>Traditional Wear</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Traditional;

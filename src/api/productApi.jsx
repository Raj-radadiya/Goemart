import { useState, useEffect } from "react";

const useProductApi = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/search?q=phone");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      // Process products to add status flags
      const processedProducts = data.products.map(product => ({
        ...product,
        isLowStock: product.stock <= 5 && product.stock > 0,  // true if stock is between 1-5
        isOutOfStock: product.stock === 0, // true if stock is 0
        isNew: !product.isLowStock && !product.isOutOfStock // new if not low stock or out of stock
      }));

      setProducts(processedProducts);
      setIsLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error };
};
export default useProductApi;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Getting the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-detail">
      {product && (
        <div>
          <h1>{product.name}</h1>
          <img src={product.thumbnail} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;

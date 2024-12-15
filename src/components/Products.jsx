import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();

 

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

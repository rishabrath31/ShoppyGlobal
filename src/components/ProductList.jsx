import { useState } from "react";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products?.filter((product) =>
    product?.title?.toLowerCase()?.includes(search?.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

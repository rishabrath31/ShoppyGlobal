// src/components/ProductItem.jsx
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProductItem({ product }) {
  const { id, title: name, price, thumbnail } = product || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, name, price, thumbnail, quantity: 1 }));
  };

  return (
    <div className="product-item">
      <img src={thumbnail} />
      <h3 className="product-name" onClick={() => navigate(`/products/${id}`)}>
        {name}
      </h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;

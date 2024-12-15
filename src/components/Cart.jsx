import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { removeItemFromCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, onUpdateQuantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  function handleRemoveItem(id) {
    dispatch(removeItemFromCart(id));
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              thumbnail={item.thumbnail}
              quantity={item.quantity}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          ))}

          <h2>Total: ${calculateTotal().toFixed(2)}</h2>
          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onUpdateQuantity: PropTypes.func,
  onRemoveItem: PropTypes.func,
};

export default Cart;

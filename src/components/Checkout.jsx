import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { resetCart } from "../features/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    dispatch(resetCart());
    navigate("/", { replace: true });
  };

  if (!items?.length) return <Navigate replace to={"/"} />;

  return (
    <div className="cart">
      <h1>
        Total Order Value: <span>${calculateTotal().toFixed(2)}</span>
      </h1>
      <button onClick={handlePayment}>Complete payment</button>
    </div>
  );
}

export default Checkout;

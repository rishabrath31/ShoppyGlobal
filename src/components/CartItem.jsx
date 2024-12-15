import PropTypes from "prop-types";

function CartItem({ id, name, price,thumbnail, quantity, onUpdateQuantity, onRemoveItem }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    onUpdateQuantity(id, isNaN(newQuantity) ? 0 : newQuantity);
  };

  const handleRemoveClick = () => {
    onRemoveItem(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <img src={thumbnail}  />
        <h3>{name}</h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: </p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="cart-item-actions">
        <button onClick={handleRemoveClick}>Remove</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail:PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default CartItem;

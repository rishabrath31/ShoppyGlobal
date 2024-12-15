import { useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  const items = useSelector((state) => state.cart.items)
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">ShoppyGlobal</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <span className="cart-icon">🛒</span> Cart ({items?.length || 0})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

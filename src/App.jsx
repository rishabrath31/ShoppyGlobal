import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { useSelector } from "react-redux";
import Checkout from "./components/Checkout";

function App() {
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart cartItems={items} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

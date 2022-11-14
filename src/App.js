import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartConnect from "./components/CartConnect";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* <Header searchActive="true"/> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sale" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CartConnect" element={<CartConnect />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;

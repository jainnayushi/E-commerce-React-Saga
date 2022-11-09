import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartConnect from "./components/CartConnect";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/CartConnect" element={<CartConnect />} />
      </Routes>
    </div>
  );
}

export default App;

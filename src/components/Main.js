import { addToCart, emptyCart, removeFromCart } from "../redux/action/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/action/productAction";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  // const [originalData, setOriginalData] = useState([]);
  // Find total amount
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  useEffect(() => {
    dispatch(productList());
  }, []);
  // useEffect(() => {
  //   setOriginalData(data);
  // }, [originalData,data]);
  return (
    <div>
      {50000 - amount > 0 && (
        <div className="msg">
          Add Items of {50000 - amount}/- to avail 50% Cashback
        </div>
      )}
      <h1>Exclusive Products</h1>
      <Link className="link" to="/">
        Browse Sale Products
      </Link>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button
                className="btn2"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              <button
                className="btn2"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="btn" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </button>
      </div>
    </div>
  );
}

export default Main;

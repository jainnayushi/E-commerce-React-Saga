import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user, isAuthenticated } = useAuth0();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  
  return (
    <div>
      {50000 - amount > 0 && (
        <div className="msg">
          Add Items of {50000 - amount}/- to avail 50% Cashback
        </div>
      )}
      {isAuthenticated ? (
        <h2>{user.name}, Here's your Cart Details</h2>
      ) : (
        <h1>Cart Details</h1>
      )}
      <Link className="link" to="/">
        Browse Products
      </Link>
      <br />
      <br />
      <div className="cart-page-container">
        <table id="tabl">
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span id="sum">Total</span>
            <span id="sum">{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

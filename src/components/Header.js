import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/action/productAction";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Saga Store</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onBlur={(event) => {
            return dispatch(productSearch(event.target.value));
          }}
          placeholder="Search Product"
        />
      </div>
      {isAuthenticated ? (
        <button
          className="btnn"
          onChange={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button className="btnn" onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}

      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;

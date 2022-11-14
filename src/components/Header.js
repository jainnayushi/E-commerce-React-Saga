import { listData } from "../redux/reducer/listReducer";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";
import { search } from "../redux/action/productAction";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  let originalData = useSelector((state) => state.productData);
  let apiData = useSelector((state) => state.listData);
  let [event, setEvent] = useState("");
  // alert(props.activeSearch);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Saga Store</h1>
      </Link>
      {props.activeSearch === "true" ? <Search /> : <div></div>}
      {/* <div className="search-box">
        {console.log("=== received api data=", apiData)}
        <input
          type="text"
          id="search"
          onChange={(event) => {
            setEvent(event.target.value);
          }}
          placeholder="Type to Search Products"
        />
        <button
          className="searchBtn"
          onClick={() => {
            dispatch(search(event, apiData));
          }}
        >
          Search
        </button>
      </div> */}
      {/* {isAuthenticated ? (
        <button
          className="btnn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button className="btnn" onClick={() => loginWithRedirect()}>
          Login
        </button>
      )} */}
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            // src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            src="https://th.bing.com/th/id/OIP.W7RIqUpb4s2JM86eZ3P5FQHaHa?pid=ImgDet&w=600&h=600&rs=1"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;

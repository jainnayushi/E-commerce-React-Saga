import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/action/action";
const CartConnect = (props) => {
  return (
    <div>
      <Link to="/">Go to Products Link</Link>
      <h1>Cart Data has {props.len} Items </h1>
      <button onClick={props.cartEmpty}> Cart Empty</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const len = state.cartData.length;
  return {
    dataCart: state.cartData,
    len: len,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartEmpty: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartConnect);

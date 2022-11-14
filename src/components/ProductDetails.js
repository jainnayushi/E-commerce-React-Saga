import { addToCart } from "../redux/action/action";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;
  let data = useSelector((state) => state.productData);
  let item = data.filter((obj) => obj.id === +id)[0];

  return (
    <div>
      <Header activeSearch={"false"} />
      <h1>Product details</h1>
      <Link className="link" to="/">
        Browse All Products
      </Link>
      <div className="container">
        <div className="left">
          <img src={item.photo} alt="Product" />
        </div>
        <div className="right">
          <div>Name : {item.name} </div>
          <div>Color : {item.color} </div>
          <div>Price : {item.price} </div>
          <div>Category : {item.category} </div>
          <div>Brand : {item.brand} </div>
          <button className="btn2" onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

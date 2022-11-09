import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
  SALE_LIST,
  SALE_SEARCH,
  SET_SALE_LIST,
} from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}
// For sale
function* getSaleProducts() {
  // console.warn("3");
  let data = yield fetch("http://localhost:3500/products_sale");
  data = yield data.json();
  yield put({ type: SET_SALE_LIST, data });
}

function* searchSaleProducts(data) {
  let result = yield fetch(
    `http://localhost:3500/products_sale?q=${data.query}`
  );
  console.warn("query data in sale", data);
  result = yield result.json();
  console.warn("actionnn is called", result);
  yield put({ type: SET_SALE_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
  yield takeEvery(SALE_LIST, getSaleProducts);
  yield takeEvery(SALE_SEARCH, searchSaleProducts);
}

export default productSaga;

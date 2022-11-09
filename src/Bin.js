// saleAction.js

import { SALE_LIST, SALE_SEARCH } from "./constant";

export const saleList = () => {
  // console.warn("1");
  return {
    type: SALE_LIST,
  };
};

export const saleSearch = (query) => {
  console.warn("query in sale", query);
  return {
    type: SALE_SEARCH,
    query,
  };
};

//saleReducer.js
import { SET_SALE_LIST } from "./constant";

export const saleData = (data = [], action) => {
  switch (action.type) {
    case SET_SALE_LIST:
      // console.warn("SALE_LIST condition ", action);
      return [...action.data];
    default:
      return data;
  }
};

// saleSaga.js

import { takeEvery, put } from "redux-saga/effects";
import { SALE_LIST, SALE_SEARCH, SET_SALE_LIST } from "./constant";

function* getSaleProducts() {
  // console.warn("3");
  let data = yield fetch("http://localhost:3500/products_sale");
  data = yield data.json();
  yield put({ type: SET_SALE_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(
    `http://localhost:3500/products_sale?q=${data.query}`
  );
  result = yield result.json();
  // console.warn("action is called", result);
  yield put({ type: SET_SALE_LIST, data: result });
}

function* saleSaga() {
  // console.warn("2");
  yield takeEvery(SALE_LIST, getSaleProducts);
  yield takeEvery(SALE_SEARCH, searchProducts);
}

export default saleSaga;
// ------------------------------------------------------------------

import { SALE_LIST, SALE_SEARCH } from "../constant";

export const saleList = () => {
  return {
    type: SALE_LIST,
  };
};

export const saleSearch = (query) => {
  return {
    type: SALE_SEARCH,
    query,
  };
};

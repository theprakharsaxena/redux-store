import actionTypes from "../contants/actionTypes";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const setProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({
    type: actionTypes.SET_PRODUCTS,
    payload: response.data,
  });
};

export const setSelectedProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({
    type: actionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const RemoveSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

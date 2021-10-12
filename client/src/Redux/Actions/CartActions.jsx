import { ADD_TO_CART } from "../ActionTypes/ActionTypes";

//Add Item
export const AddCartItem = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

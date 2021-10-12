import { ADD_TO_CART } from "../ActionTypes/ActionTypes";

const initalState = {
  cartItems: [],
};

export const CartReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };

    default:
      return state;
  }
};

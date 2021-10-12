import {
  SELECTED_ITEM,
  REMOVE_ITEM,
  ADD_ITEM,
  GET_ITEMS,
} from "../ActionTypes/ActionTypes";

const initalState = {
  items: [],
};

export const ItemReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return { items: [...state.items, payload] };

    case GET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case REMOVE_ITEM:
      return { items: [state.items.filter((item) => item !== payload)] };

    default:
      return state;
  }
};

export const SelectedItemReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_ITEM: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};

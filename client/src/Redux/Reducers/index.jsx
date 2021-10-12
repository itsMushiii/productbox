import { combineReducers } from "redux";
import { ItemReducer } from "./ItemReducer";
import { SelectedItemReducer } from "./ItemReducer";
import { CartReducer } from "./CartReducer";

const rootReducer = combineReducers({
  ItemReducer,
  SelectedItemReducer,
  CartReducer,
});

export default rootReducer;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function CreateStore() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

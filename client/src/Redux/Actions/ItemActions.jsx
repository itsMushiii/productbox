import {
  REMOVE_ITEM_FAIL,
  ADD_ITEM,
  REMOVE_ITEM,
  GET_ITEMS,
  SELECTED_ITEM_FAIL,
  SELECTED_ITEM,
  GET_ITEMS_FAIL,
  ADD_ITEM_FAIL,
} from "../ActionTypes/ActionTypes";
import axios from "axios";

//Add Item
export const AddItem = (data) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/items/", data);

    dispatch({ type: ADD_ITEM, payload: response.data });
    alert("Item Added Successfully");
  } catch (error) {
    alert(error);
    dispatch({
      type: ADD_ITEM_FAIL,
    });
  }
};

//Display Items
export const GetItems = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/items/");
    console.log(response.data);

    dispatch({ type: GET_ITEMS, payload: response.data });
  } catch (error) {
    alert(error);
    dispatch({
      type: GET_ITEMS_FAIL,
    });
  }
};
//Remove Item
export const RemoveItem = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/items/${id}`);

    dispatch({ type: REMOVE_ITEM, payload: id });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REMOVE_ITEM_FAIL,
    });
  }
};

export const SelectedItem = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/items/${id}`);

    dispatch({ type: SELECTED_ITEM, payload: response.data });
  } catch (error) {
    alert(error);
    dispatch({
      type: SELECTED_ITEM_FAIL,
    });
  }
};

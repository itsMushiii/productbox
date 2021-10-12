import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { RemoveItem, SelectedItem } from "../Redux/Actions/ItemActions";
import { AddCartItem } from "../Redux/Actions/CartActions";
import { Link } from "react-router-dom";

function ItemDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => state.SelectedItemReducer);

  const { name, price, img } = item;

  useEffect(() => {
    dispatch(SelectedItem(id));
  }, []);

  const DeleteItem = (id) => {
    dispatch(RemoveItem(id));
    history.push("/items");
  };
  const AddToCart = (item) => {
    dispatch(AddCartItem(item));
  };

  return (
    <div>
      <div className='container'>
        <div style={{ padding: "50px 0px" }}>
          <Link to='/checkout' style={{ textDecoration: "none" }}>
            <button className='btn btn-primary '>Checkout Page</button>
          </Link>
        </div>
        <h1 align='center'>Item Details</h1>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <img src={img} alt='' />
        <br />
        <button
          className='btn btn-sm btn-danger'
          type='submit'
          onClick={() => DeleteItem(id)}>
          Delete Item
        </button>
        <button className='btn btn-info btn-sm' onClick={() => AddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;

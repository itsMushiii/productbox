import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetItems } from "../Redux/Actions/ItemActions";
import { Link } from "react-router-dom";
import { AddCartItem } from "../Redux/Actions/CartActions";

function Items() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.ItemReducer.items);

  useEffect(() => {
    dispatch(GetItems());
  }, []);

  const AddToCart = (item) => {
    dispatch(AddCartItem(item));
  };
  return (
    <div style={{ paddingTop: "50px" }} className=''>
      <div className='container'>
        <Link to='/checkout' style={{ textDecoration: "none" }}>
          <button className='btn btn-primary '>Checkout Page</button>
        </Link>
        <div style={{ marginTop: "50px" }} className='row'>
          {items &&
            items.map((item, index) => {
              const { name, id, price, img } = item;

              return (
                <div key={index} className='col-lg-4 col-sm-12 col-md-6 '>
                  <div className='card'>
                    <img src={img} alt='' />

                    <div className='card-body'>
                      <h5 className='card-title'>Name: {name}</h5>
                      <h5 className='card-title'>Price: {price}</h5>
                      <Link
                        to={`/item/${id}`}
                        className='btn btn-sm btn-primary'>
                        View Details
                      </Link>
                      <button
                        className='btn btn-info btn-sm'
                        onClick={() => AddToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Items;

import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector((state) => state.CartReducer.cartItems);

  return (
    <div style={{ paddingTop: "50px" }} className=''>
      <div className='container'>
        {cartItems.length > 0 ? (
          <div className='row'>
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>ID</th>
                  <th scope='col'>Item Name</th>
                  <th scope='col'>Item Price</th>
                  <th scope='col'>Checkout</th>
                  <th scope='col'>Remove</th>
                </tr>
              </thead>

              {cartItems &&
                cartItems.map((item, index) => {
                  const { name, id, price, img } = item;

                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{index}</td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>
                          <button className='btn btn-success btn-sm'>
                            Checkout
                          </button>
                        </td>
                        <td>
                          <button className='btn btn-danger btn-sm'>
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        ) : (
          <h3>Cart is Empty</h3>
        )}
      </div>
    </div>
  );
}

export default Checkout;

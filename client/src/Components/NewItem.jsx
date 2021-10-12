import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/Actions/ItemActions";

function NewItem() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const Submit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      image: image,
    };
    dispatch(AddItem(data));
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className='AddItem' style={{ paddingTop: "50px" }}>
      <div className='container'>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Full Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div className='form-group'>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br />
        <div className='form-group'>
          Upload Picture
          <div style={{ marginTop: "8px" }} className='input-group mb-3'>
            <input
              type='file'
              className='form-control'
              id='image'
              name='image'
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group d-grid'>
          <button type='submit' className='btn btn-primary' onClick={Submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewItem;

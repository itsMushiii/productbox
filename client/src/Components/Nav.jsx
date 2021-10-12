import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            RandoStore
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              {/* <li className='nav-item active'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li> */}
              <li className='nav-item active'>
                <Link to='/items' className='nav-link'>
                  Items
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/add-item' className='nav-link'>
                  Add Item
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/checkout' className='nav-link'>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

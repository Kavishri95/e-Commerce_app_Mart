import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";


const Header = () => {
  const color = {
    color: "black",
  };
  // to show the total items in the cart
  const lengthOfCart = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="header">
           <div className='logo'>   
              <div><FaShoppingBag /></div>
              <h2>MART</h2>
        </div>  

        <ul className="nav justify-content-end">
          <li class="nav-item">
            <Link
              to="/home"
              class="nav-link active"
              aria-current="page"
              style={color}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Shop" className="nav-link" style={color}>
              Shop
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cart" className="nav-link" style={color}>
              Cart
            </Link>
          </li>

          <li className="nav-item">
         

            <Link to="/cart" href="#">
              <img
                className="cartimg"
                src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/cart-64.png"
              />
            </Link>
          </li>
          <li className="tolitmncrt">{lengthOfCart.length}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
import React from "react";
import "./Navbar.css"
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
    const quantity=useSelector(state=>state.cartReducer.quantity)
    // const quant=cart.quantity?cart.quantity:0;
    return (
        <nav>
            <div className="banner">Prathamesh's Store</div>
            <div className="right-container">
                <div className="cart">
                    <FaCartPlus />
                    <h3>{quantity}</h3>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import "./SingleProduct.css";
function SingleProduct(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cart);
    const currItem = cart.find((item) => item.id === props.id);
    const quant = currItem ? currItem.quantity : 0;
    return (
        <div className="card">
            <img className="image" src={props.img} alt="" />
            <div className="content">
                <h3>{props.title}</h3>
                <p className="price-tag">Rs {props.price}</p>
                <div className="btn-container">
                    <button
                        onClick={() => {
                            dispatch(addToCart(props.id));
                        }}
                    >
                        +
                    </button>
                    <p className="quants">{quant}</p>
                    <button
                        onClick={() => {
                            dispatch(removeFromCart(props.id));
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;

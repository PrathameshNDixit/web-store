import React from "react";
import { Spin } from "antd";
import "./ProductList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    const status = useSelector((state) => state.productReducer.status);
    useEffect(() => {
        dispatch(fetchData());
    }, []);
    if (status === "loading") {
        return (
            <div className="spin-container">
                <Spin className="spinner" tip="Loading" size="large"></Spin>
            </div>
        );
    }
    return (
        <div className="card-container">
            {console.log(products)}
            {products.map((item, i) => (
                <SingleProduct
                    key={i}
                    id={item.id}
                    price={item.price}
                    img={item.images[0]}
                    title={item.title}
                    desc={item.description}
                />
            ))}
        </div>
    );
}

export default ProductList;

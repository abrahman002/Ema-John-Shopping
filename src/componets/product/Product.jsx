import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './Product.css'

const Product = (props) => {
    // console.log(props)

    const {name,price,seller,ratings,img}=props.product;

    const addToCart=props.addToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings} Start</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='btn-cart'>Add To Cart <FaShoppingCart /></button>
        </div>
    );
};

export default Product;
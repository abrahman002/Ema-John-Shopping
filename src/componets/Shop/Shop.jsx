import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addTocart = (product) => {
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addTocart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order Summary</h3>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
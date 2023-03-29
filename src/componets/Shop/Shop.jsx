import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
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

    useEffect(()=>{
        const storedCart=getShoppingCart();

        const svaeCart=[];
    for (const id in storedCart){
        const addedCart=products.find(product=>product.id===id)
        if(addedCart){
            const quantity=storedCart[id];
            addedCart.quantity=quantity;

            svaeCart.push(addedCart)
        }
    }

    setCart(svaeCart);
        
    },[products])

    const addTocart = (product) => {
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
        
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} key={product.id} addToCart={addTocart}></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
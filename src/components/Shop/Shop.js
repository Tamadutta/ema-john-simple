import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

const Shop = () => {
    
const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdKey => {
            const product = fakeData.find(pd => pd.key === pdKey);
            product.quantity = savedCart[pdKey]
            return product;
        })
        // console.log(previousCart)
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
       
        addToDatabaseCart(product.key, count)
    }
    
    
    return (
        <div className="structure-container">
            <div className="product-container">
                {
                        products.map(product => <Product 
                        key = {product.key}
                        showAddToCart = {true}
                        product = {product}
                        handleAddProduct ={handleAddProduct}>

                        </Product>)
                }
            </div>  
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to = '/review'><button className="cart-btn">Review Order</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;
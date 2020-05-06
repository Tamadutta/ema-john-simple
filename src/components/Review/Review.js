import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../Review item/ReviewItem';
import Cart from '../Cart/Cart';
import HappyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [cart, setCart] =  useState([]);
    const auth = useAuth()
    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true)
        clearLocalShoppingCart();
    }
   
    

    const removeProduct =(productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        // console.log(productKeys);
        const cartProducts =  productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        console.log(cartProducts);
        setCart(cartProducts)
    }, [])
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={HappyImage} alt=""/>
    }
    return (
        <div className="structure-container">
        <div className="product-container">
        {
               cart.map(pd => <ReviewItem 
                key = {pd.key}
                removeProduct = {removeProduct}
                product = {pd}>

                </ReviewItem>
                )}
                {thankYou}
                {
                !cart.length && <h1>Your cart is empty. <a href ='/shop'>Keep Shopping</a></h1>
                }
  </div>
        <div className="cart-container">
            <Cart 
                cart ={cart}>
                <Link to = "/Shipment">
                    {
                        auth.user ? 
                        <button className='cart-btn'>Proceed Checkout</button>
                        :<button className='cart-btn'>Login To Proceed</button>
                 }
                 </Link>
                 
            </Cart>
        </div>
        </div>
    );
};

export default Review;

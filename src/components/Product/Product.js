import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    //   console.log(props)
    const {img, name, seller, price, stock} = props.product
    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div>
                    <h5 className='product-name'>{name}</h5>               
                    <p>by :{seller}</p>
                    <p>price: ${price}</p>
                    <p>Only {stock} left in stock. Order soon</p>
                    <button 
                    className="cart-btn"
                    onClick={() => props.handleAddProduct(props.product)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;
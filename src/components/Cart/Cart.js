import React from 'react';

const Cart = (props) => {
    console.log(props)
    const cart = props.cart
    // const total = cart.reduce((total, product)=>total + product.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
   }
   let shipping = 0;
   if(total > 35){
       shipping = 0;
   }
   else if(total > 20){
       shipping = 6.00;
   }
   else if(total > 0){
       shipping = 12.34
   }
   const tax = total / 10
   const grandTotal = total + shipping + tax
   const formatNumber = num => {
       const digit = num.toFixed(2)
       return Number(digit);
   }
    return (
        <div>
            <h2>Order summary</h2>
            <p>items ordered :{cart.length}</p>
            <p>Product price : {formatNumber(total)}</p>
            <p><small>Shipping cost : {shipping}</small></p>
            <p><small>Tax + vat :{formatNumber(tax)}</small></p>
            <p>Total price : {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;
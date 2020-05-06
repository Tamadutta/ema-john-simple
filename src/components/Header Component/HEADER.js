import React, { useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { useAuth } from '../Login/useAuth';

// const usePrevious = value => {
//     const previous = useRef();
//     useEffect( () => {
//         console.log(value);
//         previous.current = value;
//     }, [value])
//     return previous.current;
// }

const HEADER = () => {
    // const [count, setCount] = useState(0)
    // const prevCount = usePrevious(count)

    const auth = useAuth();
    
    return (
        <div className = 'header'>
            <img src = {logo} alt = ""></img>
            
            {/* <h1>count :{count} previous : {prevCount}</h1>
            <button  onClick={() => setCount(count + 1)}>+</button>
        
            <button onClick={() => setCount(count - 1)}>-</button> */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage Inventory</a>
               { 
               auth.user &&
               <span style = {{color : 'yellow'}}>{auth.user.name}</span>
               }
               {
                   auth.user ? 
                   <a href = "/login">Sign Out</a>
                   :<a href = "/login">Sign In</a>
               }
    
            </nav>
    
        </div>
    );
    
};

export default HEADER;
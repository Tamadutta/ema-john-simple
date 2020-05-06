// import React, { Component } from 'react';

// class ProductDetail extends Component {
//     constructor(params){
//         super(params)
//         this.state = {
//             count: 0
//         }

//     }
//     handleClick(){
//         const newCount = this.state.count + 1;
//         this.setState({count : newCount})
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default ProductDetail;

import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd=> pd.key === productKey)
    //console.log(product);
    return (
        <div>
            <h4>Product Detail : </h4>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;
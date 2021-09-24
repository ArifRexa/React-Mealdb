import React from 'react';

const Ordered = (props) => {
    const {cart} = props;
    // console.log(cart[0]);
    let arr = [...cart]
    let newarr = []

    for (const key of arr) {
        if (key.strMeal !== -1) {
            newarr.push(key.strMeal) 
        }
        
    }
    // console.log(newarr);

    
    return (
        <div>
            <h1>Ordered Item is Here</h1>
            <h4>Items number : {props.cart.length}</h4>
            <h4>Items name : {newarr.join(" , ")} <br /></h4>
            {/* <h4>Items name : {props.cart.strMeal}</h4> */}
            
            
        </div>
    );
};

export default Ordered;
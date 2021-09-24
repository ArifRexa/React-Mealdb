import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart,  } from '@fortawesome/free-solid-svg-icons'
import './Food.css'


const Food = (props) => {
    const { strMeal, strCategory, strTags, strMealThumb } = props.food

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className = "item-style">
            <div>

                <img className="food-img" src={strMealThumb} alt="" />
            </div>
            <div>

                <h3>Name: {strMeal}</h3>
                <h3>Category: {strCategory}</h3>
                <h3>Tags: {strTags? strTags : "Not Available"}</h3>
                <button className = "btn-style"
                 
                onClick={() => props.handleitem(props.food)} >{element} Add to cart</button>
            </div>

        </div>
    );
};

export default Food;
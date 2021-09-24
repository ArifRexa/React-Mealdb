import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Ordered from '../Ordered/Ordered';
import './Shop.css'

const Shop = () => {
    const [foods, setFood] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFood(data.meals))

    }, [])

    const handleitem = (food) =>{
        const newFoods = [...cart, food]
        setCart(newFoods)
    }
    return (
        <div className="shop-style">
            <div className= "item-desplay-style">

                {
                    foods.map(food => <Food 
                        key = {food.idMeal}
                        food={food}
                        handleitem = {handleitem}></Food>)
                }
            </div>

            <Ordered cart = {cart}></Ordered>


        </div>
    );
};

export default Shop;
import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
    const [quickByteMeals, setQuickByteMeals] = useState([]);

    useEffect(()=>{
        async function fetchMeals() {
            try {
                const response = await fetch('http://localhost:3000/meals');
                if (!response.ok) {
                    //
                }
                const meals = await response.json();
                setQuickByteMeals(meals);
            } catch (err) {
    
            }
    
        }
        fetchMeals();

    },[])


    return (
        <ul id="meals">
            {quickByteMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    )
}
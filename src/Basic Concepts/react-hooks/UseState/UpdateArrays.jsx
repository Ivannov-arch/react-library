import React, {useState} from "react";
React
import { useNavigate } from "react-router-dom";

function MyFoods() {
const navigate = useNavigate
    
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i!== index))
    }

    return(
        <div>

            <div className="*:mx-4 my-6 *:my-3">
            <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
                
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input className="border rounded" type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default MyFoods
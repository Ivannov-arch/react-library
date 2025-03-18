import List from "./List";
import { useNavigate } from "react-router-dom";

function AppList() {
const navigate = useNavigate()

    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

    const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                        {id: 7, name: "celery", calories: 15}, 
                        {id: 8, name: "carrots", calories: 25}, 
                        {id: 9, name: "corn", calories: 63}, 
                        {id: 10, name: "broccoli", calories: 20}];

    fruits.sort((a, b) => a.name.localeCompare(b.name));
    vegetables.sort((a,b) => a.calories - b.calories);

    return(
        <>
            <div className="*:mx-4 my-6 *:my-3">
                    <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>

            {fruits.length> 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length> 0 && <List items={vegetables} category="Vegetables"/>}
        </>
    )
}

export default AppList
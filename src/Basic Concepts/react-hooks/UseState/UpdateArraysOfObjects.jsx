import React, {useState} from "react";
React
import { useNavigate } from "react-router-dom";

function MyCars() {
const navigate = useNavigate()

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear, 
                        make: carMake,
                        model: carModel}
        setCars(c => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    function handleRemoveCar(index) {
        setCars(cars.filter((_, i) => i !== index))
    }

    function handleChangeYear(event) {
        setYear(event.target.value);
    }

    function handleChangeMake(event) {
        setMake(event.target.value);
    }

    function handleChangeModel(event) {
        setModel(event.target.value);

    }

    return(
        <div>

            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

            <div className="*:my-2">
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) =>
                    <li className="border" key={index} onClick={handleRemoveCar}>
                        {car.year} {car.make} {car.model}</li>)}
                </ul>
                <div className="*:my-0.5 *:p-1 *:border *:rounded">
                    <input type="number" value={carYear} onChange={handleChangeYear}/> <br />
                    <input type="text" value={carMake} onChange={handleChangeMake}
                           placeholder="Enter car make" /> <br />
                    <input type="text" value={carModel} onChange={handleChangeModel}
                           placeholder="Enter car model" /> <br />
                    <button onClick={handleAddCar}>Add Car</button>
                </div>
            </div>
        </div>
    )
}

export default MyCars
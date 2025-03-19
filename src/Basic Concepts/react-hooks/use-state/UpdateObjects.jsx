import React, {useState} from "react"
React
import { useNavigate } from "react-router-dom";

// update OBJECTS in state

function MyCar() {
    const navigate = useNavigate();

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"
    })

    function handleYearChange (event) {
        setCar(c=> ({...c, year: event.target.value}));
    }
    function handleMakeChange (event) {
        setCar( c=> ({...c, make: event.target.value}));
    }
    function handleModelChange (event) {
        setCar(c=> ({...c, model: event.target.value}));
    }

    return(
        <div>

            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>

            <input className="my-0.5 border-[0.1px] rounded" type="number" value={car.year} onChange={handleYearChange}/><br />
            <input className="my-0.5 border-[0.1px] rounded" type="text" value={car.make} onChange={handleMakeChange}/> <br />
            <input className="my-0.5 border-[0.1px] rounded" type="text" value={car.model} onChange={handleModelChange}/> <br />
        </div>
    )
}

export default MyCar
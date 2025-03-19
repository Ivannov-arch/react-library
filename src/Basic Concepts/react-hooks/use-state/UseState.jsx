// React hook = Special function that allows functional components
    //          to use React features without writing class components (React v16.8)
    //          (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
    //          AND a setter function to update its value in the Virtual DOM
    //          [name, setName]

import React, {useState} from 'react';
React
import { Link } from 'react-router-dom';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        switch (name) {
            case "Guest":
                setName("Spongebob");
                break;
            case "Spongebob":
                setName("Guest");
                break;
    }
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toogleIsEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>

            <div className="*:mx-4 my-6 *:my-3">
                    <Link to='/'>Home</Link>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>

            <div className='*:my-2'>
                <div className='flex justify-between items-center gap-2'>
                    <p>Name: {name}</p>
                    <button onClick={updateName}>Set Name</button>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <p>Age: {age}</p>
                    <button onClick={incrementAge}>Increment Age</button>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                    <button onClick={toogleIsEmployedStatus}>Toogle Status</button>
                </div>
            </div>

        </div>
    )

}

export default MyComponent
import React, {useState} from "react"
React

import { useNavigate } from "react-router-dom"

function Counter() {
const navigate = useNavigate

    const divStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif"
    }
    const displayStyle = {
        fontSize: "10em",
        marginTop: 0,
        marginBottom: "50px"
    }
    const buttonStyle = {
        width: "150px",
        height: "50px",
        fontSize: "1.5em",
        fontWeight: "bold",
        margin: "5px 5px",
        backgroundColor: "hsl(197, 100%, 58%)",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);

        //updater function
        // setCount(c => c + 1);
        // setCount(c => c + 1);
        // setCount(c => c + 1);
        //OR
        // setCount(pervCount => pervCount + 1)
    }

    const decrement = () => {
        setCount(count - 1);

        //updater function
        // setCount(c => c - 1);
        // setCount(c => c - 1);
        // setCount(c => c - 1);
        //OR
        // setCount(pervCount => pervCount - 1)
    }

    const reset = () => {
        setCount(0);
        // setCount(c => c = 0)
    }

    const random = () => {
        setCount(Math.floor(Math.random() * (-100 - 100)) + 100);
    }

    return(
        <div style={divStyle}>

            <div className="*:mx-4 my-6 *:my-3">
            <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>

            <p style={displayStyle}>{count}</p>
            <button style={buttonStyle} onClick={decrement}>Decrement</button>
            <button style={buttonStyle} onClick={reset}>Reset</button>
            <button style={buttonStyle} onClick={increment}>Increment</button>
            <button style={buttonStyle} onClick={random}>Random</button>
        </div>
    )
}

export default Counter





// Updater function = A function passed as an argument to setState() usually
    //                ex. setYear(arrow function)
    //                Allow for safe updates based on the previous state
    //                Used with multiple state updates and asynchronous functions
    //                Good practice to use updater functions
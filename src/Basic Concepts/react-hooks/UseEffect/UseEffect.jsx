// useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
    //           This component re-renders
    //           This component mounts
    //           The state of a value


// useEffect(function, [dependencies])

    //  1. useEffect(() => {})          // Runs after every re-render
    //  1. useEffect(() => {}, [])      // Runs after every re-render
    //  1. useEffect(() => {}, [value]) // Runs after every re-render

// USES
    // 1. Event Listeners
    // 2. DOM Manipulations
    // 3. Subscriptions (real-time updates)
    // 4. Fetching Data from an API
    // 5. Clean Up when a component unmounts
    

import React, {useState, useEffect} from "react";
React
import { useNavigate } from "react-router-dom";


function MyEffect () {
const navigate = useNavigate()


    // ---------------------------------------------------------------------------
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        
        return() => {
            // SOME CLEANUP CODE
        }
    },[count, color])

    function addCount() {
        setCount(c => c  + 1);
    }
    function substractCount() {
        setCount(c => c  - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    // ------------------------------------------------------------------------

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return() => {
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // ------------------------------------------------------------------

    return(
        <>
        <div className="*:mx-4 my-6 *:my-3">
            <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>
        <p>Window Width: {width}</p>
        <p>Window Heighth: {height}</p>

        <div className="mt-6 border rounded">
            <p className="mt-6 mb-4 text-3xl" style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={substractCount}>Substract</button>
                <button onClick={changeColor}>Change Color</button>
        </div>
        </>
    )
}


export default MyEffect
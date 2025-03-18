import React, { useEffect, useRef } from "react";
React
import { useNavigate } from "react-router-dom";

function UseRef() {
const navigate = useNavigate()
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = ""
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow"
    }

    return(
        <div className="*:my-1 *:border *:rounded">
           <div className="*:mx-4 my-6 *:my-3 border-none">
            <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>
            <button className="mx-2" onClick={handleClick1}>
                Click me!
            </button>
            <input ref={inputRef1} /> <br />

            <button className="mx-2" onClick={handleClick2}>
                Click me!
            </button>
            <input ref={inputRef2} /> <br />
            
            <button className="mx-2" onClick={handleClick3}>
                Click me!
            </button>
            <input ref={inputRef3} />
        </div>
    )
}

export default UseRef
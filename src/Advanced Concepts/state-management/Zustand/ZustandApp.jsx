import React from "react";
React;
import useCounterStore from "./Zustand";
import useAuthStore from "../../../Auth/AuthStore";
import { useNavigate } from "react-router-dom";

function CounterDisplay() {
    const count = useCounterStore((state) => state.count); // ambil nilai count
    return <h1>Count: {count}</h1>
}

function CounterControls() {

    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);

    return (
        <div>
            <button onClick={decrement}>Kurangi</button>
            <button onClick={increment}>Tambah</button>
        </div>
    )
}

export default function ZustandApp() {
const navigate = useNavigate

    const user = useAuthStore((state) => state.user)

    return(
        <div className="flex-col *:my-6"> 
            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
            <div>    
                <h2>Zustand</h2>
                <p>Welcome, {user.name}</p>
            </div>

            <CounterDisplay/>
            <CounterControls/>
        </div>
    )
}
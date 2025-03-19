// useContext () = React Hook thta allows you to share values
    //             between multiple levels of components
    //             without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENTS

// 1. import React, {useContext} from "react";
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);

import React, {useState, createContext} from "react";
React
import { useNavigate } from "react-router-dom";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function UseContext() {
const navigate = useNavigate()

    // const [user, setUser] = useState("Brocode")
    const [user] = useState("Brocode")

    return(
        <div>
            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                        <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>

            <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value = {user}>
                    <ComponentB user = {user}/>
                </UserContext.Provider>
            </div>
        </div>
    )
}

export default UseContext
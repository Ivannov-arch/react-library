// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar'


import useCounterStore from "./Advanced Concepts/state-management/Zustand/Zustand";
import { useSelector } from 'react-redux';
import useAuthStore from './Auth/AuthStore.jsx'
import { useNavigate } from 'react-router-dom';
// import Login from './Auth/Login.jsx'?
// import Dashboard from './Auth/Dashboard.jsx'


function CounterDisplay() {
    const zustandCount = useCounterStore((state) => state.count); // ambil nilai count
    return <h1>ZCount: {zustandCount}</h1>
}

function App() {
const navigate = useNavigate();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)

  // const [count, setCount] = useState(0)
  const reduxCount = useSelector((state) => state.count)


  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn); // Debugging
    if (!isLoggedIn) {
      navigate('/login');
    } 
  }, [isLoggedIn, navigate]);
  

  return (
    <>
      <div>
        <Navbar/>
        <h2>Home</h2>
        <p>Welcome, {user? user.name : "Guest"}</p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="mx-auto text-xl logo react" alt="React logo" />
        </a>

        <div className=''>
          <CounterDisplay/>
          <div  className='py-10'/>
          <h1>Redux Counter</h1>
                <h2 className="my-5 text-6xl">{reduxCount}</h2>

          <div className='*:mx-2'>
            <button onClick={logout} className='bg-gray-900'>Log out</button>
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

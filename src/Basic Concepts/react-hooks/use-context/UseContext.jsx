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

import React, { useState, createContext } from "react";
React;
import { useNavigate } from "react-router-dom";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

export default function UseContext() {
  const navigate = useNavigate();

  const [user] = useState("Brocode");
  return (
    <div className="space-y-6 text-left">
      <h1>📦 React useContext Hook</h1>

      <p>
        <strong>Apa Itu useContext?</strong>
        <br />
        <code>useContext()</code> adalah React Hook yang memungkinkan kita{" "}
        <strong>berbagi data antar komponen</strong> tanpa harus mengoper props
        secara manual ke setiap level (prop drilling).
      </p>
      <h2>🧠 Kapan Digunakan?</h2>
      <ul className="list-disc list-inside">
        <li>Saat banyak komponen butuh akses ke data yang sama.</li>
        <li>Contoh umum: user login, tema aplikasi, bahasa, dll.</li>
        <li>
          Alternatif ringan sebelum memakai state management seperti Redux.
        </li>
      </ul>
      <h2>🛠️ Cara Kerja useContext</h2>
      <p>Langkah-langkah penggunaan useContext secara umum:</p>
      <ol className="list-decimal list-inside">
        <li>
          Buat konteks dengan <code>createContext()</code>.
        </li>
        <li>
          Bungkus komponen dengan <code>Provider</code> dan beri nilai yang
          ingin dibagikan.
        </li>
        <li>
          Gunakan <code>useContext()</code> di komponen manapun untuk mengakses
          nilai tersebut.
        </li>
      </ol>
      <h2>👨‍💻 Contoh Kode Singkat</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`// UserContext.js
  import { createContext } from "react";
  export const UserContext = createContext();`}</code>
      </pre>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`// ComponentA.jsx
  import React, { useState } from "react";
  import { UserContext } from "./UserContext";
  import ComponentB from "./ComponentB";
  
  function ComponentA() {
    const [user] = useState("Brocode");
  
    return (
      <UserContext.Provider value={user}>
        <h1>ComponentA</h1>
        <ComponentB />
      </UserContext.Provider>
    );
  }`}</code>
      </pre>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`// ComponentD.jsx
  import React, { useContext } from "react";
  import { UserContext } from "./UserContext";
  
  function ComponentD() {
    const user = useContext(UserContext);
  
    return (
      <div>
        <h1>ComponentD</h1>
        <h2>{\`Bye: \${user}\`}</h2>
      </div>
    );
  }`}</code>
      </pre>

      <div>
        <div className="mx-auto max-w-fit box">
          <h1>ComponentA</h1>
          <h2>{`Hello ${user}`}</h2>
          <UserContext.Provider value={user}>
            <ComponentB user={user} />
          </UserContext.Provider>
        </div>
      </div>
      <h2>🔗 Alur Data (Ringkasan)</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>createContext()</strong> → membuat konteks (seperti global
          state).
        </li>
        <li>
          <strong>Provider</strong> → membagikan data ke komponen-komponen di
          dalamnya.
        </li>
        <li>
          <strong>useContext()</strong> → mengambil data dari konteks di
          komponen manapun.
        </li>
      </ul>
      <h2>📌 Tips Praktis</h2>
      <ul className="list-disc list-inside">
        <li>
          Hindari menyimpan terlalu banyak logika di dalam context — lebih baik
          pisahkan logic & state.
        </li>
        <li>
          Jika nilai dalam context berubah terus-menerus, pertimbangkan
          memoization atau React.memo untuk efisiensi.
        </li>
        <li>
          Gunakan context untuk <strong>data global yang jarang berubah</strong>
          .
        </li>
      </ul>
      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useContext()</code> menyederhanakan berbagi data antar komponen
        tanpa repot oper-oper props. Sangat cocok untuk state global seperti
        user info, tema, dan bahasa.
      </p>
      <div className="*:mx-4 my-6 *:my-3">
        <button onClick={() => navigate("/")} className="text-indigo-600">
          Home
        </button>
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600"
        >
          Back
        </button>
      </div>
    </div>
  );
}

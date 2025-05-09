// React hook = Special function that allows functional components
//          to use React features without writing class components (React v16.8)
//          (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//          AND a setter function to update its value in the Virtual DOM
//          [name, setName]

import React, { useState } from "react";
React;
import Buttons from "../../../Components/Button";

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
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toogleIsEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <div className="*:my-2">
        <div className="flex justify-between items-center gap-2">
          <p>Name: {name}</p>
          <button onClick={updateName}>Set Name</button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p>Age: {age}</p>
          <button onClick={incrementAge}>Increment Age</button>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
          <button onClick={toogleIsEmployedStatus}>Toogle Status</button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>📦 Memahami useState di React</h1>

      <p>
        <strong>Apa Itu useState?</strong>
        <br />
        <code>useState</code> adalah hook dasar di React yang digunakan untuk
        menyimpan dan mengelola *state* (data yang bisa berubah) di dalam
        komponen fungsional. Tanpa ini, React tidak tahu kapan harus me-render
        ulang.
      </p>

      <h2>🧠 Cara Kerja useState</h2>
      <p>
        Ketika kamu memanggil <code>useState(defaultValue)</code>, React akan
        menyimpan nilai awal dan mengembalikan dua hal:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <code>state</code> → Nilai sekarang
        </li>
        <li>
          <code>setState</code> → Fungsi untuk mengubah nilainya
        </li>
      </ul>

      <h2>🧪 Contoh Kode Lengkap</h2>
      <p>
        Di bawah ini contoh penggunaan <code>useState</code> untuk mengatur tiga
        data: nama, umur, dan status pekerjaan.
      </p>
      <div className="bg-gray-700 p-5 border rounded max-w-xl">
        <MyComponent />
      </div>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import { useState } from "react";
  
  function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
  
    const updateName = () => {
      setName(name === "Guest" ? "Spongebob" : "Guest");
    };
  
    const incrementAge = () => {
      setAge(age + 1);
    };
  
    const toggleIsEmployedStatus = () => {
      setIsEmployed(!isEmployed);
    };
  
    return (
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
  
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
  
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleIsEmployedStatus}>Toggle Status</button>
      </div>
    );
  }
  
  export default MyComponent;`}</code>
      </pre>

      <h2>⚙️ Penjelasan Perubahan</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>setName</code> akan mengganti <code>name</code>{" "}
          {`dari "Guest"
            menjadi "Spongebob", dan sebaliknya.`}
        </li>
        <li>
          <code>setAge</code> akan menaikkan angka <code>age</code> satu per
          satu.
        </li>
        <li>
          <code>setIsEmployed</code> akan membalik nilai boolean (
          <code>true</code>/<code>false</code>).
        </li>
      </ul>

      <h2>💡 Kenapa Perlu useState?</h2>
      <p>
        Karena React hanya akan *re-render* komponen jika kamu menggunakan
        <code>useState</code> atau hook lain yang *state-aware*. Kalau kamu
        hanya mengubah variabel biasa, perubahan itu tidak akan terlihat di UI.
      </p>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>useState</code> untuk menyimpan dan mengatur data
        dinamis dalam React. Ini adalah fondasi dari interaktivitas di aplikasi
        React modern.
      </p>
      <Buttons />
    </div>
  );
}

import React, { useState } from "react";
React;
import Buttons from "../../../Components/Button";

// update OBJECTS in state

function MyCar() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div className="space-y-1">
      <p className="mb-3">
        Your Favourite car is: {car.year} {car.make} {car.model}
      </p>
      <input
        className="my-0.5 border-[0.1px] rounded"
        type="number"
        value={car.year}
        onChange={handleYearChange}
      />
      <br />
      <input
        className="my-0.5 border-[0.1px] rounded"
        type="text"
        value={car.make}
        onChange={handleMakeChange}
      />{" "}
      <br />
      <input
        className="my-0.5 border-[0.1px] rounded"
        type="text"
        value={car.model}
        onChange={handleModelChange}
      />{" "}
      <br />
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🚗 Mengelola Object dengan useState di React</h1>

      <p>
        <strong>Kenapa Update Object Harus Hati-hati?</strong>
        <br />
        Di React, kalau kamu update satu properti dalam object tanpa menyertakan
        properti lain, properti lainnya bisa hilang. Jadi, kamu harus selalu
        *spread* dulu object lamanya, lalu ubah properti yang ingin di-update.
      </p>

      <h2>📦 Contoh Kasus: Mobil Favorit</h2>
      <div className="bg-gray-700 p-5 border rounded max-w-fit">
        <MyCar />
      </div>
      <p>
        Kita akan mengelola sebuah object <code>car</code> yang punya properti{" "}
        <code>year</code>, <code>make</code>, dan <code>model</code>. Setiap
        input mengubah salah satu properti tersebut.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  function MyCar() {
    const navigate = useNavigate();
  
    const [car, setCar] = useState({
      year: 2024,
      make: "Ford",
      model: "Mustang"
    });
  
    function handleYearChange(event) {
      setCar(c => ({ ...c, year: event.target.value })); // update tahun
    }
  
    function handleMakeChange(event) {
      setCar(c => ({ ...c, make: event.target.value })); // update merek
    }
  
    function handleModelChange(event) {
      setCar(c => ({ ...c, model: event.target.value })); // update model
    }
  
    return (
      <div>
        <button onClick={() => navigate("/")} className="text-indigo-600">Home</button>
        <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
  
        <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>
  
        <input type="number" value={car.year} onChange={handleYearChange} className="my-0.5 border-[0.1px] rounded" /><br />
        <input type="text" value={car.make} onChange={handleMakeChange} className="my-0.5 border-[0.1px] rounded" /><br />
        <input type="text" value={car.model} onChange={handleModelChange} className="my-0.5 border-[0.1px] rounded" /><br />
      </div>
    );
  }
  
  export default MyCar;`}</code>
      </pre>

      <h2>⚙️ Penjelasan Update Object</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>{`setCar(c => ({ ...c, year: event.target.value }))`}</code> →
          Menyalin object lama lalu ubah properti tertentu.
        </li>
        <li>
          Kalau kamu tidak melakukan <code>{`...c`}</code>, properti lainnya
          akan hilang saat di-update.
        </li>
        <li>
          Selalu update dengan versi function seperti{" "}
          <code>{`setCar(prev => ...)`}</code> agar data terbaru yang digunakan.
        </li>
      </ul>

      <h2>💡 Tips Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Jangan pernah ubah object secara langsung, misalnya{" "}
          <code>car.year = 2023</code> → ini tidak akan trigger render.
        </li>
        <li>
          Jangan lupa spread <code>...prevObject</code> sebelum ubah properti.
        </li>
        <li>
          Boleh menggabungkan banyak perubahan sekaligus dalam satu call jika
          perlu.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Saat bekerja dengan object di React, gunakan spread operator dan{" "}
        <code>setState</code> berbasis function agar semua properti tetap
        terjaga dan update berjalan aman.
      </p>
      <Buttons />
    </div>
  );
}

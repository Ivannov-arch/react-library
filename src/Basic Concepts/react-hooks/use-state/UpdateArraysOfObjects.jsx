import React, { useState } from "react";
import Buttons from "../../../Components/Button";
React;

function MyCars() {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }
  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  function handleChangeMake(event) {
    setMake(event.target.value);
  }

  function handleChangeModel(event) {
    setModel(event.target.value);
  }

  return (
    <div>
      <div className="*:my-2">
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => (
            <li
              className="p-1 border rounded text-indigo-400"
              key={index}
              onClick={handleRemoveCar}
            >
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <div className="*:my-0.5 *:p-1 *:border *:rounded">
          <input type="number" value={carYear} onChange={handleChangeYear} />{" "}
          <br />
          <input
            className="placeholder-gray-400"
            type="text"
            value={carMake}
            onChange={handleChangeMake}
            placeholder="Enter car make"
          />{" "}
          <br />
          <input
            className="placeholder-gray-400"
            type="text"
            value={carModel}
            onChange={handleChangeModel}
            placeholder="Enter car model"
          />{" "}
          <br />
          <button onClick={handleAddCar}>Add Car</button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🚙 Mengelola Array of Objects dengan useState</h1>

      <p>
        <strong>Kapan Pakai Ini?</strong>
        <br />
        Saat kamu butuh menyimpan daftar object (misalnya daftar mobil, user,
        produk), kamu gunakan array of objects. Setiap object punya beberapa
        properti dan kamu bisa menambahkan/menghapus item dari daftar tersebut.
      </p>

      <h2>📦 Contoh Kasus: Daftar Mobil</h2>
      <div className="bg-gray-700 p-5 border rounded max-w-fit">
        <MyCars />
      </div>
      <p>
        Kita akan menyimpan banyak mobil, masing-masing dengan <code>year</code>
        , <code>make</code>, dan <code>model</code>. Lalu bisa menambahkan dan
        menghapus dari array tersebut.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import React, { useState } from "react";
  
  function MyCars() {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");
  
    function handleAddCar() {
      const newCar = { year: carYear, make: carMake, model: carModel };
      setCars(c => [...c, newCar]); // tambahkan mobil ke array
      setYear(new Date().getFullYear());
      setMake("");
      setModel("");
    }
  
    function handleRemoveCar(index) {
      setCars(c => c.filter((_, i) => i !== index)); // hapus berdasarkan index
    }
  
    return (
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)} className="border">
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
  
        <div className="*:my-0.5 *:p-1 *:border *:rounded">
          <input type="number" value={carYear} onChange={e => setYear(e.target.value)} /><br />
          <input type="text" value={carMake} onChange={e => setMake(e.target.value)} placeholder="Enter car make" /><br />
          <input type="text" value={carModel} onChange={e => setModel(e.target.value)} placeholder="Enter car model" /><br />
          <button onClick={handleAddCar}>Add Car</button>
        </div>
      </div>
    );
  }
  
  export default MyCars;`}</code>
      </pre>

      <h2>⚙️ Penjelasan Update Array of Objects</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>{`setCars(c => [...c, newCar])`}</code> → menambahkan object
          baru ke array (pakai spread agar tidak mutasi data lama).
        </li>
        <li>
          <code>{`setCars(c => c.filter((_, i) => i !== index))`}</code> →
          menghapus item berdasarkan index.
        </li>
        <li>
          Gunakan <code>key</code> yang stabil (misal ID) kalau array berasal
          dari database.
        </li>
      </ul>

      <h2>💡 Tips Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Selalu treat state seperti immutable — jangan pakai{" "}
          <code>push()</code> atau <code>splice()</code> langsung.
        </li>
        <li>
          Untuk update salah satu object dalam array, gunakan map lalu ubah
          object tertentu.
        </li>
        <li>
          Gunakan ID unik jika ingin menghindari konflik index saat
          update/hapus.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Untuk array of objects, pakai <code>[...prev, newObj]</code> untuk
        tambah, dan <code>filter/map</code> untuk update/hapus. Gunakan pattern
        ini sebagai dasar membangun form dinamis, todo list, atau tabel data.
      </p>
      <Buttons />
    </div>
  );
}

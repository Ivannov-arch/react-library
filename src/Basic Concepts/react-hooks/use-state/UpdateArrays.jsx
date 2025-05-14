import React, { useState } from "react";
import Buttons from "../../../Components/Button";
React;

function MyFoods() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input
        className="mx-3 p-1 border rounded text-white placeholder-gray-400"
        type="text"
        id="foodInput"
        placeholder="Enter food name"
      />
      <button className="mx-3" onClick={handleAddFood}>
        Add Food
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🍱 Mengelola Array dengan useState di React</h1>

      <p>
        <strong>Kenapa Harus Perhatian Saat Update Array?</strong>
        <br />
        Di React, kamu tidak boleh mengubah array secara langsung. Kita harus
        membuat *copy baru* dari array, lalu set dengan <code>setState()</code>.
        Kalau tidak, React bisa gagal mendeteksi perubahan dan tidak akan
        me-render ulang.
      </p>

      <h2>📦 Contoh Kasus: List Makanan</h2>
      <div className="bg-gray-700 p-5 border rounded max-w-fit">
        <MyFoods />
      </div>
      <p>
        Kita akan mengelola daftar makanan yang bisa ditambah dan dihapus oleh
        user.
        <code>useState</code> digunakan untuk menyimpan array-nya.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import React, { useState } from "react";
  
  function MyFoods() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  
    function handleAddFood() {
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";
      setFoods(f => [...f, newFood]); // tambah ke array
    }
  
    function handleRemoveFood(index) {
      setFoods(foods.filter((_, i) => i !== index)); // hapus berdasarkan index
    }
  
    return (  
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
          ))}
        </ul>
  
        <input className="border rounded" type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    );
  }
  
  export default MyFoods;`}</code>
      </pre>

      <h2>⚙️ Penjelasan Update Array</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>[...f, newFood]</code> → Membuat array baru dengan menambahkan
          makanan baru ke akhir array lama.
        </li>
        <li>
          <code>{`filter((_, i) => i !== index)`}</code> → Menghapus item
          berdasarkan indeks, dengan membuat array baru tanpa item tersebut.
        </li>
        <li>
          Setiap update harus melalui <code>setFoods()</code> agar React
          merender ulang komponen.
        </li>
      </ul>

      <h2>💡 Tips Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Jangan langsung ubah array seperti <code>foods.push()</code>!
        </li>
        <li>
          Gunakan spread syntax <code>[...prev]</code> atau{" "}
          <code>filter()</code> untuk buat array baru.
        </li>
        <li>
          Idealnya hindari akses DOM langsung seperti{" "}
          <code>getElementById</code>. Gunakan <code>useRef</code> atau{" "}
          <code>controlled input</code> jika memungkinkan.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Saat bekerja dengan array di React, kamu harus selalu buat *salinan
        baru* dan update menggunakan <code>setState()</code>. Ini menjaga
        komponen tetap *reactive* dan efisien.
      </p>
      <Buttons />
    </div>
  );
}

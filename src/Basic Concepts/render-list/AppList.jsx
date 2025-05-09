import List from "./List";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "Corn", calories: 63 },
    { id: 10, name: "Broccoli", calories: 20 },
  ];

  // Optional: Sorting data sebelum render
  fruits.sort((a, b) => a.name.localeCompare(b.name));
  vegetables.sort((a, b) => a.calories - b.calories);

  return (
    <div className="space-y-6 text-left">
      <h1>📃 Render Lists di React</h1>

      <p>
        <strong>Apa itu Render Lists?</strong>
        <br />
        Render Lists adalah cara menampilkan data berulang seperti array
        menggunakan <code>.map()</code> di React. Contohnya: daftar buah,
        produk, user, dll.
      </p>

      <h2>🔁 Cara Render List</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan <code>.map()</code> untuk membuat elemen React dari array.
        </li>
        <li>
          Pastikan setiap elemen punya <code>key</code> unik (biasanya pakai{" "}
          <code>id</code>).
        </li>
        <li>Bisa digabung dengan props agar komponen reusable.</li>
      </ul>

      <h2>📦 Komponen List</h2>
      <p>
        Komponen <code>&lt;List /&gt;</code> menerima props:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <code>category</code>: nama kategori seperti “Fruits” atau
          “Vegetables”.
        </li>
        <li>
          <code>items</code>: array data yang akan ditampilkan.
        </li>
      </ul>

      <h2>🧪 Contoh Penggunaan</h2>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}

      <h2>💡 Tips Tambahan</h2>
      <ul className="list-disc list-inside">
        <li>Urutkan list sebelum di-render agar tampilannya rapi.</li>
        <li>
          Filter list jika hanya ingin menampilkan data tertentu (misalnya
          kalori &lt; 100).
        </li>
        <li>
          Gunakan <code>propTypes</code> untuk validasi tipe data props.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Render list adalah konsep dasar namun sangat penting di React. Dengan{" "}
        <code>.map()</code> + <code>props</code>, kamu bisa membuat tampilan
        dinamis dan fleksibel.
      </p>

      <div className="*:mx-4 my-6 *:my-3 text-center">
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

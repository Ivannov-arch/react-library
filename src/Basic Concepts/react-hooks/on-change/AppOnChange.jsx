"use client";

import OnChange from "./OnChange";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-4 text-left">
      <h1>
        📝 Memahami <code>onChange</code> di React
      </h1>

      <p>
        <strong>
          Apa Itu <code>onChange</code>?
        </strong>
        <br />
        <code>onChange</code> adalah event handler yang digunakan untuk
        menangani perubahan pada elemen form seperti <code>&lt;input&gt;</code>,{" "}
        <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, dan{" "}
        <code>&lt;{`input type="radio"`}&gt;</code>. <br />
        Ketika nilai dari elemen tersebut berubah, <code>onChange</code> akan
        men-trigger sebuah fungsi.
      </p>

      <h2>🎯 Tujuan Utama</h2>
      <p>
        Menghubungkan input user ke state React agar tampilan antarmuka selalu
        sinkron dengan data yang tersimpan.
      </p>

      <h2>🔍 Contoh Implementasi</h2>
      <p>
        Di bawah ini adalah contoh komponen React yang menangani berbagai jenis
        input:
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const [name, setName] = useState("Guest");

function handleNameChange(event) {
  setName(event.target.value);
}

<input value={name} onChange={handleNameChange} />
<p>Name: {name}</p>`}</code>
      </pre>

      <p>
        Setiap kali user mengetik di input tersebut, fungsi{" "}
        <code>handleNameChange</code> dipanggil, lalu memperbarui state{" "}
        <code>name</code>.
      </p>

      <h2>
        📦 Jenis-Jenis Input yang Bisa Pakai <code>onChange</code>
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Text Input</strong>: untuk nama, username, dsb.
        </li>
        <li>
          <strong>Number Input</strong>: untuk jumlah/barang.
        </li>
        <li>
          <strong>Textarea</strong>: untuk komentar atau catatan panjang.
        </li>
        <li>
          <strong>Select</strong>: pilihan seperti metode pembayaran.
        </li>
        <li>
          <strong>Radio</strong>: pilihan antara dua opsi seperti “Pick Up” atau
          “Delivery”.
        </li>
      </ul>

      <h2>🧠 Pentingnya Controlled Component</h2>
      <p>
        Dengan <strong>controlled component</strong>, kita menyimpan data input
        di state React, bukan di DOM. Ini memberikan kita kontrol penuh terhadap
        input dan memungkinkan validasi atau manipulasi data secara langsung.
      </p>

      <h2>🔧 Komponen Lengkap</h2>
      <p>
        Berikut adalah komponen lengkap dari implementasi <code>onChange</code>:
      </p>
      <div className="bg-gray-50 p-4 border border-gray-300 rounded-md text-black">
        <OnChange />
      </div>

      <h2 className="text-center">🔁 Navigasi</h2>
      <div className="space-x-4 text-center">
        <button
          onClick={() => navigate("/")}
          className="text-indigo-600 underline"
        >
          Home
        </button>
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600 underline"
        >
          Back
        </button>
      </div>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>onChange</code> untuk membaca input pengguna secara
        real-time dan menyimpannya di state. Ini sangat krusial dalam pembuatan
        form, validasi data, serta menjaga UI tetap sinkron dengan logika
        aplikasi.
      </p>
    </div>
  );
}

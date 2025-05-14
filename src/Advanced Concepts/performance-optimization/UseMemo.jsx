// useMemo()
// Mengingat nilai hasil komputasi untuk mencegah komputasi ulang.

// useMemo adalah hook dalam React yang digunakan untuk mengoptimalkan performa
// dengan "menghafal" hasil perhitungan atau komputasi yang berat sehingga tidak
// dihitung ulang setiap kali komponen di-render, kecuali dependensinya berubah.

// Kapan Menggunakan useMemo?
// Kamu menggunakan useMemo ketika:

// Ada komputasi berat (misalnya menghitung angka besar, filtering data, atau sorting)
//  yang tidak perlu dihitung ulang pada setiap render.
// Kamu ingin memastikan fungsi tersebut hanya dijalankan ketika data tertentu berubah.

import { useState, useMemo } from "react";
import Buttons from "../../Components/Button";

export default function UseMemoPage() {
  const [items, setItems] = useState([100, 200, 300]);
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("Menghitung total...");
    return items.reduce((sum, item) => sum + item, 0);
  }, [items]);

  return (
    <div className="space-y-6 px-4 py-6 text-left">
      <h1>
        🧠 Optimasi Performa dengan <code>useMemo()</code> di React
      </h1>

      <p>
        <strong>Apa Itu useMemo?</strong>
        <br />
        <code>useMemo()</code> adalah hook React untuk{" "}
        <strong>menghindari komputasi ulang yang tidak perlu</strong>.
        {`Hook ini akan "mengingat" (memoize) hasil dari fungsi perhitungan, dan hanya menghitung ulang jika dependensi berubah.`}
      </p>

      <h2>📌 Kapan Gunakan useMemo?</h2>
      <ul className="list-disc list-inside">
        <li>
          Ada <strong>komputasi berat</strong> seperti sorting, filtering, atau
          kalkulasi besar.
        </li>
        <li>
          Nilai tersebut <strong>tidak berubah tiap render</strong>, jadi tidak
          perlu dihitung ulang.
        </li>
        <li>
          Ingin meningkatkan performa dengan menghindari operasi yang mahal.
        </li>
      </ul>

      <h2>💡 Contoh Sederhana</h2>
      <p>
        Di bawah ini, kita memiliki array <code>items</code> yang berisi harga.
        Kita gunakan <code>useMemo()</code>
        untuk menghitung total harga, agar tidak dihitung ulang setiap kali{" "}
        <code>count</code> bertambah.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const total = useMemo(() => {
  console.log("Menghitung total...");
  return items.reduce((sum, item) => sum + item, 0);
}, [items]);`}</code>
      </pre>

      <h2>🧪 Demo Interaktif</h2>
      <p>
        Perhatikan bahwa fungsi <code>Menghitung total...</code> hanya dipanggil
        jika <code>items</code> berubah.
      </p>

      <h3>Total Harga: {total}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-600 px-4 py-2 rounded-md text-white"
      >
        Tambah Count: {count}
      </button>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>useMemo()</code> saat kamu ingin{" "}
        <strong>menghemat performa</strong> React App-mu. Ini sangat berguna
        saat kamu punya komputasi berat yang{" "}
        <strong>tidak perlu dihitung ulang setiap render</strong>.
      </p>
      <Buttons />
    </div>
  );
}

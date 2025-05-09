import { useEffect, useLayoutEffect } from "react";
import Buttons from "../../../Components/Button";

export function UseLayoutEffect() {
  useEffect(() => {
    console.log("Message from useEffect");
  });

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  });

  return (
    <>
      <h2>Test useLayoutEffect</h2>
      <code>
        <p>useLayoutEffect will be executed before components being rendered</p>
        <p> and then useEffect after the components are rendered</p>
      </code>{" "}
      <hr /> <br />
      {Array(200)
        .fill("")
        .map((_, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 Memahami useLayoutEffect di React</h1>

      <p>
        <strong>Apa Itu useLayoutEffect?</strong>
        <br />
        <code>useLayoutEffect</code> adalah hook di React yang mirip dengan{" "}
        <code>useEffect</code>, tapi dijalankan <strong>lebih awal</strong>,
        tepat setelah semua DOM dimutakhirkan <em>(mutated)</em>, namun{" "}
        <strong>sebelum browser melukis tampilan</strong> ke layar.
      </p>

      <h2>🎯 Kapan Gunakan useLayoutEffect?</h2>
      <ul className="list-disc list-inside">
        <li>
          Ketika kamu ingin <strong>mengukur ukuran elemen</strong> (seperti
          tinggi/lebar).
        </li>
        <li>
          Ketika kamu ingin <strong>mengatur posisi elemen</strong> berdasarkan
          nilai DOM.
        </li>
        <li>
          Ketika kamu butuh <strong>menghindari flicker</strong> visual sebelum
          render terlihat.
        </li>
      </ul>

      <h2>⚖️ Perbandingan: useEffect vs useLayoutEffect</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>useEffect</code>: Dijalan **setelah komponen dirender ke
          layar**.
        </li>
        <li>
          <code>useLayoutEffect</code>: Dijalan **sebelum browser menampilkan
          hasil render**.
        </li>
        <li>
          Karena lebih awal, <code>useLayoutEffect</code> bisa{" "}
          <strong>menghambat rendering</strong> jika terlalu berat.
        </li>
      </ul>

      <h2>🧪 Contoh Kode: Perbedaan Waktu Eksekusi</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import { useEffect, useLayoutEffect } from 'react';
  
  export default function UseLayoutEffectDemo() {
    useEffect(() => {
      console.log('✅ useEffect dijalankan setelah render');
    });
  
    useLayoutEffect(() => {
      console.log('🔧 useLayoutEffect dijalankan sebelum render tampil di layar');
    });
  
    return (
      <>
        <h2>Test useLayoutEffect</h2>
        <p>Scroll ke bawah untuk melihat banyak elemen</p>
        <ul>
          {Array(40000)
            .fill('')
            .map((_, i) => (
              <li key={i}>{Math.pow(Math.random(), 10)}</li>
            ))}
        </ul>
      </>
    );
  }`}</code>
      </pre>

      <div className="bg-gray-700 p-5 border rounded h-96 overflow-y-scroll">
        <UseLayoutEffect />
      </div>

      <h2>🔍 Penjelasan Eksekusi</h2>
      <p>Dalam contoh di atas:</p>
      <ul className="list-disc list-inside">
        <li>
          <code>useLayoutEffect</code> langsung dijalankan **begitu React
          selesai mengupdate DOM**, sebelum layar sempat menggambar.
        </li>
        <li>
          <code>useEffect</code> baru dijalankan setelah semuanya ditampilkan di
          layar.
        </li>
        <li>
          Coba buka DevTools → Console, dan perhatikan urutan log yang keluar.
        </li>
      </ul>

      <h2>📌 Tips Penggunaan</h2>
      <ul className="list-disc list-inside">
        <li>
          Hindari melakukan operasi berat dalam <code>useLayoutEffect</code>.
        </li>
        <li>
          Gunakan hanya jika kamu benar-benar butuh kontrol DOM sebelum render
          terlihat.
        </li>
        <li>
          Untuk efek biasa, tetap gunakan <code>useEffect</code> agar UI tetap
          responsif.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🚀 <code>useLayoutEffect</code> memberikan kendali lebih awal atas DOM
        sebelum browser menggambar ke layar. Cocok untuk animasi, pengukuran
        layout, dan penyesuaian posisi — tapi jangan digunakan sembarangan
        karena bisa memperlambat render!
      </p>
      <Buttons />
    </div>
  );
}

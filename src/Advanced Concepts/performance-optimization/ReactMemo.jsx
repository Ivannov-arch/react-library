// React.memo()
// Membungkus komponen untuk mencegah rerender jika props tidak berubah.

// React.memo() adalah fungsi di React yang digunakan untuk mengoptimalkan
//  performa dengan mencegah komponen di-render ulang secara tidak perlu. Komponen
//  yang dibungkus dengan React.memo() hanya akan di-render ulang jika props-nya berubah.

// Kapan Menggunakan React.memo()?
// Kamu menggunakan React.memo() ketika:

// Komponenmu tidak perlu di-render ulang setiap saat.
// Kamu ingin menghindari render ulang yang tidak perlu agar aplikasi lebih cepat.
// Props dari komponen jarang berubah.
// Penjelasan Sederhana
// Bayangkan kamu membuat aplikasi penghitung dengan dua komponen:

// Counter untuk menampilkan angka yang bisa bertambah.
// Header untuk menampilkan judul.
// Setiap kali kamu menambah angka, komponen Header juga ikut di-render ulang meskipun props-nya tidak berubah.

import React, { useState } from "react";
import Buttons from "../../Components/Button";
export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 Optimasi Komponen dengan React.memo()</h1>

      <p>
        <strong>Apa Itu React.memo()?</strong>
        <br />
        <code>React.memo()</code> adalah fungsi di React untuk **mencegah
        komponen functional dirender ulang** secara tidak perlu. Komponen hanya
        akan dirender ulang jika props-nya berubah.
      </p>

      <h2>🎯 Kapan Menggunakan React.memo()?</h2>
      <ul className="list-disc list-inside">
        <li>Komponenmu tidak tergantung pada state global.</li>
        <li>Props jarang berubah.</li>
        <li>Kamu ingin menghindari render ulang yang tidak perlu.</li>
        <li>Komponen cukup berat (banyak perhitungan/rendering).</li>
      </ul>

      <h2>📦 Contoh Sederhana</h2>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>
          {`export default function ReactMemo() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Header />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>

    </>
  );
}`}
        </code>
      </pre>
      <p>Bayangkan kamu punya 2 komponen:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Counter</strong> → Menampilkan angka yang bisa bertambah.
        </li>
        <li>
          <strong>Header</strong> → Menampilkan judul statis.
        </li>
      </ul>
      <p>
        Saat kamu menekan tombol tambah, seluruh komponen akan dirender ulang —{" "}
        <strong>termasuk Header</strong> meskipun props-nya tidak berubah!
      </p>

      <h2>✅ Solusi: Gunakan React.memo()</h2>
      <p>
        Dengan <code>React.memo()</code>
        {`, React akan "mengingat" hasil render terakhir dan hanya merender ulang jika props berubah.`}
      </p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const Header = React.memo(() => {
  console.log("Header di-render ulang!");
  return <h2>Aplikasi Penghitung</h2>;
});`}</code>
      </pre>

      <p>
        Sekarang, <strong>Header tidak akan dirender ulang</strong> saat kamu
        menekan tombol tambah, karena props-nya tidak berubah!
      </p>

      <div className="space-y-4 bg-gray-700 p-5 border rounded">
        <Header />
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
      </div>

      <h2>📉 Tanpa React.memo()</h2>
      <p>
        Tanpa <code>React.memo()</code>, setiap render pada parent (seperti
        `App` atau `Page`) akan membuat <code>Header</code> dirender ulang,
        walaupun tidak ada perubahan.
      </p>

      <h2>📌 Catatan Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>
            React.memo() hanya bekerja untuk komponen fungsi (functional
            component).
          </strong>
        </li>
        <li>
          Ini hanya mencegah render ulang jika{" "}
          <strong>props tidak berubah</strong>. Jika state internal berubah,
          tetap akan render ulang.
        </li>
        <li>
          Untuk props kompleks (object, array, function), React membandingkan{" "}
          <strong>berdasarkan referensi</strong>, bukan isi.
        </li>
      </ul>

      <h2>🔍 Props Kompleks & Custom Comparison Function</h2>
      <p>
        Jika kamu meneruskan props berupa <code>array</code>,{" "}
        <code>object</code>, atau <code>function</code>, maka props tersebut
        dianggap <strong>selalu berubah</strong> walau isinya sama, karena
        referensinya berbeda tiap render.
      </p>

      <p>Solusi: Gunakan custom comparison function.</p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const List = React.memo(({ items }) => {
  return items.map((item) => <div key={item}>{item}</div>);
}, (prevProps, nextProps) => {
  return JSON.stringify(prevProps.items) === JSON.stringify(nextProps.items);
});`}</code>
      </pre>

      <p>
        Di sini, kita membandingkan isi array <code>items</code> agar{" "}
        <strong>render hanya terjadi saat benar-benar ada perubahan</strong>.
      </p>

      <h2>📌 Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>React.memo()</code> untuk meningkatkan performa
        komponen React yang tidak perlu selalu dirender ulang. Tapi hati-hati
        saat props-nya berupa objek/array/fungsi — pertimbangkan custom
        comparison function!
      </p>
      <Buttons />
    </div>
  );
}

// eslint-disable-next-line react/display-name
const Header = React.memo(() => {
  console.log("Header di-render ulang!");
  return <h2>Aplikasi Penghitung</h2>;
});

// versi tanpa react.memo
// function Header() {
//     console.log("Header di-render ulang!");
//     return <h2>Aplikasi Penghitung</h2>;
//   };

// Tanpa react.memo ()
// Header akan terus dirender ulang ketikaApp di-render ulang, meskipun props atau logika di dalamnya tidak berubah.
// Ini membuang-buang sumber daya.

// Dengan React.memo():
// React akan mengingat hasil render terakhir dari komponen Header dan hanya merender ulang jika ada perubahan pada props-nya.
// Karena Header tidak menerima props atau props-nya tidak berubah, komponen ini tidak di-render ulang.

// Catatan Penting:
// React.memo() tidak mencegah render ulang karena state di komponen itu sendiri berubah. Ini hanya berlaku untuk perubahan props.
// Untuk komponen dengan props kompleks, kamu bisa memberikan fungsi pembanding (custom comparison function) sebagai parameter kedua
// untuk memutuskan apakah props dianggap berubah atau tidak.

// Berikut adalah penjelasan lebih rinci dari catatan tersebut:
// 2. Props yang Kompleks Bisa Membutuhkan Custom Comparison Function
// Jika props yang diteruskan ke komponen berupa objek, array, atau fungsi, maka props tersebut dianggap selalu berubah (meskipun
// isinya sama). Hal ini karena di JavaScript, objek dan array dibandingkan berdasarkan referensi memori, bukan isinya.

// Masalahnya:
// Setiap kali tombol ditekan, komponen App di-render ulang, dan props items dianggap berbeda karena array ["A", "B", "C"]
//  adalah objek baru (meski isinya sama).
// Akibatnya, List ikut di-render ulang setiap saat.
// Solusi dengan Custom Comparison Function: Kamu bisa memberikan fungsi pembanding (comparison function) sebagai
// parameter kedua di React.memo() untuk menentukan apakah props benar-benar berubah.

// Penjelasan:
// Fungsi pembanding (prevProps, nextProps) mengecek apakah props items berubah.
// Jika props items tidak berubah (isinya sama), List tidak akan di-render ulang.
// Custom Comparison Function ini berguna untuk props berupa objek atau array.

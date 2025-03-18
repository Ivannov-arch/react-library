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
import { useNavigate } from "react-router-dom";
// import screenshot0 from '../../assets/react-memo0.png'
import screenshot from '../../assets/react-memo.png'
import screenshot2 from '../../assets/react-memo2.png'
// import screenshot3 from '../../assets/react-memo3.png'

export default function ReactMemo() {
const navigate = useNavigate()
  const [count, setCount] = useState(0);

  return (
    <div>

        <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
        </div>

      <Header />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>

      {/* <img src={screenshot0} alt="" /> */}
      <img src={screenshot} alt="" />
      <img src={screenshot2} alt="" />
      {/* <img src={screenshot3} alt="" /> */}
    </div>
  );
}

// Membungkus Header dengan React.memo untuk mencegah render ulang
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
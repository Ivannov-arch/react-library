// // useCallback()
// Mengingat fungsi agar tidak dibuat ulang pada setiap render.

// useCallback adalah hook dalam React yang digunakan untuk mengoptimalkan performa 
// sebuah aplikasi. Fungsi ini memungkinkan kamu untuk "menyimpan" atau "menghafal" 
// fungsi tertentu agar tidak dibuat ulang setiap kali komponen di-render ulang, 
// kecuali dependensinya berubah.

// Kapan Menggunakan useCallback?
// Kamu menggunakan useCallback ketika:

// Fungsi yang kamu buat akan dipakai sebagai props untuk komponen anak.
// Komponen anak tersebut memiliki mekanisme optimasi, seperti React.memo.
// Kamu ingin menghindari fungsi baru dibuat setiap kali komponen induk di-render ulang,
//  yang bisa menyebabkan re-render tidak perlu pada komponen anak.
// Contoh Kasus Sederhana
// Bayangkan kamu punya aplikasi dengan tombol "Tambah" dan "Kurangi". Ketika kamu klik 
// tombol itu, hanya angka yang harus berubah, bukan seluruh komponen.

import { useState, useCallback } from "react";
import CounterButton from "./CounterButton";
import screenshot from '../../assets/use-callback.png'
import screenshot1 from '../../assets/use-callback1.png'
import screenshot2 from '../../assets/use-callback-button.png'
import { useNavigate } from "react-router-dom";

export default function App() {
const navigate = useNavigate()

  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const decrement = useCallback(() => setCount((prevCount) => prevCount - 1), []);

  return (
    <div>

            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

      <h1>Count: {count}</h1>
      <CounterButton onClick={increment} label="Tambah" />
      <CounterButton onClick={decrement} label="Kurangi" />

      <img src={screenshot} alt="" />
      <img src={screenshot1} alt="" />
      <img src={screenshot2} alt="" />
    </div>
  );
}
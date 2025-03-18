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

import screenshot from '../../assets/use-memo.png'
import screenshot1 from '../../assets/use-memo1.png'
import { useNavigate } from 'react-router-dom'

import { useState, useMemo } from "react";

export default function UseMemo() {
const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([100, 200, 300]);
  const [count, setCount] = useState(0);

  const total = useMemo(() => {
    console.log("Menghitung total...");
    return items.reduce((sum, item) => sum + item, 0);
  }, [items]);

  return (
    <div>

            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

      <h1>Total Harga: {total}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah Count: {count}</button>

      <img src={screenshot} alt="" />
      <img src={screenshot1} alt="" />
    </div>
  );
}
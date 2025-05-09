import React, { useEffect, useRef } from "react";
React;
import Buttons from "../../../Components/Button";

function UseRef() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }

  return (
    <div className="*:my-1 *:border *:rounded text-center">
      <button className="mx-2" onClick={handleClick1}>
        Click me!
      </button>
      <input className="bg-white" ref={inputRef1} /> <br />
      <button className="mx-2" onClick={handleClick2}>
        Click me!
      </button>
      <input className="bg-white" ref={inputRef2} /> <br />
      <button className="mx-2" onClick={handleClick3}>
        Click me!
      </button>
      <input className="bg-white" ref={inputRef3} />
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🔍 useRef di React</h1>

      <p>
        <strong>Apa Itu useRef?</strong>
        <br />
        <code>useRef()</code> adalah hook di React yang digunakan untuk:
        <strong>
          {" "}
          menyimpan referensi ke elemen DOM atau nilai apapun{" "}
        </strong>{" "}
        tanpa menyebabkan re-render saat nilainya berubah.
      </p>

      <h2>🎯 Kapan Digunakan?</h2>
      <ul className="list-disc list-inside">
        <li>Mengakses atau memodifikasi elemen DOM secara langsung.</li>
        <li>
          Menyimpan nilai yang *persisten* antar render tanpa trigger render
          ulang.
        </li>
        <li>
          Contoh: fokus input otomatis, mengatur style, menyimpan ID timer, dll.
        </li>
      </ul>

      <h2>🧪 Contoh: Fokus & Highlight Input</h2>
      <pre className="bg-gray-700 p-4 border rounded-md overflow-auto text-gray-500 text-sm">
        <UseRef />
      </pre>
      <p>
        Dalam contoh ini, kita punya 3 tombol yang ketika diklik, akan
        memfokuskan input tertentu dan mewarnainya. Kita menggunakan{" "}
        <code>useRef()</code> untuk mengakses DOM input secara langsung.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  
  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }`}</code>
      </pre>

      <h2>📌 Penjelasan Kode</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>useRef(null)</code> → Membuat referensi awal ke elemen (masih
          null).
        </li>
        <li>
          <code>{`ref={inputRef1}`}</code> → Menghubungkan referensi ke elemen
          input.
        </li>
        <li>
          <code>inputRef1.current</code> → Mengakses elemen DOM-nya.
        </li>
        <li>
          Dengan <code>.focus()</code> dan <code>.style</code>, kita langsung
          mengubah DOM input.
        </li>
      </ul>

      <h2>🔄 useRef Tidak Memicu Re-render</h2>
      <p>
        Tidak seperti <code>useState</code>, perubahan pada{" "}
        <code>useRef.current</code> tidak membuat komponen dirender ulang. Cocok
        untuk nilai-nilai yang tidak butuh tampilan real-time.
      </p>

      <h2>🧠 Bonus: Perbedaan useRef vs useState</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>useState</strong>: render ulang setiap kali nilainya berubah.
        </li>
        <li>
          <strong>useRef</strong>: nilainya berubah tapi tidak memicu render
          ulang.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🔧 Gunakan <code>useRef</code> jika kamu ingin berinteraksi dengan DOM
        secara langsung atau menyimpan nilai antar render tanpa menyebabkan
        render ulang. Simpel tapi sangat powerful!
      </p>
      <Buttons />
    </div>
  );
}

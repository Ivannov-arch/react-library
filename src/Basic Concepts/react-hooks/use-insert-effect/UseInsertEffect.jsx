import { useInsertionEffect } from "react";
import Buttons from "../../../Components/Button";

export function UseInsertEffect() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .dynamic-class {
            color: white;
            background-color: blue;
            padding: 10px;
            border-radius: 10px;
        }`;
    document.head.appendChild(style);

    // cleanup: remove the <style> tag when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  });

  return (
    <>
      {/* <code>
        {/* <p>
          useInsertionEffect will be executed before components being rendered
          and styling the components */}
      {/* </p> */}
      {/* </code>{" "} */}
      {/* <hr /> <br /> */}
      <div className="dynamic-class">Styled with useInsertionEffect</div>
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>
        🧵 React <code>useInsertionEffect</code>
      </h1>

      <p>
        <strong>
          Apa Itu <code>useInsertionEffect</code>?
        </strong>
        <br />
        Ini adalah hook spesial di React yang dijalankan{" "}
        <strong>sebelum browser merender DOM</strong> ke layar. Sangat cocok
        untuk menyisipkan <strong>CSS dinamis</strong> langsung ke{" "}
        <code>&lt;head&gt;</code>.
      </p>

      <h2>🔍 Kapan Digunakan?</h2>
      <ul className="list-disc list-inside">
        <li>
          Saat kamu ingin menambahkan style secara langsung ke DOM (misalnya
          lewat <code>{`document.createElement('style')`}</code>).
        </li>
        <li>
          Cocok digunakan di <strong>library CSS-in-JS</strong> seperti Emotion
          atau styled-components untuk menyisipkan style sebelum elemen muncul
          di layar.
        </li>
        <li>
          Hook ini dipanggil lebih awal dari <code>useLayoutEffect</code> &{" "}
          <code>useEffect</code>.
        </li>
      </ul>

      <h2>📦 Contoh Penggunaan</h2>
      <UseInsertEffect />
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`import { useInsertionEffect } from 'react';
  
  export default function UseInsertEffect() {
    useInsertionEffect(() => {
      const style = document.createElement('style');
      style.innerHTML = \`
        .dynamic-class {
          color: white;
          background-color: blue;
          padding: 10px;
          border-radius: 10px;
        }
      \`;
      document.head.appendChild(style);
  
      // Cleanup saat komponen di-unmount
      return () => {
        document.head.removeChild(style);
      };
    });
  
    return (
      <div className="dynamic-class">
        Styled with useInsertionEffect
      </div>
    );
  }`}</code>
      </pre>

      <h2>
        ⚙️ Apa Bedanya dengan <code>useEffect</code>?
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>useInsertionEffect</strong> → dipanggil sebelum DOM dirender,
          sehingga style langsung berlaku tanpa flicker.
        </li>
        <li>
          <strong>useEffect</strong> → dipanggil setelah render, berisiko
          menimbulkan tampilan ‘kedip’ jika menyisipkan style.
        </li>
      </ul>

      <h2>📌 Tips Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Jangan gunakan untuk side-effect biasa seperti fetch data. Hanya untuk
          keperluan <strong>styling sinkron</strong>.
        </li>
        <li>
          Tidak berjalan di Server-Side Rendering (SSR), karena berkaitan
          langsung dengan DOM.
        </li>
        <li>
          Gunakan hanya jika benar-benar perlu. Mayoritas use-case bisa
          ditangani dengan <code>useEffect</code> atau{" "}
          <code>useLayoutEffect</code>.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>useInsertionEffect</code> ketika kamu perlu menyisipkan
        style langsung ke DOM <strong>sebelum komponen muncul</strong>, untuk
        menghindari flicker visual. Tapi jangan disalahgunakan untuk efek-efek
        umum.
      </p>
      <Buttons />
    </div>
  );
}

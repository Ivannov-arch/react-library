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
import Buttons from "../../Components/Button";

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);

  // ⚡ useCallback()
  // Mengingat fungsi agar tidak dibuat ulang pada setiap render.
  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <div className="space-y-6 text-left">
      <h1>
        🧠 Memahami <code>useCallback()</code> di React
      </h1>

      <p>
        <strong>Apa Itu useCallback?</strong>
        <br />
        <code>useCallback</code> adalah hook yang digunakan untuk{" "}
        <strong>menghindari pembuatan ulang fungsi</strong> setiap kali komponen
        dirender ulang. Ini berguna untuk{" "}
        <strong>mengoptimalkan performa</strong>, terutama ketika kamu mengoper
        fungsi ke komponen anak.
      </p>

      <h2>🎯 Kapan Sebaiknya Menggunakan useCallback?</h2>
      <ul className="list-disc list-inside">
        <li>
          Fungsi dikirim ke komponen anak sebagai props, dan kamu ingin{" "}
          <strong>mencegah re-render tidak perlu</strong>.
        </li>
        <li>
          Komponen anak menggunakan <code>React.memo</code> atau teknik
          memoization lainnya.
        </li>
        <li>
          Kamu ingin menjaga referensi fungsi tetap stabil selama render —
          berguna untuk optimasi atau dependency.
        </li>
      </ul>

      <h2>💡 Contoh Kasus Sederhana</h2>
      <p>
        Misalnya kamu punya tombol <strong>{`"Tambah"`}</strong> dan{" "}
        <strong>{`"Kurangi"`}</strong>. Fungsi penanganan klik bisa dibuat
        sekali saja menggunakan <code>useCallback</code>:
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const increment = useCallback(() => setCount(prev => prev + 1), []);
const decrement = useCallback(() => setCount(prev => prev - 1), []);`}</code>
      </pre>

      <p>
        Ini membuat fungsi <code>increment</code> dan <code>decrement</code>{" "}
        <strong>tidak dibuat ulang</strong> setiap kali komponen dirender ulang.
      </p>

      <h2>🔍 Kenapa Ini Penting?</h2>
      <p>
        Tanpa <code>useCallback</code>, fungsi baru akan tercipta setiap render.
        Ini bisa menyebabkan komponen anak <strong>mengalami re-render</strong>{" "}
        yang tidak perlu.
      </p>

      <h2>🧪 Tampilan Hasil</h2>
      <p>
        Komponen ini memiliki dua tombol yang memakai fungsi dari{" "}
        <code>useCallback</code>:
      </p>

      <h3 className="text-xl">Count: {count}</h3>
      <CounterButton onClick={increment} label="Tambah" />
      <CounterButton onClick={decrement} label="Kurangi" />

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>
          CounterButton.jsx (Component)
          <br /> <br />
          {`export default function CounterButton({ onClick, label }) {
  console.log(\`Rendering button: \${label}\`);
  return <button onClick={onClick}>{label}</button>;
}`}
        </code>
      </pre>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>
          Page.jsx <br /> <br />
          {`import { useState, useCallback } from "react";
import CounterButton from "./CounterButton";

export default function App() {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  // ⚡ useCallback()
  // Mengingat fungsi agar tidak dibuat ulang pada setiap render.
  const increment = useCallback(() => setCount((prevCount) => prevCount + 1), []);
  const decrement = useCallback(() => setCount((prevCount) => prevCount - 1), []);

  return (
    <div>

      <h1>Count: {count}</h1>
      <CounterButton onClick={increment} label="Tambah" />
      <CounterButton onClick={decrement} label="Kurangi" />
    </div>
  );
}`}
        </code>
      </pre>

      <h2>📌 Tips Tambahan</h2>
      <ul className="list-disc list-inside">
        <li>
          Jika fungsi tidak digunakan sebagai props ke komponen anak atau tidak
          tergantung pada re-render, <strong>tidak perlu gunakan</strong>{" "}
          <code>useCallback</code>.
        </li>
        <li>
          Hindari over-optimization — <code>useCallback</code> berguna, tapi
          jangan dipakai di semua fungsi secara membabi buta.
        </li>
        <li>
          Kombinasikan dengan <code>React.memo</code> untuk hasil maksimal.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🔁 Gunakan <code>useCallback</code> untuk{" "}
        <strong>menjaga referensi fungsi tetap stabil</strong>. Ini penting
        ketika kamu bekerja dengan komponen anak atau fungsi yang sering dipakai
        ulang. Dengan begitu, kamu bisa mencegah render tidak perlu dan menjaga
        performa aplikasi tetap optimal. 🚀
      </p>
      <Buttons />
    </div>
  );
}

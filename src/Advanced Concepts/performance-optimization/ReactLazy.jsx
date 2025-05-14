import Buttons from "../../Components/Button";
export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 React.lazy untuk Lazy Loading Komponen</h1>

      <p>
        <strong>
          Apa Itu <code>React.lazy</code>?
        </strong>
        <br />
        <code>React.lazy</code> adalah fitur bawaan React untuk melakukan{" "}
        <strong>lazy loading komponen</strong>. Artinya, komponen tersebut baru
        akan dimuat saat dibutuhkan, bukan saat halaman pertama kali dimuat.
      </p>

      <h2>⚡ Kenapa Lazy Loading?</h2>
      <ul className="list-disc list-inside">
        <li>Mengurangi ukuran awal bundle JavaScript.</li>
        <li>Mempercepat waktu load awal (first load).</li>
        <li>
          Membuat aplikasi lebih cepat dan responsif, terutama jika banyak
          komponen berat.
        </li>
      </ul>

      <h2>
        🛠️ Cara Pakai <code>React.lazy</code>
      </h2>
      <p>Kamu bisa import komponen secara dinamis seperti ini:</p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`// LazyComponent.jsx (komponen besar atau jarang dipakai)
export default function LazyComponent() {
  return <div>Halo! Saya dimuat secara malas 😴</div>;
}`}</code>
      </pre>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`// Page.jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export default function Page() {
  return (
    <div>
      <h1>Halaman Utama</h1>

      <Suspense fallback={<p>Loading komponen...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}`}</code>
      </pre>

      <h2>
        🧯 Penting: Wajib Bungkus dengan <code>&lt;Suspense&gt;</code>
      </h2>
      <p>
        Karena komponen dimuat secara async, kamu harus membungkusnya dengan
        <code> &lt;Suspense fallback=...&gt; </code> untuk menampilkan loading
        UI sementara.
      </p>

      <h2>📌 Kapan Harus Pakai?</h2>
      <ul className="list-disc list-inside">
        <li>
          Komponen besar yang tidak langsung dibutuhkan saat load pertama.
        </li>
        <li>Bagian aplikasi yang jarang diakses (misal: dashboard admin).</li>
        <li>Modal, chart, atau halaman tertentu yang butuh bundle besar.</li>
      </ul>

      <h2>⚠️ Catatan untuk Next.js</h2>
      <p>
        Jika kamu menggunakan <strong>Next.js</strong>, gunakan{" "}
        <code>next/dynamic</code> untuk lazy loading karena lebih cocok untuk
        SSR dan client-side rendering. Tapi <code>React.lazy</code> tetap cocok
        untuk project React biasa (CRA, Vite, dll).
      </p>

      <h2>Kesimpulan</h2>
      <p>
        💤 <strong>React.lazy</strong> sangat berguna untuk meningkatkan
        performa aplikasi dengan memuat komponen hanya saat dibutuhkan. Jangan
        lupa selalu gunakan
        <code> &lt;Suspense&gt; </code> untuk menghindari error saat loading. 💡
      </p>

      <Buttons />
    </div>
  );
}

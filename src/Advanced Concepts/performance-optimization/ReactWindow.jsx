import Buttons from "../../Components/Button";
import { FixedSizeList as List } from "react-window";
const names = Array.from({ length: 3000 }, (_, i) => `Nama ${i + 1}`);

export default function ReactWindow() {
  return (
    <div className="space-y-6 p-4 text-left">
      <h1>📦 Optimasi Daftar Panjang dengan react-window</h1>

      <p>
        <strong>Apa Itu react-window?</strong>
        <br />
        <code>react-window</code> adalah library React untuk menampilkan list
        berukuran besar secara <strong>efisien</strong>. Hanya item yang
        terlihat di layar (viewport) yang dirender. Sisanya tidak dimasukkan ke
        dalam DOM sampai dibutuhkan. Teknik ini disebut{" "}
        <strong>virtualisasi</strong>.
      </p>

      <h2>🚀 Kenapa Harus Digunakan?</h2>
      <ul className="list-disc list-inside">
        <li>Rendering ribuan item bisa membuat performa lambat.</li>
        <li>
          <code>react-window</code> memuat hanya bagian yang terlihat, jadi
          lebih cepat & ringan.
        </li>
        <li>
          Sangat cocok untuk data panjang (misalnya daftar user, transaksi,
          dll).
        </li>
      </ul>

      <h2>🔧 Contoh Implementasi</h2>
      <List
        height={400} // Tinggi area tampilan (viewport)
        itemCount={3000} // Total item
        itemSize={35} // Tinggi setiap item (px)
        width={300} // Lebar daftar
      >
        {({ index, style }) => <div style={style}>{names[index]}</div>}
      </List>
      <p>
        Kita membuat daftar berisi 3000 nama. Hanya sebagian kecil yang akan
        dirender di layar.
      </p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`<List
  height={400}         // Tinggi area tampilan (viewport)
  itemCount={3000}     // Total item
  itemSize={35}        // Tinggi setiap item (px)
  width={300}          // Lebar daftar
>
  {({ index, style }) => (
    <div style={style}>
      {names[index]}
    </div>
  )}
</List>`}</code>
      </pre>

      <h2>🧠 Cara Kerjanya</h2>
      <ul className="list-disc list-inside">
        <li>Viewport = area yang terlihat oleh user saat scroll.</li>
        <li>
          Item di luar viewport tidak dirender →{" "}
          <strong>menghemat memori & waktu render</strong>.
        </li>
        <li>
          Komponen <code>&lt;List&gt;</code> otomatis menghitung item mana saja
          yang perlu ditampilkan.
        </li>
      </ul>

      <h2>📌 Tips Tambahan</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan <code>react-window</code> untuk daftar besar (biasanya &gt;
          500 item).
        </li>
        <li>
          Jika ukuran item berbeda-beda, bisa pakai{" "}
          <code>VariableSizeList</code>.
        </li>
        <li>
          Bisa dipadukan dengan <code>react-virtualized-auto-sizer</code> untuk
          otomatisasi ukuran.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>react-window</code> saat bekerja dengan data list besar
        di React. Library ini memberikan <strong>performa tinggi</strong> dengan
        cara hanya merender elemen yang benar-benar terlihat oleh user, sehingga
        UI tetap mulus meski datanya banyak.
      </p>

      <Buttons />
    </div>
  );
}

// // react-window
// Memuat hanya elemen yang terlihat di viewport untuk menghemat sumber daya.

// react-window adalah library React yang digunakan untuk mengoptimalkan rendering
// daftar panjang (long lists) dengan cara "memvirtualisasi" daftar tersebut.
// Artinya, hanya item-item yang terlihat di layar (viewport) yang akan di-render,
// sementara item lainnya tetap berada di luar DOM hingga diperlukan.

// Ini membantu menghemat memori dan meningkatkan performa aplikasi, terutama ketika
// kamu bekerja dengan ribuan atau jutaan data.

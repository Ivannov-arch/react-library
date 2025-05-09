import { useId } from "react";
import Buttons from "../../../Components/Button";

export function UseId() {
  const id = useId();
  const id2 = useId();

  return (
    <div>
      <code>
        <p>useId will generate a unique IDs</p>
      </code>{" "}
      <hr /> <br />
      <div className="space-x-2">
        <label htmlFor={id}>Enter your name</label>
        <input className="border rounded" type="text" id={id} /> <br /> <br />
        <label htmlFor={id2}>Enter your name</label>
        <input className="border rounded" type="text" id={id} />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🆔 useId di React</h1>

      <p>
        <strong>Apa Itu useId?</strong>
        <br />
        <code>useId</code> adalah hook bawaan dari React yang menghasilkan{" "}
        <strong>ID unik dan stabil</strong> untuk digunakan dalam elemen form
        seperti label dan input. Cocok banget buat aksesibilitas dan saat kamu
        perlu menghubungkan elemen secara semantik!
      </p>

      <h2>🎯 Kenapa Perlu?</h2>
      <ul className="list-disc list-inside">
        <li>
          Membantu membuat elemen seperti <code>&lt;label&gt;</code> dan{" "}
          <code>&lt;input&gt;</code> saling terhubung melalui atribut{" "}
          <code>htmlFor</code> dan <code>id</code>.
        </li>
        <li>
          ID yang dihasilkan <strong>selalu unik</strong> meskipun ada banyak
          komponen yang memakai <code>useId</code>.
        </li>
        <li>
          Aman untuk <strong>server-side rendering (SSR)</strong> karena hasil
          ID-nya konsisten di client dan server.
        </li>
      </ul>

      <h2>🔍 Contoh Kode</h2>
      <div className="bg-gray-700 p-4 rounded-md overflow-auto">
        <UseId />
      </div>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`import { useId } from 'react'

export default function UseIdExample() {
  const id1 = useId()
  const id2 = useId()

  return (
    <div>
      <label htmlFor={id1}>Nama Pertama</label>
      <input id={id1} className="border rounded" type="text" />

      <br /><br />

      <label htmlFor={id2}>Nama Kedua</label>
      <input id={id2} className="border rounded" type="text" />
    </div>
  )
}`}</code>
      </pre>

      <h2>⚠️ Catatan Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Jangan pakai satu ID untuk beberapa elemen! Misal: <br />
          <code>{`htmlFor={id2}`}</code> tapi <code>{`id={id}`}</code> → ini{" "}
          <strong>salah</strong> dan bisa bikin label tidak bekerja.
        </li>
        <li>
          Jangan hardcode ID kalau komponen bisa di-render berkali-kali. Gunakan{" "}
          <code>useId</code> agar tetap unik otomatis.
        </li>
      </ul>

      <h2>💡 Kapan Gunakan?</h2>
      <ul className="list-disc list-inside">
        <li>Di form yang kompleks dengan banyak label-input.</li>
        <li>Saat bikin reusable component yang butuh ID unik per render.</li>
        <li>Untuk jaga aksesibilitas (a11y) dan valid HTML.</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useId</code> membantu kamu menghindari konflik ID dan menjaga
        keterhubungan antar elemen HTML. Ringan, praktis, dan ramah SSR —
        penting untuk komponen dinamis dan form yang rapi!
      </p>

      <Buttons />
    </div>
  );
}

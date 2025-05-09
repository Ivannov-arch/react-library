import { useTransition, useState } from "react";
import Buttons from "../../../Components/Button";

function UseTransition() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Membuat 10.000 item contoh
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      // Menyaring item berdasarkan input pengguna
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredItems(filtered);
    });
  };

  return (
    <>
      <input
        value={query}
        onChange={handleFilter}
        placeholder="Search items..."
        className="p-2 border rounded"
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>⚛️ useTransition di React</h1>

      <p>
        <strong>
          Apa Itu <code>useTransition</code>?
        </strong>
        <br />
        <code>useTransition</code> adalah hook bawaan React yang digunakan untuk
        <strong>menunda update state yang berat</strong> agar UI tetap
        responsif. Cocok untuk kasus seperti:{" "}
        <em>filter list panjang saat user mengetik</em>.
      </p>

      <h2>📍 Masalah Umum Tanpa useTransition</h2>
      <ul className="list-disc list-inside">
        <li>User ketik satu huruf → UI freeze karena filter data berat.</li>
        <li>State update langsung memicu render ulang → Lag terasa.</li>
        <li>Pengalaman pengguna jadi buruk, apalagi di device lambat.</li>
      </ul>

      <h2>🚀 Solusi: Pakai useTransition</h2>
      <p>
        Dengan <code>useTransition</code>, kita tandai proses berat sebagai{" "}
        <strong>transisi non-urgent</strong>. React akan:
      </p>
      <ul className="list-disc list-inside">
        <li>Update state ringan (seperti input) langsung dijalankan.</li>
        <li>
          Update berat (seperti filter ribuan item) ditunda sampai CPU longgar.
        </li>
        <li>UX tetap mulus, tanpa lag saat mengetik.</li>
      </ul>

      <h2>🧪 Contoh Kasus: Filter List Panjang</h2>
      <div className="bg-gray-700 p-5 border rounded max-w-fit h-96 overflow-y-auto">
        <UseTransition />
      </div>
      <p>Kita punya 10.000 item. User ketik kata kunci → hasil difilter.</p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import { useTransition, useState } from "react";
  
  export default function UseTransitionExample() {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition();
  
    const items = Array.from({ length: 10000 }, (_, i) => \`Item \${i + 1}\`);
  
    const handleFilter = (e) => {
      const value = e.target.value;
      setQuery(value);
  
      startTransition(() => {
        const filtered = items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filtered);
      });
    };
  
    return (
      <>
        <input
          value={query}
          onChange={handleFilter}
          placeholder="Search items..."
          className="p-2 border rounded"
        />
        {isPending && <p>Loading...</p>}
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }`}</code>
      </pre>

      <h2>📌 Catatan Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          <code>useTransition</code> digunakan untuk *menunda proses berat*,
          bukan menggantikan logika filter.
        </li>
        <li>
          <code>isPending</code> bisa dipakai untuk menampilkan indikator
          loading ringan.
        </li>
        <li>
          Ideal untuk aplikasi besar yang butuh UX cepat walau datanya banyak.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useTransition</code>
        {` bikin aplikasi React tetap responsif saat
        user berinteraksi dengan proses berat. Gunakan saat kamu merasa: "kok UI
        jadi lambat pas update state ya?".`}
      </p>
      <Buttons />
    </div>
  );
}

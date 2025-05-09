import { useDeferredValue, useState } from "react";
import Buttons from "../../../Components/Button";

export function UseDeferredvalue() {
  const [query, setQuery] = useState("");
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 mx-auto p-6 max-w-full text-gray-800">
      <div className="bg-gray-100 p-4 rounded">
        <p className="text-sm">
          <strong>useDeferredValue()</strong> menunda nilai hingga render
          berikutnya. Berguna untuk optimasi performa saat input cepat & data
          besar.
        </p>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        className="px-3 py-2 border border-gray-300 focus:border-blue-300 rounded focus:outline-none focus:ring w-full text-gray-400 placeholder-gray-400"
      />

      {query !== deferredQuery && (
        <p className="text-blue-500 text-sm animate-pulse">Loading...</p>
      )}

      <div className="bg-white shadow-inner p-3 border rounded h-[300px] overflow-y-auto">
        <ul className="space-y-1 text-sm list-disc list-inside">
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>
        🕗 Memahami <code>useDeferredValue</code> di React
      </h1>

      <p>
        <strong>
          Apa Itu <code>useDeferredValue</code>?
        </strong>
        <br />
        <code>useDeferredValue</code> adalah hook dari React yang digunakan
        untuk <strong>menunda pembaruan nilai tertentu</strong> agar tidak
        langsung dievaluasi saat render, tapi dilakukan setelah render selesai.
        Cocok untuk: <strong>optimasi performa</strong> saat memfilter data
        besar, seperti pencarian live.
      </p>

      <h2>🔍 Studi Kasus: Search 10.000 Item</h2>
      <p>
        Misalnya kamu punya 10.000 data dan pengguna mengetik di input search.
        Tanpa optimasi, setiap huruf yang diketik langsung memicu filter 10.000
        item = bisa lag.
      </p>
      <p>
        Dengan <code>useDeferredValue</code>
        {`, kamu bisa tunda pencarian sampai
        React sempat "bernafas", sehingga UI lebih responsif.`}
      </p>

      <h2>⚙️ Cara Kerja Sederhana</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan <code>useState</code> untuk menyimpan input dari user.
        </li>
        <li>
          Bungkus nilai input dengan <code>useDeferredValue</code>
          {` untuk
          mendapatkan versi "tertunda".`}
        </li>
        <li>Gunakan versi tertunda itu untuk filtering.</li>
        <li>
          Saat <code>query</code> !== <code>deferredQuery</code>
          {`, artinya masih
          menunggu pembaruan → bisa tampilkan "Loading...".`}
        </li>
      </ul>

      <h2>🧪 Contoh Kode: Search dengan Penundaan</h2>
      <UseDeferredvalue />
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import { useDeferredValue, useState } from "react";
  
  export default function UseDeferredValueExample() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);
  
    const items = Array.from({ length: 10000 }, (_, i) => \`Item \${i + 1}\`);
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  
    return (
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="px-2 py-1 border rounded"
        />
        {query !== deferredQuery && <p>Loading...</p>}
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }`}</code>
      </pre>

      <h2>🎯 Kesimpulan</h2>
      <p>
        <code>useDeferredValue</code> membantu menjaga performa UI saat kamu
        menangani input yang berubah cepat + data besar. Ini bukan debouncing,
        tapi <strong>penjadwalan render pintar dari React</strong>!
      </p>
      <Buttons />
    </div>
  );
}

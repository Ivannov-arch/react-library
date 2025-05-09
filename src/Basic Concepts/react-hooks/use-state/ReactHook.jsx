// React hook = Special function that allows functional components
//          to use React features without writing class components (React v16.8)
//          (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//          AND a setter function to update its value in the Virtual DOM
//          [name, setName]

// import MyComponent from "./UseState";
import Counter from "./Counter";

function AppRcHook() {
  return (
    <div className="space-y-3 bg-slate-50 my-6 p-4 border rounded-lg font-mono text-sm text-left leading-relaxed">
      <h2 className="font-bold text-indigo-600 text-base">
        🧠 Topik: Update Primitive State (Number) — Counter
      </h2>
      <Counter />

      <p>
        <strong>Konsep Dasar:</strong> useState() digunakan untuk menyimpan
        nilai angka (number), seperti count.
      </p>

      <ul className="list-disc list-inside">
        <li>
          <code>setCount(0)</code> → update nilai langsung
        </li>
        <li>
          <code>setCount(c =&gt; c + 1)</code> → update pakai{" "}
          <strong>updater function</strong>
        </li>
      </ul>

      <h3 className="font-semibold text-indigo-500">
        🔁 Apa itu Updater Function?
      </h3>
      <p>
        <code>setState(prev =&gt; newValue)</code>
        <br />
        Berguna agar update state tetap aman meski ada banyak pemanggilan
        setState secara berurutan / async.
      </p>

      <h3 className="font-semibold text-indigo-500">🛠️ Contoh:</h3>
      <pre className="bg-white p-3 rounded overflow-x-auto text-xs">
        {`setCount(c => c + 1); // Tambah
setCount(c => c - 1); // Kurang
setCount(0);          // Reset
setCount(Math.floor(Math.random() * 201) - 100); // Random antara -100 sampai 100`}
      </pre>

      <h3 className="font-semibold text-indigo-500">🚫 Tanpa updater:</h3>
      <pre className="bg-white p-3 rounded overflow-x-auto text-xs">
        {`setCount(count + 1);
setCount(count + 1);
setCount(count + 1); // ❌ hasilnya tetap +1`}
      </pre>

      <h3 className="font-semibold text-indigo-500">✅ Dengan updater:</h3>
      <pre className="bg-white p-3 rounded overflow-x-auto text-xs">
        {`setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1); // ✅ hasilnya +3`}
      </pre>

      <p className="text-gray-700 italic">
        ⚠️ Gunakan updater function jika state bergantung pada nilai sebelumnya.
      </p>
    </div>
  );
}

export default AppRcHook;

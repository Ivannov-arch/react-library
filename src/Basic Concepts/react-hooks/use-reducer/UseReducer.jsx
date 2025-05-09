import { useReducer } from "react";
import Buttons from "../../../Components/Button";

export function UseReducer() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + 1 };
      case "DECREASE":
        return { count: state.count - 1 };
      case "INPUT":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="space-x-4 space-y-4 p-5 *:border *:rounded text-center">
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
        <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
        <input
          className="bg-white text-gray-800 text-center"
          value={state.count}
          type="number"
          onChange={(e) =>
            dispatch({ type: "INPUT", payload: Number(e.target.value) })
          }
        />
      </div>
      <br /> <br />
      <hr />
      <code>
        <p>
          useReducer is a hook that allows you to manage state and perform
          actions in a component.
        </p>
      </code>
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 React useReducer Hook</h1>

      <p>
        <strong>Apa Itu useReducer?</strong>
        <br />
        <code>useReducer</code> adalah alternatif dari <code>useState</code>{" "}
        yang lebih cocok untuk logika state yang kompleks atau saling terkait.
        Cara kerjanya mirip Redux, tapi langsung di dalam komponen.
      </p>

      <h2>🛠 Struktur Dasar</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>State awal</strong> ditentukan dengan{" "}
          <code>initialState</code>.
        </li>
        <li>
          <strong>Reducer</strong> adalah fungsi yang menentukan perubahan state
          berdasarkan <code>action.type</code>.
        </li>
        <li>
          <strong>Dispatch</strong> digunakan untuk mengirim aksi yang akan
          diproses oleh reducer.
        </li>
      </ul>

      <h2>📦 Contoh Kode</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    case 'INPUT':
      return { count: action.payload };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);`}</code>
      </pre>

      <h2>🧪 Interaksi</h2>
      <div className="bg-gray-700 p-4 border rounded-md overflow-auto">
        <UseReducer />
      </div>

      <h2>🧩 Kapan Gunakan useReducer?</h2>
      <ul className="list-disc list-inside">
        <li>Ketika state punya banyak kondisi atau aturan perubahan.</li>
        <li>
          Ketika kamu ingin mengelola aksi secara terstruktur (mirip Redux).
        </li>
        <li>
          Saat butuh memisahkan logika perubahan state dari komponen utama.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useReducer</code> membuat pengelolaan state jadi lebih
        terstruktur, terutama untuk kasus kompleks. Cocok jika kamu mulai punya
        banyak tombol, kondisi, atau input yang mengubah state yang sama.
      </p>
      <Buttons />
    </div>
  );
}

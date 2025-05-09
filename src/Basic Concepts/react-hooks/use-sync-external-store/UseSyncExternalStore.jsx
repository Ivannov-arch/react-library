// import { useEffect, useState } from 'react'
import { useEffect, useSyncExternalStore } from "react";
import { fetchPokemons, getState, subscribe } from "./externalStore";
import Buttons from "../../../Components/Button";

export function UseSyncExternalStore() {
  //#region : local useEffect()
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //     const getPokemons = async () => {
  //         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  //         const data = await res.json();
  //         setPokemons(data.results);
  //     }

  //     getPokemons();
  // })

  //#endregion

  // const state = useSyncExternalStore(subscribeWithSelector, getSnapShot, getServerSnapshot);
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  useEffect(() => {
    fetchPokemons();
  });

  return (
    <div>
      <code>
        <p>{`useSyncExternalStore allows you to subscribe to an external store and get the latest snapshot of the store's state.`}</p>
      </code>{" "}
      <hr /> <br /> <br />
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.length === 0 ? (
          <p>Loading...</p>
        ) : (
          pokemons.map((pokemon, index) => (
            <li key={index}>
              {index}. {pokemon.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🔄 useSyncExternalStore di React</h1>

      <p>
        <strong>
          Apa Itu <code>useSyncExternalStore</code>?
        </strong>
        <br />
        Hook ini digunakan untuk{" "}
        <strong>berlangganan ke store eksternal</strong>, seperti global state
        yang tidak dikelola oleh React (contohnya Redux, atau buatan sendiri
        seperti di bawah). Ini berguna untuk menjaga sinkronisasi antara data
        eksternal dan komponen React.
      </p>

      <h2>📦 Contoh Store Eksternal Sederhana</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`let state = { pokemons: [] };
  let listeners = [];
  
  export const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    state = { ...state, pokemons: data.results };
    listeners.forEach((listener) => listener(state));
  };
  
  export const getState = () => state;
  
  export const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };`}</code>
      </pre>

      <h2>
        🧠 Bagaimana <code>useSyncExternalStore</code> Bekerja
      </h2>
      <p>Hook ini membutuhkan 2–3 parameter:</p>
      <ul className="list-disc list-inside">
        <li>
          <strong>subscribe</strong> → Fungsi untuk menambahkan listener.
        </li>
        <li>
          <strong>getSnapshot</strong> → Fungsi untuk mengambil state terkini.
        </li>
        <li>
          <strong>getServerSnapshot</strong> → (opsional, untuk SSR).
        </li>
      </ul>
      <p>
        Dalam contoh ini, kita ingin merender daftar Pokemon dari API dan
        menyimpannya di store eksternal.
      </p>

      <h2>⚙️ Kode React-nya</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import { useEffect, useSyncExternalStore } from 'react';
  import { fetchPokemons, getState, subscribe } from './externalStore';
  
  export default function UseSyncExternalStore() {
    const { pokemons } = useSyncExternalStore(subscribe, getState);
  
    useEffect(() => {
      fetchPokemons();
    }, []);
  
    return (
      <div>
        <h1>Pokemon List</h1>
        <ul>
          {pokemons.length === 0
            ? <p>Loading...</p>
            : pokemons.map((p, i) => <li key={i}>{i + 1}. {p.name}</li>)}
        </ul>
      </div>
    );
  }`}</code>
      </pre>

      <div className="bg-gray-700 p-4 rounded-md">
        <UseSyncExternalStore />
      </div>

      <h2>🚀 Kenapa Ini Penting?</h2>
      <ul className="list-disc list-inside">
        <li>
          Membuat state eksternal tetap <strong>sinkron dengan React</strong>.
        </li>
        <li>
          Aman untuk <strong>concurrent rendering</strong> (React 18 ke atas).
        </li>
        <li>
          Alternatif bersih dari solusi seperti polling manual di{" "}
          <code>useEffect</code>.
        </li>
      </ul>

      <h2>📌 Tips Tambahan</h2>
      <ul className="list-disc list-inside">
        <li>
          Jangan lupa beri <code>[]</code> di <code>useEffect</code> agar hanya
          fetch satu kali!
        </li>
        <li>
          Cocok untuk sistem global yang tidak pakai <code>useContext</code>,
          misalnya observer pattern atau state di luar React.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useSyncExternalStore</code> adalah cara standar untuk membaca
        data dari store luar React. Sangat bermanfaat jika kamu membuat library,
        state manager, atau mengelola shared state tanpa Context API.
      </p>
      <Buttons />
    </div>
  );
}

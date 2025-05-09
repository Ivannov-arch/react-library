// useEffect() = React Hook that tells React to DO THIS CODE WHEN (pick one):
//           This component re-renders
//           This component mounts
//           The state of a value

// useEffect(function, [dependencies])

//  1. useEffect(() => {})          // Runs after every re-render
//  1. useEffect(() => {}, [])      // Runs after every re-render
//  1. useEffect(() => {}, [value]) // Runs after every re-render

// USES
// 1. Event Listeners
// 2. DOM Manipulations
// 3. Subscriptions (real-time updates)
// 4. Fetching Data from an API
// 5. Clean Up when a component unmounts

import React, { useState, useEffect } from "react";
React;
import Buttons from "../../../Components/Button";

function MyEffect() {
  // ---------------------------------------------------------------------------
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
      // SOME CLEANUP CODE
    };
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function substractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "blue" ? "red" : "blue"));
  }

  // ------------------------------------------------------------------------

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // ------------------------------------------------------------------

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>

      <div className="space-x-3 mt-6">
        <p className="mt-6 mb-4 text-3xl" style={{ color: color }}>
          Count: {count}
        </p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button>
        <button onClick={changeColor}>Change Color</button>
      </div>
    </>
  );
}

("use client");

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 Mengenal useEffect di React</h1>

      <p>
        <strong>Apa Itu useEffect?</strong>
        <br />
        <code>useEffect()</code> adalah hook React yang memungkinkan kamu untuk
        menjalankan *side effect* di dalam komponen — seperti update DOM, event
        listener, fetch API, atau mengatur timer. Ini mirip dengan{" "}
        <code>componentDidMount</code>, <code>componentDidUpdate</code>, dan{" "}
        <code>componentWillUnmount</code> di class component.
      </p>

      <h2>🧪 Contoh Dasar: Manipulasi Judul Halaman</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`useEffect(() => {
  document.title = \`Count: \${count} \${color}\`;

  return () => {
    // Cleanup function (opsional)
  }
}, [count, color]);`}</code>
      </pre>
      <p>
        Efek ini dijalankan setiap kali <code>count</code> atau{" "}
        <code>color</code> berubah. <strong>Cleanup function</strong> (opsional)
        dipanggil sebelum efek dijalankan ulang atau sebelum komponen unmount.
      </p>

      <h2>📐 Contoh Lain: Resize Window Listener</h2>
      <p>
        Ketika kamu ingin memantau ukuran layar, kamu bisa menambahkan event
        listener saat komponen dimount, lalu membersihkannya saat unmount.
      </p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`useEffect(() => {
  window.addEventListener("resize", handleResize);
  console.log("EVENT LISTENER ADDED");

  return () => {
    window.removeEventListener("resize", handleResize);
    console.log("EVENT LISTENER REMOVED");
  }
}, []);`}</code>
      </pre>
      <p>
        Array kosong <code>[]</code> berarti efek ini hanya dijalankan sekali
        saat *component mount* dan dibersihkan saat *unmount*.
      </p>

      <h2>🔁 Dynamic Update: Mengikuti Lebar dan Tinggi</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`useEffect(() => {
  document.title = \`Size: \${width} x \${height}\`;
}, [width, height]);`}</code>
      </pre>
      <p>
        Efek ini akan update <code>document.title</code> setiap kali{" "}
        <code>width</code> atau <code>height</code> berubah.
      </p>

      <h2>⚙️ Contoh Implementasi Lengkap</h2>
      <div className="bg-slate-200 dark:bg-slate-700 p-4 border rounded-md text-center">
        <MyEffect />
      </div>
      <p>Berikut adalah komponen React yang menggunakan beberapa useEffect:</p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyEffect() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    document.title = \`Count: \${count} \${color}\`;
  }, [count, color]);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = \`Size: \${width} x \${height}\`;
  }, [width, height]);

  return (
    <>
      <div className="*:mx-4 my-6 *:my-3">
        <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
        <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
      </div>

      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>

      <div className="mt-6 border rounded">
        <p className="mt-6 mb-4 text-3xl" style={{ color: color }}>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>Add</button>
        <button onClick={() => setCount(c => c - 1)}>Substract</button>
        <button onClick={() => setColor(c => c === "blue" ? "red" : "blue")}>Change Color</button>
      </div>
    </>
  );
}

export default MyEffect;`}</code>
      </pre>

      <h2>📌 Tips Penggunaan useEffect</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan efek hanya untuk hal-hal yang tidak langsung berkaitan dengan
          rendering, seperti manipulasi DOM, fetch, timer, atau event listener.
        </li>
        <li>
          Jangan lupa <strong>cleanup</strong> pada efek yang menggunakan
          listener, interval, atau subscription.
        </li>
        <li>
          Gunakan <code>[]</code> jika hanya ingin efek berjalan sekali (saat
          mount).
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 <code>useEffect</code> adalah alat penting untuk mengelola efek
        samping di React function component. Dengan memahami timing dan
        dependency-nya, kamu bisa mengontrol perilaku komponen secara presisi.
      </p>
      <Buttons />
    </div>
  );
}

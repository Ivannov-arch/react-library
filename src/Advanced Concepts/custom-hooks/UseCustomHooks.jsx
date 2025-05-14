import Buttons from "../../Components/Button";

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🔧 Custom Hooks di React</h1>

      <p>
        <strong>Apa Itu Custom Hook?</strong>
        <br />
        Custom Hook adalah fungsi JavaScript biasa yang namanya diawali dengan
        “use” dan dapat memanggil hook React lain di dalamnya. Tujuannya:{" "}
        <strong>mengabstraksi logika yang dapat dipakai ulang</strong> antar
        komponen.
      </p>

      <h2>⚙️ Cara Membuat Custom Hook</h2>
      <ul className="list-disc list-inside">
        <li>
          Buat fungsi biasa yang namanya diawali “use”, misal{" "}
          <code>useCustom</code>.
        </li>
        <li>
          Gunakan hook React (seperti <code>useState</code>,{" "}
          <code>useEffect</code>) di dalamnya.
        </li>
        <li>Kembalikan nilai atau fungsi yang ingin dibagikan ke komponen.</li>
      </ul>

      <h2>
        🚀 Contoh Implementasi: <code>useCustom</code>
      </h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`import { useEffect, useState } from "react";

// Custom hook menerima defaultValue (opsional)
export default function useCustom(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // Set value dan log ke console sekali setelah mount
    setValue("Updated");
    console.log(\`value: \${value}\`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}`}</code>
      </pre>

      <h2>🔨 Menggunakan Parameter Default</h2>
      <p>
        Kamu bisa memberikan nilai awal lewat parameter:
        <code>{`useCustom("Hello")`}</code>. Jika tidak, defaultnya adalah
        string kosong.
      </p>

      <h2>📝 Demo Component</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`/* eslint-disable react/prop-types */
import useCustom from "./useCustom";
import Buttons from "../../Components/Button";

export default function Demo({ defaultValue }) {
  // Bisa juga: ({ defaultValue = "Hello" })
  const value = useCustom(defaultValue);

  return (
    <div className="space-y-4">
      <h2>
        value: <br />
        {value}
      </h2>
      <Buttons />
    </div>
  );
}`}</code>
      </pre>

      <h2>📌 Tips dan Best Practices</h2>
      <ul className="list-disc list-inside">
        <li>
          Pastikan nama hook selalu diawali “use” agar React bisa mendeteksi
          aturan hook.
        </li>
        <li>
          Jangan panggil hook di dalam kondisi atau loop—panggil selalu di level
          atas fungsi.
        </li>
        <li>
          Gunakan dependency array di <code>useEffect</code> untuk menghindari
          infinite loop.
        </li>
        <li>
          Kemas logika yang berulang (fetch data, form handling, event listener)
          ke dalam custom hook untuk menjaga komponen tetap bersih.
        </li>
      </ul>

      <h2>🎯 Kesimpulan</h2>
      <p>
        Custom Hook memudahkan kita mengekstrak dan membagikan logika antar
        komponen. Dengan mengikuti aturan hook React, kamu bisa membuat hook
        yang reusable, bersih, dan mudah diuji. Selamat mencoba!
      </p>
      <div className="space-y-4">
        <a
          target="_blank"
          href="https://youtu.be/I2Bgi0Qcdvc?si=48ndYPDTNeqZoMf8"
        >
          Learn More
        </a>
        <Buttons />
      </div>
    </div>
  );
}

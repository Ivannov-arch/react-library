import ClickEvent from "./ClickEvent";
import { useNavigate } from "react-router-dom";

export default function CeApp() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 text-left">
      <h1>🖱️ React Click Events</h1>
      <p>
        <strong>Click event</strong> memungkinkan kita merespons interaksi
        pengguna saat mereka mengklik elemen UI, seperti tombol. Di React, ini
        dilakukan dengan event handler seperti <code>onClick</code> atau{" "}
        <code>onDoubleClick</code>.
      </p>

      <h2>👆 Demo:</h2>
      <ClickEvent />

      <h2>🧠 Penjelasan Kode:</h2>
      <div className="space-y-2">
        <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
          <code>const countRef = useRef(0);</code>
        </pre>
        <p>
          Menggunakan <code>useRef</code> untuk menyimpan nilai klik tanpa
          memicu re-render setiap kali berubah.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
          <code>const [messages, setMessages] = useState([]);</code>
        </pre>
        <p>Menyimpan daftar pesan hasil klik agar bisa ditampilkan di layar.</p>
        <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
          <code>
            const handleClick = (name) =&gt; {"{"} <br />
            &nbsp;&nbsp;countRef.current++; <br />
            &nbsp;&nbsp;setMessages(...); <br />
            {"}"}
          </code>
        </pre>
        <p>
          Menangani klik biasa. Jika klik belum lebih dari 3 kali, tampilkan
          jumlah klik. Setelahnya, munculkan peringatan.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
          <code>
            const handleDoubleClick = (e) =&gt; {"{"} <br />
            &nbsp;&nbsp;e.target.textContent = {`"OUCH!";`} <br />
            &nbsp;&nbsp;setMessages(...); <br />
            {"}"}
          </code>
        </pre>
        <p>
          Menangani klik dua kali. Teks tombol diubah dan pesan ditambahkan ke
          log.
        </p>
        <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
          <code>
            {"<ul>"} {"{"}messages.map(...) {"}"}
          </code>
        </pre>
        <p>Menampilkan semua log klik ke layar secara real-time.</p>
      </div>

      <h2>📌 Tips:</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan <code>useRef</code> untuk menyimpan nilai klik tanpa
          re-render.
        </li>
        <li>
          <code>e.target</code> dapat digunakan untuk mengakses elemen yang
          diklik.
        </li>
        <li>
          <code>onClick</code> = klik biasa, <code>onDoubleClick</code> = klik
          dua kali.
        </li>
        <li>
          Gunakan <code>console.log()</code> untuk mencatat interaksi di konsol
          saat development.
        </li>
        <li>
          Bisa juga menampilkan log langsung ke UI menggunakan{" "}
          <code>useState</code> atau mencatat pesan ke dalam array.
        </li>
      </ul>

      <div className="*:mx-4 my-6 *:my-3 text-center">
        <button onClick={() => navigate("/")} className="text-indigo-600">
          Home
        </button>
        <button
          onClick={() => window.history.back()}
          className="text-indigo-600"
        >
          Back
        </button>
      </div>
    </div>
  );
}

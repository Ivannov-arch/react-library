import UserGreeting from "./UserGreeting";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 mx-auto px-4 max-w-3xl text-left">
      <h1 className="font-semibold text-3xl">
        🔁 Conditional Rendering di React
      </h1>

      <p className="text-lg">
        <strong>Apa itu Conditional Rendering?</strong>
        <br />
        Conditional Rendering adalah teknik dalam React untuk menampilkan elemen
        atau komponen secara dinamis berdasarkan kondisi tertentu (biasanya
        nilai boolean atau ekspresi).
      </p>

      <h2 className="font-semibold text-2xl">
        📦 Contoh pada Komponen <code>UserGreeting</code>
      </h2>

      <p className="text-lg">
        Komponen ini menerima prop <code>isLoggedIn</code> dan menampilkan
        output yang berbeda tergantung nilainya:
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`return (
  props.isLoggedIn 
    ? <h2 style={welcomeMsg}>Welcome {props.username}</h2>
    : <h2 style={loginPmt}>Please log in to continue</h2>
);`}</code>
      </pre>

      <p className="text-lg">
        Dalam blok kode di atas:
        <ul className="pl-6 text-lg list-disc list-inside">
          <li>
            Jika <code>props.isLoggedIn</code> bernilai <code>true</code>, maka
            ditampilkan pesan sambutan.
          </li>
          <li>
            Jika <code>false</code>, maka ditampilkan prompt untuk login.
          </li>
        </ul>
      </p>

      <h2 className="font-semibold text-2xl">
        🎨 Styling Berbeda Berdasarkan Kondisi
      </h2>
      <p className="text-lg">
        Untuk memperkuat tampilan, masing-masing pesan memiliki{" "}
        <code>style</code> berbeda:
        <ul className="pl-6 text-lg list-disc list-inside">
          <li>
            <strong>Welcome Message:</strong> latar hijau (menandakan sukses)
          </li>
          <li>
            <strong>Login Prompt:</strong> latar merah (menandakan perlu
            tindakan)
          </li>
        </ul>
      </p>

      <h2 className="font-semibold text-2xl">✅ Keuntungan Teknik Ini</h2>
      <ul className="pl-6 text-lg list-disc list-inside">
        <li>
          Kode jadi lebih bersih daripada pakai <code>if-else</code> di dalam{" "}
          <code>return</code>
        </li>
        <li>Memisahkan logika dan presentasi dengan rapi</li>
        <li>Mudah dibaca, terutama saat hanya dua kondisi</li>
      </ul>

      <h2 className="font-semibold text-2xl">🧪 Contoh Output</h2>
      <p className="text-lg">Beberapa pemanggilan dan hasilnya:</p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`<UserGreeting isLoggedIn={true} username="BroCode" />
→ Welcome BroCode

<UserGreeting isLoggedIn={false} />
→ Please log in to continue`}</code>
      </pre>

      <h2 className="font-semibold text-2xl">📌 Catatan Tambahan</h2>
      <p className="text-lg">
        Teknik ternary seperti ini ideal untuk kondisi sederhana.
        <br />
        Untuk kondisi kompleks atau bertingkat, gunakan <code>
          if-else
        </code>{" "}
        biasa atau ekstrak ke fungsi.
      </p>

      <div className="flex md:flex-row flex-col flex-wrap justify-center gap-2 p-5 border rounded max-w-[90vw] text-center">
        <UserGreeting isLoggedIn={true} username="BroCode" />
        <UserGreeting isLoggedIn={true} />
        <UserGreeting />
      </div>
      <div className="flex justify-center *:mx-4 my-6 *:my-3">
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

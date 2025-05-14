import Buttons from "../../Components/Button";
export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🛡️ Error Boundary di React</h1>

      <p>
        <strong>Apa Itu Error Boundary?</strong>
        <br />
        Error Boundary adalah{" "}
        <strong>komponen React kelas (class component)</strong> yang digunakan
        untuk menangkap error JavaScript dalam komponen anak (child) saat proses
        rendering, lifecycle method, atau constructor. Tujuannya:{" "}
        <strong>mencegah seluruh UI crash</strong> hanya karena satu bagian
        error.
      </p>

      <h2>⚙️ Kapan Dipakai?</h2>
      <ul className="list-disc list-inside">
        <li>
          Saat kamu ingin menampilkan fallback UI jika ada bagian aplikasi yang
          error.
        </li>
        <li>
          Sangat berguna di production untuk{" "}
          <strong>menangkap bug tak terduga</strong>.
        </li>
        <li>
          React 18 ke bawah hanya mendukung Error Boundary untuk class
          component, bukan hook.
        </li>
      </ul>

      <h2>🚨 Contoh Implementasi</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`/* ErrorBoundary.jsx */
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // update UI jika error
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info); // bisa kirim ke logging service
  }

  render() {
    if (this.state.hasError) {
      return <h1>❌ Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;`}</code>
      </pre>

      <h2>🧪 Contoh Pemakaian</h2>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`/* App.jsx atau Page.jsx */
import ErrorBoundary from './ErrorBoundary';
import Demo from './Demo'; // Komponen yang bisa saja error

export default function Page() {
  return (
    <ErrorBoundary>
      <Demo defaultValue="Test" />
    </ErrorBoundary>
  );
}`}</code>
      </pre>

      <h2>📌 Tips & Best Practice</h2>
      <ul className="list-disc list-inside">
        <li>
          Gunakan Error Boundary di <strong>sekitar bagian rawan error</strong>,
          misalnya komponen fetch data.
        </li>
        <li>
          Kamu bisa membuat <code>fallback UI</code> yang lebih menarik dari
          sekadar teks, misalnya animasi error.
        </li>
        <li>
          Tidak bisa menangkap error dari <strong>event handler</strong>,{" "}
          <code>async/await</code>, atau error di server-side (Next.js SSR).
        </li>
        <li>
          Untuk React 18+, bisa eksplor <code>React.lazy + Suspense</code> +{" "}
          <code>useErrorBoundary</code> (via 3rd party).
        </li>
      </ul>

      <h2>🎯 Kesimpulan</h2>
      <p>
        Error Boundary mencegah crash total pada UI saat error tak terduga
        muncul. Gunakan di sekitar komponen penting untuk memberikan pengalaman
        pengguna yang lebih aman & profesional. Ini adalah cara React untuk
        memisahkan logika <strong>recovery</strong> dari error.
      </p>

      <div className="space-y-4">
        <a
          target="_blank"
          href="https://reactjs.org/docs/error-boundaries.html"
        >
          Learn More from React Docs
        </a>
        <Buttons />
      </div>
    </div>
  );
}

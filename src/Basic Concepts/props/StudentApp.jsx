"use client";

import Student from "./Student";
import { useNavigate } from "react-router-dom";

export default function AppStudent() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 px-4 py-6 text-start">
      <h1>📦 Props di React</h1>

      <p>
        <strong>Apa Itu Props?</strong>
        <br />
        Props (singkatan dari “properties”) adalah cara untuk{" "}
        <strong>mengirim data dari komponen induk ke komponen anak</strong>.
        Ibaratnya seperti “parameter” pada fungsi.
      </p>

      <h2>🧩 Contoh Komponen dengan Props</h2>
      <p>
        Misalnya kita punya komponen <code>&lt;Student /&gt;</code> yang
        menerima
        <strong> name</strong>, <strong>age</strong>, dan{" "}
        <strong>isStudent</strong> sebagai props.
      </p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}`}</code>
      </pre>

      <h2>🧪 Penggunaan di Komponen Induk</h2>
      <p>
        Kita bisa menggunakannya seperti ini di komponen <code>AppStudent</code>
        :
      </p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`<Student name="Spongebob" age={30} isStudent={true} />`}</code>
      </pre>

      <h2>✅ Validasi Props dengan propTypes</h2>
      <p>
        Kita bisa mengecek tipe data yang dikirim menggunakan{" "}
        <code>prop-types</code>:
      </p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`import propTypes from 'prop-types';

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};`}</code>
      </pre>

      <h2>🛡️ Default Props (Fallback)</h2>
      <p>Kalau kita tidak mengirim props, React bisa pakai nilai default:</p>
      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-white text-sm">
        <code>{`Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};`}</code>
      </pre>

      <h2>🧠 Kesimpulan</h2>
      <p>
        🎯 Props adalah cara utama untuk menyusun data antar komponen di React.
        Cocok untuk membangun UI yang dinamis dan reusable.
      </p>

      <h2>🚀 Demo (Live di Bawah Ini)</h2>
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col justify-around gap-4 p-5 border rounded">
          <Student name="Spongebob" age={30} isStudent={true} />
          <Student name="Patrick" age={42} isStudent={false} />
          <Student name="Squidward" age={350} isStudent={false} />
          <Student name="Sandy" age={27} isStudent={true} />
          <Student />
        </div>
        <div className="*:mx-4 my-6 *:my-3 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-indigo-600 underline"
          >
            Home
          </button>
          <button
            onClick={() => window.history.back()}
            className="text-indigo-600 underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

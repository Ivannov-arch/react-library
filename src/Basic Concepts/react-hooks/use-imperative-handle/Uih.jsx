/* eslint-disable react/display-name */
import { useRef, useImperativeHandle, forwardRef } from "react";
import Buttons from "../../../Components/Button";

export function UseImperativeHandleExample() {
  const customInputRef = useRef();

  return (
    <div>
      <code>
        <p>
          Used to make parent component only allowed to do certain actions on
          the child component
        </p>
      </code>{" "}
      <hr /> <br />
      <div className="space-x-2">
        <CustomInput ref={customInputRef} />
        <button onClick={() => customInputRef.current.focusInput()}>
          Focus
        </button>
        <button onClick={() => customInputRef.current.clearInput()}>
          Clear
        </button>
      </div>
    </div>
  );
}

export const CustomInput = forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) inputRef.current.focus();
    },
    clearInput: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return (
    <input
      className="bg-slate-700 p-1 rounded-md placeholder:text-slate-450"
      ref={inputRef}
      type="text"
      placeholder="Type something"
    />
  );
});

export default function Page() {
  return (
    <div className="space-y-6 text-left">
      <h1>🧠 useImperativeHandle di React</h1>

      <p>
        <strong>Apa Itu useImperativeHandle?</strong>
        <br />
        Hook ini digunakan untuk mengatur <code>ref</code> agar hanya mengekspos
        fungsi tertentu dari komponen child ke komponen parent. Jadi, parent
        tidak bisa sembarangan mengakses seluruh DOM/fungsi internal child.
      </p>

      <h2>🔍 Kapan Digunakan?</h2>
      <ul className="list-disc list-inside">
        <li>
          Saat kamu ingin <strong>mengontrol akses parent</strong> ke child
          component, hanya untuk fungsi tertentu.
        </li>
        <li>
          Cocok untuk membuat <em>reusable component</em> seperti input, modal,
          atau player yang bisa dikendalikan dari luar (parent).
        </li>
      </ul>

      <h2>🛠 Contoh: Custom Input yang Bisa Di-Control</h2>
      <pre className="bg-slate-800 p-4 rounded-md overflow-auto">
        <UseImperativeHandleExample />
      </pre>
      <p>Kita akan membuat input yang bisa di-focus dan di-clear dari luar:</p>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`// Parent Component
export default function UseImperativeHandleExample() {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focusInput()}>Focus</button>
      <button onClick={() => customInputRef.current.clearInput()}>Clear</button>
    </div>
  );
}`}</code>
      </pre>

      <pre className="bg-gray-800 p-4 rounded-md overflow-auto text-sm">
        <code>{`// Child Component (CustomInput.jsx)
export const CustomInput = forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current?.focus(),
    clearInput: () => (inputRef.current.value = "")
  }));

  return <input ref={inputRef} type="text" placeholder="Type something" />;
});`}</code>
      </pre>

      <h2>💡 Analogi Sederhana</h2>
      <p>
        Bayangkan komponen child adalah <strong>mesin kopi otomatis</strong>.
        Dengan <code>useImperativeHandle</code>
        {`, kamu hanya kasih akses ke tombol "Start"
        dan "Clean" saja — tanpa membiarkan orang lain utak-atik mesin bagian dalam.`}
      </p>

      <h2>📌 Tips Penting</h2>
      <ul className="list-disc list-inside">
        <li>
          Hanya bisa digunakan pada komponen yang dibungkus{" "}
          <code>forwardRef()</code>.
        </li>
        <li>
          Gunakan untuk menjaga{" "}
          <strong>encapsulation dan kontrol terbatas</strong>.
        </li>
        <li>
          Jangan terlalu sering pakai — biasanya hanya untuk komponen interaktif
          kompleks.
        </li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>
        🎯 Gunakan <code>useImperativeHandle</code> untuk membuat interface yang
        rapi antara parent dan child. Cocok untuk komponen yang butuh kontrol
        terbatas dari luar.
      </p>
      <Buttons />
    </div>
  );
}

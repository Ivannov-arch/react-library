import { useRef, useState } from "react";

export default function ClickEvent() {
  // let count = 0 // Jika tidak menggunakan useRef
  // const handleClick = (name) => {
  //   if(count < 3) {
  //     count++;
  //     console.log(${name} you clicked me ${count} times)
  //   }
  //   else {
  //     console.log(${name} stop clicking me)
  //   }
  // }
  // const handleClick2 = (e) => {console.log(e)
  //   e.target.textContent = OUCH!
  // }

  const countRef = useRef(0); // Gunakan useRef agar nilai persist antar render
  const [messages, setMessages] = useState([]); // Untuk tampilkan log ke UI

  const handleClick = (name) => {
    let msg = "";
    if (countRef.current < 3) {
      countRef.current++;
      msg = `${name}, you clicked me ${countRef.current} times`;
      console.log(msg);
    } else {
      msg = `${name}, stop clicking me!`;
      console.log(msg);
    }
    setMessages((prev) => [...prev, msg]);
  };

  const handleDoubleClick = (e) => {
    const msg = "Double click detected. Changed button text to 'OUCH!'";
    console.log(e); // Menampilkan event object
    e.target.textContent = "OUCH!"; // Ganti teks button
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="space-y-4">
      <div className="space-x-8 text-left">
        <button
          onClick={() => handleClick("Bro")}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Click Me 😃
        </button>
        <button
          onDoubleClick={handleDoubleClick}
          className="bg-red-500 px-4 py-2 rounded text-white"
        >
          Double Click Me
        </button>
      </div>

      <div className="bg-gray-100 mt-4 p-4 border rounded text-sm">
        <h4 className="mb-2 font-bold dark:text-black">Event Log:</h4>
        <ul className="space-y-1 list-disc list-inside">
          {messages.map((msg, index) => (
            <li key={index} className="text-gray-800">
              {msg}
            </li>
          ))}
        </ul>
      </div>
      <button className="" onClick={() => setMessages([])}>
        Clear
      </button>
    </div>
  );
}

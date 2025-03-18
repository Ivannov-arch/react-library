/* eslint-disable react/prop-types */

export default function CounterButton({ onClick, label }) {
    console.log(`Rendering button: ${label}`);
    return <button onClick={onClick}>{label}</button>;
  }
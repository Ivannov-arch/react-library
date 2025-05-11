/* eslint-disable react/prop-types */
import useCustom from "./useCustom";
import Buttons from "../../Components/Button";

export default function Demo({ defaultValue }) {
  // export default function Demo({ defaultValue = "Hello" }) {
  const value = useCustom(defaultValue);
  return (
    <div>
      <h1>
        value: <br />
        {value}
      </h1>
      <Buttons />
    </div>
  );
}

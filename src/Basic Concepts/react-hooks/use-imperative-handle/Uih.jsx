/* eslint-disable react/display-name */
import { useRef, useImperativeHandle, forwardRef } from "react";

export default function UseImperativeHandleExample() {
  const customInputRef = useRef();

  return (
    <div>
      <code>
        <p>Used to make parent component only allowed to do certain actions on the child component</p>
      </code> <hr /> <br />
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focusInput()}>Focus</button>
      <button onClick={() => customInputRef.current.clearInput()}>Clear</button>
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

  return <input ref={inputRef} type="text" placeholder="Type something" />;
});

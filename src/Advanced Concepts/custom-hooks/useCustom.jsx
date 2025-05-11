import { useEffect, useState } from "react";

// Custom hooks are normal functions
export default function useCustom() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("Updated");
    console.log(`value, ${value}`);
  }, []);

  return value;
}

// with (defaultValue) as parameter

// function useCustom(defaultValue) {
//     const [value, setValue] = useState(defaultValue);

//     useEffect(() => {
//         setValue('Updated');
//         console.log(`value, ${value}`);
//     }, [])

//     return value;
// }

// export default useCustom;

// with (defaultValue) as value
// export default function useCustom(defaultValue) {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     setValue(defaultValue);
//     console.log(`value, ${value}`);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return value;
// }

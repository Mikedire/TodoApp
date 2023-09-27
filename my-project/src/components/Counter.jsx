import { useState } from "react";

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  //   const decrease = () => {
  //     setCount(count - 1);
  //   };
  //   const setToZero = () => {
  //     setCount(0);
  //   };

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-500 ">
      <button onClick={increase} className="bg-green-700">
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="bg-green-700"
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="bg-green-700"
      >
        Set to Zero
      </button>
      {count}
    </div>
  );
};

export default Counter1;

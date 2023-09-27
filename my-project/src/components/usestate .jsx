import { useState } from "react";

const UseState1 = () => {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="flex flex-col h-36 justify-evenly bg-amber-400">
      {" "}
      {age}
      <button onClick={increaseAge} className="bg-green-700">
        increase Age
      </button>
    </div>
  );
};

export default UseState1;

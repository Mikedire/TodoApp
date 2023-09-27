import { useState } from "react";

const Input1 = () => {
  const [InputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5  ">
      <input type="text" onChange={handleInputChange} />
      {InputValue}
    </div>
  );
};

export default Input1;

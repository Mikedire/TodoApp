import { useState } from "react";

const ShowText = () => {
  const [showText, setText] = useState("");

  return (
    <div className="bg-grey-300">
      <button
        onClick={() => {
          setText(!true);
        }}
        className="bg-green-700"
      >
        show/hide
      </button>
      {showText && <h1>My name is Mikee</h1>}
    </div>
  );
};

export default ShowText;

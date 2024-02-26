import React, { useState } from "react";
function Footer() {
  const [Count, setCount] = useState(0);
  let a = 8;
  a = 2;

  return (
    <div>
      <p>welcome</p>
      <p>{a}</p>

      <button
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        click here in +1
      </button>

      <button
        onClick={() => {
          setCount(Count - 1);
        }}
      >
        click here in -1
      </button>
    </div>
  );
  console.log(a);
}

export default Footer;

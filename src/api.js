import React, { useState } from "react";
function Api() {
  const [fact, setfact] = useState("");
  const fetchFacts = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.fact);
        setfact(data.fact);
      })
      .catch((err) => {
        alert("something went wrong");
        console.log(err);
      });
  };

  return (
    <div>
      <h1>{fact}</h1>
      <button onClick={fetchFacts}>
        <span>show more</span>
      </button>
    </div>
  );
}

export default Api;

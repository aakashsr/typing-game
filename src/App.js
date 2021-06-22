import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(10);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCount = (e) => {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    console.log(filteredWords.length);
  };

  function tick() {
    setTimer((prevCount) => (prevCount !== 0 ? prevCount - 1 : 0));
  }

  useEffect(() => {
    const interval = setTimeout(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  console.log(text);
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>Time remaining: {timer}</p>
      <button onClick={handleCount}>START</button>
      <h1>WORD COUNT {}</h1>
    </div>
  );
}

export default App;

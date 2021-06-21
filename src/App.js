import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(20);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCount = (e) => {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  };

  function tick() {
    console.log('ticking');
    setTimer((prevCount) => {
      if (prevCount !== 0) {
        return prevCount - 1;
      } else {
        return 0;
      }
    });
  }

  useEffect(() => {
    const interval = setTimeout(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(text);
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>Time remaining: {timer}</p>
      <button onClick={handleCount}>START</button>
    </div>
  );
}

export default App;

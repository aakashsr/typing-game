import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(3);
  const [running, setrunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const reStart = () => {
    setrunning(true);
    setTimer(5);
    setWordCount(0);
    setText("");
  };

  const endGame = () => {
    setrunning(false);
    handleCount();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCount = (e) => {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter((word) => word !== "");
    setWordCount(filteredWords.length);
  };

  function tick() {
    setTimer((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    if (running && timer > 0) {
      setTimeout(tick, 1000);
    } else if (timer === 0) {
      endGame();
    }
  }, [timer, running]);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea disabled={!running} value={text} onChange={handleChange}></textarea>
      <p>Time remaining: {timer}</p>
      <button
        disabled={running}
        onClick={() => {
          setrunning(true);
          console.log(setrunning);
          reStart();
        }}
      >
        START
      </button>
      <h1>WORD COUNT {wordCount === 0 ? "??" : wordCount}</h1>
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);
  const [running, setrunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef();

  const reStart = () => {
    setrunning(true);
    setTimer(5);
    setWordCount(0);
    setText("");
    textareaRef.current.disabled = false; // as wet running setState is asynchronous task , before "running" becomes "true" , last two lines of "restat" function will get executed.
    textareaRef.current.focus();
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
      <textarea
        ref={textareaRef}
        disabled={!running}
        value={text}
        onChange={handleChange}
      ></textarea>
      <p>Time remaining: {timer}</p>
      <button
        disabled={running}
        onClick={() => {
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

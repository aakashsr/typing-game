import React , {useState,useEffect} from 'react'
import './App.css';

function App() {

  const [text,setText] = useState("");
  const [count,setCount] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleCount = (e) => {
    const wordsArr = text.trim().split(' ');
    const filteredWords = wordsArr.filter((word) => word !== '')
    console.log(filteredWords,filteredWords.length);
  }

  console.log(text);
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>Time remaining: 10</p>
      <button onClick={handleCount}>START</button>
    </div>
  );
}

export default App;

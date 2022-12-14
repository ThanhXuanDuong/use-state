import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] =useState<number>(0);
  const [name, setName] =useState<string>("");

  const increaseCount = ()=> setCount(count+1);
  const decreaseCount = ()=> setCount(count-1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={increaseCount}>Click to increase</button>
        <br/>
        <button onClick={decreaseCount}>Click to decrease</button>
        <br/>
        <h1>{name}</h1>
        <input onChange={e => setName(e.target.value)}/>

      </header>
    </div>
  );
}

export default App;

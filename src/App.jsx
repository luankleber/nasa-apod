import React, {useState} from 'react'
import './App.css';

function App(props) {
  const [day, setDay] = useState('');

  function getData(){
    console.log(day)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="date" value={day} onChange={ e => setDay(e.target.value)} />
      <button onClick={getData}>Search</button>
    </div>
  );
}

export default App;

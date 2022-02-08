import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';

function App(props) {
  const [day, setDay] = useState('');
  const API_KEY = 'gTQkh4Eb5xhETYztgcht3wmketiaeIH0Z6GUHUut'

  function getData(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${day}&concept_tags=True`).then(
      response => {
        const apod = response.data;
        console.log(apod)
      })
      console.log(day)
  }

  useEffect(() =>{
    getData()
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input type="date" value={day} onChange={ e => setDay(e.target.value)} />
      <button onClick={getData}>Search</button>
    </div>
  );
}

export default App;

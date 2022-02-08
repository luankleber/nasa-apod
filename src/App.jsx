import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';

function App(props) {
  const [day, setDay] = useState('');
  const [data, setData] = useState([]);
  const API_KEY = 'gTQkh4Eb5xhETYztgcht3wmketiaeIH0Z6GUHUut'
  
  function getData(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${day}&concept_tags=True`).then(
      (response) => {
        setData(response.data)
        console.log(response.data)
      }) 
      console.log(day)
  }

  useEffect(() =>{
    getData()
  }, [])

  return (
    <div className="App">
      <h1>NASA | Astronomy Photo of the Day</h1>
      <input type="date" value={day} onChange={ e => setDay(e.target.value)} />
      <button onClick={getData}>Search</button>
      <div>
        <h1><strong>{data.title}</strong></h1>
        <p><strong>About: </strong>{data.explanation}</p>
        <img src={data.url} />
      </div>
    </div>
  );
}

export default App;

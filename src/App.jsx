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
    <div className='container'>
      <div className="glassmorphism-light-1">
        <h1 className='H1'>NASA | Astronomy Photo of the Day</h1>
        <input className='input' type="date" value={day} onChange={ e => setDay(e.target.value)} />
        <button onClick={getData}>Search</button>
        <div>
          <img className='image' src={data.url} />
          <h2 className='H2'><strong>{data.title}</strong></h2>
          <p className='p'>{data.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

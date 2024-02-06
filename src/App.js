import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${ name }`).then(res => {
      setAge(res.data.age)
    })
  }





  return (
    <>
      <input type="text" onChange={(e) => {
        setName(e.target.value)
      }} />
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age::{age}</h1>
    </>
  )
}

export default App;

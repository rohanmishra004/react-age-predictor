import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';




function App() {
  const [fact, setFact] = useState("")
  const [isloading, setisLoading] = useState(true)

  const fetchData = () => {
    axios.get("https://catfact.ninja/fact?max_length=140")
      .then(res => {
        setFact(res.data.fact)
        setisLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      {isloading && <p>Loading Page...</p>}
      <button onClick={fetchData}>Generate Random catfacts</button>
      {fact && <p> {fact}</p>}
    </>

  );
}

export default App;


import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios"
import Character from "./components/Character"


function App() {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




  const [data, setGetData] = useState([])
  const [addCount, setAddCount] = useState(1)
  const [subtractCount, setSubtractCount] = useState(addCount)



  function addCounter() {
    setAddCount(addCount + 1)
  }

  useEffect(() => {

    axios.get(`https://rickandmortyapi.com/api/character/?page=1`)

      .then(res => {

        setGetData(res.data.results)
        console.log(res.data)


      })
      .catch(err => {
        console.log("not fetching any info")

      })

  }, [])


  const newArr = Object.values(data)

  console.log(newArr)


  return (
    <div className="App">
      <h1 className="Header">Character Cards</h1>

      <Character character={data} />


    </div>
  )
}

export default App;


import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [pokemon,setPokemon]=useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response)=>{
      setPokemon(response.data.results)
      console.log(response.data.results)
      
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className="App">
    <h1>Axios Pokemon API Assignment</h1>
      <ul>
        { pokemon.map((pok, index) => (
          <li key={index}> {pok.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

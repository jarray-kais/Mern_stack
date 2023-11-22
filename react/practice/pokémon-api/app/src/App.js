import React ,{useEffect,useState }from 'react'
import './App.css';


function App() {
const [namepok, setNamepok] = useState([])
useEffect(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807").then((namePok)=>{
    console.log(namePok)
    return namePok.json()
  }).then(namePok=>{
    console.log(namePok)
    setNamepok(namePok.data.results)
    console.log(namePok)
  })
  .catch((err)=>{
    console.log(err)
  })

})


  return (
    <div className="App">
    <h1>
      fetch pokémon API assignment
    </h1>
    <ul>
    { namepok.map((pok,index)=>(
      <li key={index}>{pok.name}</li>
    ))}
      <li></li>
    </ul>
    </div>
  );
}

export default App;

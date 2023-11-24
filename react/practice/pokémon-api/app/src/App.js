import React ,{useEffect,useState }from 'react'
import './App.css';


function App() {
const [namepok, setNamepok] = useState([])
useEffect(()=>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807").then((namePok)=>{
    // not the actual JSON response body but the entire HTTP response
    return namePok.json()
  }).then(namePok=>{
    setNamepok(namePok.results)
     // we now run another promise to parse the HTTP response into usable JSON
    console.log(namePok.results)
  })
  .catch((err)=>{
    console.log(err)
  })

},[]) // This empty array forces useEffect to render ONLY when the component first renders:dependecies array


  return (
    <div className="App">
    <h1>
      fetch pokémon API assignment
    </h1>
    <ul>
    {
      namepok.map((pok,index)=>(
      <li key={index}>{pok.name}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;

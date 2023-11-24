import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/color';
import Hero from './components/Hero';
import Error from './components/Error';


function App() {
  return (
    <div >
     <fieldset className="App">
      <legend>Routing</legend>

      <Link to="/home" ></Link>
      <Link to="/number" ></Link>
      <Link to="/Color"></Link>

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:id' element={<Number />}/>
        <Route path='/:word/:col1/:col2' element={<Color/>}></Route>
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/Error" element={<Error />} />

      </Routes>

      </fieldset>

    

    </div>
  );
}

export default App;

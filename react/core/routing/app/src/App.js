import { Link, Route, Routes,BrowserRouter } from 'react-router-dom';


import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/color';

function App() {
  return (
    <div className="App">
     <fieldset className="App">
      <legend>Routing</legend>

      <Link to="/home" ></Link>
      <Link to="/number" ></Link>
      <Link to="/Color"></Link>

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:id' element={<Number />}/>
        <Route path='/:word/:col1/:col2' element={<Color/>}></Route>

      </Routes>

      </fieldset>

    

    </div>
  );
}

export default App;

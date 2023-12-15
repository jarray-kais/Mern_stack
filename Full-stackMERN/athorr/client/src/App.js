
import './App.css';
import Dashboard from './components/Dashboard';
import Createnew from './components/Createnew';
import Updateathor from './components/Updateathor';
import {  Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/authors' element={<Dashboard />}/>
      <Route path='/authors/new' element={<Createnew />}/>
      <Route path='/authors/:id/edit' element={<Updateathor />}/>
    </Routes>
    </div>
  );
}

export default App;

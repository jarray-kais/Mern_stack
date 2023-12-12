import './App.css';
import CreateProduct from './components/CreateProduct';
import {  Route, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard'
import ShowOne from './components/ShowOne'
import Update from './components/update'

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/product/create' element={<CreateProduct/>}/>
      <Route path='/product/:id' element={<ShowOne />}/>
      <Route path='/product/update/:id' element={<Update />}/>
      
     </Routes>
    </div>
  );
}

export default App;

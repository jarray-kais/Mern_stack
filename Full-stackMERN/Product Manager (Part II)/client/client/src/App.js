import './App.css';
import CreateProduct from './components/CreateProduct';
import { Link, Route, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard'
import ShowOne from './components/ShowOne'

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/product/create' element={<CreateProduct/>}/>
      <Route path='/product/:id' element={<ShowOne />}/>
     </Routes>
    </div>
  );
}

export default App;

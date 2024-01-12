import {Routes,Route} from 'react-router-dom'
import Signup from './signup';
import Login from './Login';
import Home from './Home'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />




    </Routes>
    </div>
  );
}

export default App;

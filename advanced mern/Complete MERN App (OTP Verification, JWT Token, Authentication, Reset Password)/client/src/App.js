import React from 'react'
import {Routes,Route} from 'react-router-dom'

/* import all components*/
import Username from './components/Username'
import Reset from './components/Reset'
import Register from './components/Register'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Pasword from './components/Pasword'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <div>
    <Routes >
        <Route path='/' element={<Username/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/recovery' element={<Recovery/>}/>
        <Route path='/password' element={<Pasword/>}/>
        <Route path='*' element={<PageNotFound/>}/>

    </Routes>

    </div>
  )
}

export default App
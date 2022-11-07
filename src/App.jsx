import React from 'react'
import Homecrud from './CRUD/Homecrud'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Createuser from './CRUD/Createuser'
import Users from './CRUD/Users'
import EditUsers from './CRUD/EditUsers'
import Theme from './CRUD/Theme'
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Homecrud/>
      <Routes>
        <Route path='/createuser' element={<Createuser/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/theme' element={<Theme/>}/>
        <Route path='/edit/:index' element={<EditUsers/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
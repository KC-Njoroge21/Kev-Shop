import React from 'react'
import Login from './pages/Login'
import Header from './components/Header'
import {Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <SignUp />
     {/* <Header />
     <Routes>
      <Route path='/' element={<Login />}/>
     </Routes> */}
    </div>
  )
}

export default App
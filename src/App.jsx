import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './navbar/navbar'
import AllRoutes from './Routes/allRouts'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
       
    </div>
  )
}

export default App

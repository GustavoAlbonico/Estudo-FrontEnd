import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App

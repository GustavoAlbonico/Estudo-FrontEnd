import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <SearchForm/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App

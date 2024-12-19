import './App.css'

import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'

function App() {

  return (
    <>
      <div className="app">
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App

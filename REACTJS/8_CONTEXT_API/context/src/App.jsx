import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <p>Context API</p>
        <Outlet/>
      </div>
    </>
  )
}

export default App

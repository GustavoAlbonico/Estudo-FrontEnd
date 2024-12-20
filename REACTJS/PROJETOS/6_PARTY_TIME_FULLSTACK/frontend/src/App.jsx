
import { Outlet } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'

import { ToastContainer } from "react-toastify";

//Styles
import './App.css';
import 'react-toastify/ReactToastify.css';
function App() {

  return (
    <>
      <div className="app">
        <ToastContainer/>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App

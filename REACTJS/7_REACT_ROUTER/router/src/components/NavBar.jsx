import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="contact">Contatos</Link>
    </div>
  )
}

export default NavBar

// 6 - carregamento de dados
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";


const Home = () => {
    const {data : items} = useFetch(url);

  return (
    <div>
        <h1>Home</h1>
        {/* 6 - carregando dados */}
        <ul className="products">
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home
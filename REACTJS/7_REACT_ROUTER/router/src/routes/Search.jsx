import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3000/products?" + searchParams;
    const {data : items} = useFetch(url);
  return (
    <div>
        <h1>Resultado da pesquisa</h1>
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

export default Search
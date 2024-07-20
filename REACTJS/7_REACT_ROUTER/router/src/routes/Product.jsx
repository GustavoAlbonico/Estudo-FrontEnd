import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const { id } =  useParams();

    const url = "http://localhost:3000/products/" + id;

    const {data:product} = useFetch(url);

    if(!product) return <p>Carregando...</p>;

    return (
        <div>
            <p>ID do produto: {id}</p>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
            {/* 8 - nested route */}
            <Link to={`/produtcts/${product.id}/info`}>Mais informações</Link>
        </div>
    )
};

export default Product
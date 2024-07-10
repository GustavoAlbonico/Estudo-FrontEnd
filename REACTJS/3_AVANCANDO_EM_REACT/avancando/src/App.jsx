import './App.css';

// 2 - imagem assets
import frieren1 from "./assets/frieren1.jpeg";

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista 
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

//8 - props
import ShowUserName from './components/ShowUserName';

// 9 - desentrurutando props
import CardDetails from './components/CardDetails';

//11 - renderizacao de listas
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children
import Container from './components/Container';

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';

function App() {

  // 14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando em react</h1>
      {/* 1 - imagem em public  */}
      <img src="/frieren2.jpeg" alt="frieren2" />
      {/* 2 - imagem assets */}
      <img src={frieren1} alt="frieren1" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de lista */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Gustavo" />
      {/* 9 - desentrurutando props */}
      <CardDetails brand="VW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componente */}
      <CardDetails brand="Fiat" km={25415} color="Azul" />
      <CardDetails brand="Audi" km={994419} color="Rosa" />
      {/* 11 -renderizacao de lista */}
      {cars.map((car) => {
        <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      })}
      {/* 12 - Fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      {/* 14 - funcao prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message}/>
    </>
  )
}

export default App

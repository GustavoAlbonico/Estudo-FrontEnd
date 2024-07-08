import './App.css';

// 2 - imagem assets
import frieren1 from "./assets/frieren1.jpeg";

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista 
import ListRender from './components/ListRender';

function App() {

  return (
    <>
    <h1>Avançando em react</h1>
    {/* 1 - imagem em public  */}
    <img src="/frieren2.jpeg" alt="frieren2" />
     {/* 2 - imagem assets */}
    <img src={frieren1} alt="frieren1" />
    {/* 3 - useState */}
    <Data/>
    {/* 4 - renderização de lista */}
    <ListRender/>
    </>
  )
}

export default App

import { useState } from 'react'

function Data() {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

  return <>
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
    </div>
    <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
    </div>
  </>
}

export default Data
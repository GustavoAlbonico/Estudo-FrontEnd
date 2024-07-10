import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name = "Gustavo";
  return <>
    {/* 7 - render condicional */}
    <h3>Isso sera exibido?</h3>
    {x && <p> Se x for true sim </p>}
    {/* 8 - else  */}
    {name === "João" ? <>
        <div>
            <p>Olá João!</p>
        </div>
    </> : <>
        <div>
            <p>Nome não encontrado!</p>
        </div>
    </>}
  </>
}

export default ConditionalRender
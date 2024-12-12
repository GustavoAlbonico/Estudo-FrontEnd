import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {
    //evita a ativação do useEffect(reenderização) dos componentes ao manipular 
    //o elemento e é acionado apenas quando o valor de fato é mudado
    const [number, setNumber] = useState(0);

    const premiumNumbers = useMemo(() => {
       return ["0", "100", "200"]; 
    },[]); 

    useEffect(() => {
        console.log("Premium numbers foi alterado");
    }, [premiumNumbers]);

    return (
        <div>
            <h2>useMemo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
        </div>
    )
}

export default HookUseMemo
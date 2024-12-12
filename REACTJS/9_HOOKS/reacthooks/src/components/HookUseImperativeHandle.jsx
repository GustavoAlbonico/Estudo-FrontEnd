import React, { useRef } from 'react'
import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {
    const componentRef = useRef();

    //utilizar algo que está no componente filho estando no componente pai (nessa caso foi uma função)

  return (
    <div>
        <h2>useImperativeHandle</h2>
        <SomeComponent ref={componentRef}/>
        <button onClick={() => componentRef.current.validate()} >Validate</button>
        <hr/>
    </div>
  )
}

export default HookUseImperativeHandle
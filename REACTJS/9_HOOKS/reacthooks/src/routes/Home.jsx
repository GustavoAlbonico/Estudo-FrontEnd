import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseEffect from "../components/HookUseEffect"
import HookUseReducer from "../components/HookUseReducer"
import HookUseState from "../components/HookUseState"
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
        <h1>Home</h1>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef/>
    </div>
  )
}

export default Home
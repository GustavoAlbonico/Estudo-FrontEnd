import './App.css'
//2- importando componente
import FirstComponent from './components/FirstComponent'

//5 - hierarquia de componente
import MyComponent from './components/MyComponent'

//4 - Template expression
import TemplateExpression from './components/TemplateExpression'

//6 - eventos
import Events from './components/Events'

function App() {
  // 3 - comentários
  return (
    <>
    {/* 3 - comentários JSX */}
      <h1>Fundamnetos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App

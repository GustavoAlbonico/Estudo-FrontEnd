import './App.css'
//2- importando componente
import FirstComponent from './components/FirstComponent'

//4 - Template expression
import TemplateExpression from './components/TemplateExpression'

function App() {
  // 3 - comentários
  return (
    <>
    {/* 3 - comentários JSX */}
      <h1>Fundamnetos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
    </>
  )
}

export default App

import { useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"

function App() {

  const [despesas, setDespesas] = useState([])

  function adicionarDespesas(novaDespesa){
    setDespesas([...despesas, novaDespesa])
  }

  return (
    <>
      <section>
        <FormNovaDespesa onAddDespesa={adicionarDespesas}/>
        <p>{console.log("Despesas: " ,despesas)}</p>
      </section>
    </>
  )
}

export default App

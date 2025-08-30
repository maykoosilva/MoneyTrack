import { useEffect, useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"

import "./App.css"

function App() {

  const [despesas, setDespesas] = useState([])

  //const [desp, setDesp] = useState([{data: "2025-08-30", valor: "R$4,00"}, {data: "2025-08-30", valor: "R$4,00"}])
  const [agrupado, setAgrupado] = useState([])

  function adicionarDespesas(novaDespesa){
    setDespesas([...despesas, novaDespesa])
  }

  return (
    <>
      <section>
        <FormNovaDespesa onAddDespesa={adicionarDespesas}/>
        <p>{console.log("Despesas: " ,despesas)}</p>
      </section>
      <section className="list-despesa">
        <ListaDespesas showList={despesas}/>
      </section>
    </>
  )
}

export default App

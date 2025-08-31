import { useEffect, useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"

import "./App.css"

function App() {

  const [despesas, setDespesas] = useState([])
  const [agrupadoData, setAgrupadoData] = useState([])

  function adicionarDespesas(novaDespesa){
    setDespesas([...despesas, novaDespesa])
  }

  useEffect(()=>{
    const agrupado = despesas.reduce((acc, valorAgrupado)=>{
      const mes = valorAgrupado.data.slice(0, 7)
      const valorDespesa = parseFloat(valorAgrupado.valorDespesas.replace("R$", "").replace(",", "."))
      
      if (!acc[mes]){
        acc[mes] = 0
      }

      acc[mes] += valorDespesa;
      return acc

    }, {})

    setAgrupadoData([agrupado])
  }, [despesas])

  return (
    <>
      <section>
        <FormNovaDespesa onAddDespesa={adicionarDespesas}/>
        {/*<p>{console.log("Agrupado", agrupadoData)}</p>*/}
        {/*<p>{console.log("Despesas: " ,despesas)}</p>*/}
      </section>
      <section className="list-despesa">
        <ListaDespesas showList={agrupadoData}/>
      </section>
    </>
  )
}

export default App

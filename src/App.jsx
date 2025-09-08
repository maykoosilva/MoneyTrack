import { useEffect, useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"
import ItemDespesa from "./components/item-despesa/ItemDespesa"

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

    const agrupadoArray = Object.entries(agrupado)

    //console.log(agrupadoArray)

    setAgrupadoData(agrupadoArray)
  }, [despesas])

  return (
    <>
      <section>
        <FormNovaDespesa onAddDespesa={adicionarDespesas}/>
        {/*<p>{console.log("Agrupado", agrupadoData)}</p>*/}
        {/*<p>{console.log("Despesas: " ,despesas)}</p>*/}
        {console.log(agrupadoData.length === 0)}
      </section>
      {<section className="list-despesa">
        <ListaDespesas showList={agrupadoData}/>
      </section>}

      <section>
        <ItemDespesa/>
      </section>
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"

import style from "./App.module.css"

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
    <div className={style['container']}>
    <header className={style['header']}>
      <h1>HEADER</h1>
      <nav className={style["bar-nav"]}>
        <ul className={style['item-nav']}>
          <li>Relatório Geral</li>
          <li>Relatório Reduzido</li>
        </ul>
      </nav>
    </header>


      <main className={style['main']}>
        <FormNovaDespesa onAddDespesa={adicionarDespesas}/>
        <ListaDespesas showList={agrupadoData}/>
      </main>
    </div>
  )
}

export default App

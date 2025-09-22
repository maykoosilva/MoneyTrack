import { useEffect, useState } from "react"
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"
import { converterParaNumero } from "./utils/converterParaNumero"

import style from "./App.module.css"
import { useCallback } from "react"
import { useMemo } from "react"

function App() {

  const [despesas, setDespesas] = useState([])
  //const [agrupadoData, setAgrupadoData] = useState([])

  const adicionarDespesas = useCallback((novaDespesa)=>{
    setDespesas([...despesas, novaDespesa])
  }, [])

  const agrupadoData = useMemo(()=>{
    const agrupado = despesas.reduce((acc, valorAgrupado)=>{
      const mes = valorAgrupado.data.slice(0, 7)
      const valorDespesa = converterParaNumero(valorAgrupado.valorDespesas)
      
      if (!acc[mes]){
        acc[mes] = 0
      }

      acc[mes] += valorDespesa;
      return acc

    }, {})

    const agrupadoArray = Object.entries(agrupado)
    
    return agrupadoArray;

  }, [despesas])

  console.log(agrupadoData)

  return (
    <div className={style['container']}>
    <header className={style['header']}>
      <h1>OKYAM</h1>
      <nav className={style["bar-nav"]}>
        <ul className={style['item-nav']}>
          <li>RELATÓRIO GERAL</li>
          <li>RELATÓRIO REDUZIDO</li>
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

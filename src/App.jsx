import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ResumoDoMes from "./components/resumo-do-mes/ResumoDoMes"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"
import { DespesaProvider } from './context/DespesaContext';

import style from "./App.module.css"

function App() {
  return (
    <Router>
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
          <DespesaProvider>
            <Routes>
              <Route path='/' 
                element={
                <>
                  <FormNovaDespesa/>
                  <ResumoDoMes/>
                </>
                }
              />
              {/*<ListaDespesas despesas={despesas}/>*/}
              <Route path='/lista/:mes' element={<ListaDespesas/>}/>
            </Routes>
          </DespesaProvider>
        </main>
      </div>
    </Router>
  )
}

export default App

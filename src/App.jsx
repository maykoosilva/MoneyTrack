import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormNovaDespesa from "./components/nova-despesa/FormNovaDespesa"
import ResumoDoMes from "./components/resumo-do-mes/ResumoDoMes"
import ListaDespesas from "./components/lista-despesas/ListaDespesas"
import { DespesaProvider } from './context/DespesaContext';

import style from "./App.module.css"

function App() {

  return (
    <div className={style['app-container']}>
      <header className={style['app-header']}>
        <h1>OKYAM</h1>
        <nav className={style["main-nav"]}>
          <ul className={style['nav-list']}>
            <li className={style['nav-item']}><Link to="/" className={style['link']}>RELATÓRIO GERAL</Link></li>
            <li className={style['nav-item']}>RELATÓRIO REDUZIDO</li>
          </ul>
        </nav>
      </header>


      <main className={style['main-content']}>
        <DespesaProvider>
            <Routes>
              <Route path='/' 
                element={
                <>
                  <section className={style['form-section']}>
                    <FormNovaDespesa/>
                  </section>
                  <section className={style['summary-section']}>
                    <ResumoDoMes/>
                  </section>
                </>
                }
              />
              <Route path='/lista/:mes' element={
                <section className={style['detailed-report']}>
                  <ListaDespesas/>
                </section>}/>
            </Routes>
        </DespesaProvider>
      </main>
    </div>
  )
}

export default App

import { Link } from "react-router-dom"
import styles from "./ResumoDoMes.module.css"
import stylesGeneral from "../../styles/TabelaRelatorio.module.css"
import { formatarMonetario } from "../../utils/formatarMonetario";
import HeaderTabela from "../tabela/HeaderTabela";
import { DespesaContext } from "../../context/DespesaContext";
import React, { useContext } from "react";
import { usePagination } from "../../hooks/usePagination";

function ResumoDoMes(){
    const { groupedByDate } = useContext(DespesaContext)
    const { currentPage, itemByPage, numOfPage, nextPage, backPage } = usePagination(groupedByDate.length)
    const colunas = ["MÊS", "VALOR", "EXIBIR"]

    const pageInit = currentPage  * itemByPage
    const pageEnd = pageInit + itemByPage

    const expenseByPage = groupedByDate.slice(pageInit, pageEnd)

    return(
        <div className={styles['container-despesas-resumo']}> 
            <div className={styles['containerTable']}>
                <HeaderTabela colunas={colunas}/>

                <ul className={stylesGeneral['list-despesas']}>
                    {expenseByPage.length === 0 ? <p>{console.log("vazio")}</p> : expenseByPage.map(([mes, valor])=>{
                        return(
                            <li key={mes}>
                                <span>{mes}</span>
                                <span>{formatarMonetario(valor)}</span>
                                <span>
                                    <Link to={`/lista/${mes}`}>
                                    <button className={stylesGeneral['btn-report']}>EXIBIR</button>
                                    </Link>
                                </span>
                            </li>
                        )}) 
                    }
                </ul>
                {console.log(expenseByPage.length)}
                {groupedByDate.length > itemByPage &&(
                    
                    <div className={styles["pagination"]}>
                        <button onClick={backPage} disabled={currentPage === 0}>{"<"}</button>
                        {currentPage + 1} de {numOfPage}
                        <button onClick={nextPage} disabled={currentPage === numOfPage - 1}>{">"}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(ResumoDoMes);
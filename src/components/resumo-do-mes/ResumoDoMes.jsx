import { Link } from "react-router-dom"

import styles from "../../styles/TabelaRelatorio.module.css"
import { formatarMonetario } from "../../utils/formatarMonetario";
import HeaderTabela from "../tabela/HeaderTabela";
import { DespesaContext } from "../../context/DespesaContext";
import React, { useContext } from "react";

function ResumoDoMes(){
    const { groupedByDate } = useContext(DespesaContext)
    console.log(groupedByDate)
    const colunas = ["MÊS", "VALOR", "EXIBIR"]

    return(
        <div className={styles['container-despesas-resumo']}> 
            <HeaderTabela colunas={colunas}/>

            <ul className={styles['list-despesas']}>
                {groupedByDate.length === 0 ? <p>{console.log("vazio")}</p> : groupedByDate.map(([mes, valor])=>{
                    return(
                        <li key={mes}>
                            <span>{mes}</span>
                            <span>{formatarMonetario(valor)}</span>
                            <span>
                                <Link to={`/lista/${mes}`}>
                                <button>EXIBIR</button>
                                </Link>
                            </span>
                        </li>
                    )}) 
                }
            </ul>
        </div>
    )
}

export default React.memo(ResumoDoMes);
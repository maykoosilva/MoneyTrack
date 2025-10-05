import { useContext, useState } from "react";
import styles from "../../styles/TabelaRelatorio.module.css"
import HeaderTabela from "../tabela/HeaderTabela";
import { DespesaContext } from "../../context/DespesaContext";
import FormNovaDespesa from "../nova-despesa/FormNovaDespesa";

function ListaDespesas(){
    const { expense, formEditToggle, setFormEditToggle, setSelectedExpense } = useContext(DespesaContext)
    const colunas = ["DATA", "DESPESA", "VALOR", "SITUAÇÃO", "EDITAR"]

    function selectedExpense(data){
        setSelectedExpense(data)
        setFormEditToggle(prev => !prev)
    }

    return(
        <div className={styles['container-despesas-lista-despesa']}>
            <HeaderTabela colunas={colunas}/>

            <ul className={styles['list-despesas']}>
                {expense.length === 0 ? console.log("Vazio !!") : expense.map((data)=>{
                    return(
                        <li key={data.id}>
                            <span>{data.data}</span>
                            <span>{data.nomeDespesas}</span>
                            <span>{data.valorDespesas}</span>
                            <span>{data.pago}</span>
                            <span><button onClick={()=>selectedExpense(data)}>EDITAR</button></span>
                        </li>
                    )
                })}
            </ul>
            {formEditToggle && (<FormNovaDespesa/>)}
        </div>
    )
}

export default ListaDespesas;
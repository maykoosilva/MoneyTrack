import { useContext} from "react";
import styles from "../../styles/TabelaRelatorio.module.css"
import HeaderTabela from "../tabela/HeaderTabela";
import { DespesaContext } from "../../context/DespesaContext";
import FormNovaDespesa from "../nova-despesa/FormNovaDespesa";
import { useParams } from "react-router-dom";

function ListaDespesas(){
    const { mes } = useParams()
    console.log(mes)
    const { expense, formEditToggle, setFormEditToggle, setSelectedExpense } = useContext(DespesaContext)
    const colunas = ["DATA", "DESPESA", "VALOR", "SITUAÇÃO", "EDITAR"]

    function selectedExpense(data){
        setSelectedExpense(data)
        setFormEditToggle(prev => !prev)
    }

    const expenseFilter = expense.filter((data)=> data.data.slice(0, 7) === mes)

    return(
        <div className={styles['container-despesas-lista-despesa']}>
            <HeaderTabela colunas={colunas}/>

            <ul className={styles['list-despesas']}>
                {expenseFilter.length === 0 ? console.log("Vazio !!") : expenseFilter.map((data)=>{
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
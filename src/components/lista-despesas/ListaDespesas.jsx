import styles from "../../styles/TabelaRelatorio.module.css"
import HeaderTabela from "../tabela/HeaderTabela";

function ListaDespesas({despesas}){
    const colunas = ["DATA", "DESPESA", "VALOR", "SITUAÇÃO"]

    return(
        <div className={styles['container-despesas']}>
            <HeaderTabela colunas={colunas}/>

            <ul className={styles['list-despesas']}>
                {despesas.length === 0 ? console.log("Vazio !!") : despesas.map((data)=>{
                    return(
                        <li key={data.id}>
                            <span>{data.data}</span>
                            <span>{data.nomeDespesas}</span>
                            <span>{data.valorDespesas}</span>
                            <span>{data.pago}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaDespesas;
import styles from "../../styles/TabelaRelatorio.module.css"
import { formatarMonetario } from "../../utils/formatarMonetario";
import HeaderTabela from "../tabela/HeaderTabela";

function ResumoDoMes({showList}){
    const colunas = ["MÊS", "VALOR", "EXIBIR"]

    return(
        <div className={styles['container-despesas']}> 
            <HeaderTabela colunas={colunas}/>

            <ul className={styles['list-despesas']}>
                {showList.length === 0 ? <p>{console.log("vazio")}</p> : showList.map(([mes, valor])=>{
                    return(
                        <li key={mes}>
                            <span>{mes}</span>
                            <span>{formatarMonetario(valor)}</span>
                            <span>EXIBIR</span>
                        </li>
                    )}) 
                }
            </ul>
        </div>
    )
}

export default ResumoDoMes;
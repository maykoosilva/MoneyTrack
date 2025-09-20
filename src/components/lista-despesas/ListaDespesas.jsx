import styles from "./ListaDespesas.module.css"
import { formatarMonetario } from "../../utils/formatarMonetario";

function ListaDespesas({showList}){
    return(
        <div className={styles['container-despesas']}>
            <div className={styles['header']}>
                <span className={styles['span-font']}>MÊS</span>
                <span className={styles['span-font']}>VALOR</span>
                <span className={styles['span-font']}>EXIBIR</span>
            </div>

            <ul className={styles['list-despesas']}>
                {showList.length === 0 ? 
                    <p>{console.log("vazio")}</p>
                    :
                    showList.map(([mes, valor])=>{
                        return(
                                <li key={mes}>
                                    <span>{mes}</span>
                                    <span>{formatarMonetario(valor)}</span>
                                    <span>EXIBIR</span>
                                </li>
                            )
                    }) 
                }
            </ul>
        </div>
    )
}

export default ListaDespesas;
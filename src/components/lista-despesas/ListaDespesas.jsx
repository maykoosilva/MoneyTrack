import styles from "./ListaDespesas.module.css"

function ListaDespesas({showList}){
    return(
        <div className={styles.containerDespesas}>
            <div className={styles.header}>
                <span>MÊS</span>
                <span>VALOR</span>
                <span>EXIBIR</span>
            </div>

            <ul className={styles.listDespesas}>
                {showList.length === 0 ? 
                    <p>{console.log("vazio")}</p>
                    :
                    showList.map(([mes, valor])=>{
                        return(
                                <li key={mes}>
                                    <span>{mes}</span>
                                    <span>{valor}</span>
                                    <span><button>EXIBIR</button></span>
                                </li>
                            )
                    }) 
                }
            </ul>
        </div>
    )
}

export default ListaDespesas;
import styles from "./ListaDespesas.module.css"

function ListaDespesas({showList}){
    // verificar se o objeto está vazio
    const emptyObject = showList.every(item => Object.keys(item).length === 0);

    return(
        <div className={styles.containerDespesas}>
            <div className={styles.header}>
                <span>MÊS</span>
                <span>VALOR</span>
                <span>EXIBIR</span>
            </div>

            <ul className="listDespesas">
                {emptyObject ? 
                    <p>{console.log("vazio")}</p>
                    :
                    Object.entries(showList[0]).map(([mes, valor])=> {
                        return<li key={mes}>{valor}{mes}</li>
                    })
                    
                }
            </ul>
        </div>
    )
}

export default ListaDespesas;
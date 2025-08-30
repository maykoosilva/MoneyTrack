import styles from "./ListaDespesas.module.css"

function ListaDespesas({showList}){
    return(
        <div className={styles.containerDespesas}>
            <div className={styles.header}>
                <span>DESPESA</span>
                <span>VALOR</span>
                <span>MÊS</span>
                <span>EXIBIR</span>
            </div>



            <ul className="listDespesas">
                {showList.length !== 0 ? 
                    showList.map((despesa)=>{
                        return<li key={despesa.id}>{despesa.nomeDespesas}</li>
                    }) 
                    :
                    <p>{console.log(showList.id)}</p>
                }
            </ul>
        </div>
    )
}

export default ListaDespesas;
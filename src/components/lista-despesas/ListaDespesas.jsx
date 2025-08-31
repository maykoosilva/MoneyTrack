import styles from "./ListaDespesas.module.css"

function ListaDespesas({showList}){

    const emptyObject = showList.every(item => Object.keys(item).length === 0);

    return(
        <div className={styles.containerDespesas}>
            <div className={styles.header}>
                <span>DESPESA</span>
                <span>VALOR</span>
                <span>MÊS</span>
                <span>EXIBIR</span>
            </div>

            {console.log(showList)}
            {console.log(emptyObject)}

            <ul className="listDespesas">
                {emptyObject ? 
                    <p>{console.log("vazio")}</p>
                    :
                    showList.map((despesa)=>{
                        console.log(despesa)
                        return<li key={despesa.id}>{console.log(despesa.nomeDespesas)}</li>
                    }) 
                    
                }
            </ul>
        </div>
    )
}

export default ListaDespesas;
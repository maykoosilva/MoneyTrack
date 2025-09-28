import styles from "./HeaderTabela.module.css"

function HeaderTabela({colunas}){
    return(
        <div>
            <ul className={styles['header']}>
                {colunas.map((col, index)=>{
                    return<li key={index} className={styles['col']}>{col}</li>
                })}
            </ul>
        </div>
    )
}

export default HeaderTabela;
import { useState } from "react";
import styles from "./FormNovaDespesa.module.css"

function FormNovaDespesa({onAddDespesa}){

    const [despesas, setDespesas] = useState({
        id: Date.now(),
        nomeDespesas: "",
        valorDespesas: 0,
        data: getDataHoje(),
        pago: false
    })

    const [erro, setErro] = useState({})
    const [styleErro, setStyleErro] = useState(false)

    function getDataHoje(){
        const hoje = new Date()
        const dia = String(hoje.getDate()).padStart(2, "0")
        const mes = String(hoje.getMonth() + 1).padStart(2, "0")
        const ano = hoje.getFullYear();
        return `${ano}-${mes}-${dia}`
    }

    function verifyInput(evt){
        const {name, value} = evt.target;
        if (name === "valorDespesas"){
            const onlyNumber = value.replace(/\D/g, "")
            const numberFormat = new Intl.NumberFormat("pt-br", {style: "currency", currency:"BRL"}).format(parseFloat(onlyNumber) / 100)

            setDespesas((prev)=> ({...prev, [name]: numberFormat}))
        }

        else
        {
            setDespesas((prev) => ({...prev, [name]: value}))
        }
    }

    function handleSubmit(evt){
        evt.preventDefault()

        const newErro = {}

        if (!despesas.nomeDespesas.trim()){
            newErro.nomeDespesas = "Nome é Obrigatório !!"
            setStyleErro(true)
        }

        if (!despesas.valorDespesas){
            newErro.valorDespesas = "Valor é obrigatório !!"
        }

        setErro(newErro)

        //console.log("ERRO:", erro)
        //console.log("Despesas:" ,despesas)
        //console.log("Object Key:" ,Object.keys(newErro))

        if (Object.keys(newErro).length === 0){
            setStyleErro(false)
            onAddDespesa(despesas)
        }
        else{

        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="txtDespesa">Despesa: </label>
            <input className={styleErro ? styles.inputError : ""} type="text" id="txtDespesa" name="nomeDespesas" value={despesas.nomeDespesas} onChange={verifyInput}/>

            <label htmlFor="txtValor">Valor: </label>
            <input type="text" name="valorDespesas" id="txtValor" value={despesas.valorDespesas} onChange={verifyInput}/>

            <label htmlFor="txtData">Data: </label>
            <input type="date" name="data" id="txtData" value={despesas.data} onChange={verifyInput}/>

            <button type="submit">ENVIAR</button>
        </form>
    )
}

export default FormNovaDespesa;
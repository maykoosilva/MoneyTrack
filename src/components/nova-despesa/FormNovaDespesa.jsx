import React, { useContext, useEffect, useState } from "react";
import styles from "./FormNovaDespesa.module.css"
import { formatarMonetario } from "../../utils/formatarMonetario";
import { v4 as uuidv4 } from "uuid";
import { DespesaContext } from "../../context/DespesaContext";

function getDataHoje(){
    const hoje = new Date()
    const dia = String(hoje.getDate()).padStart(2, "0")
    const mes = String(hoje.getMonth() + 1).padStart(2, "0")
    const ano = hoje.getFullYear();
    return `${ano}-${mes}-${dia}`
}

function FormNovaDespesa(){
    const { addExpense, selectedExpense, editExpense, setFormEditToggle } = useContext(DespesaContext)

    const [despesas, setDespesas] = useState({
        nomeDespesas: "",
        valorDespesas: 0,
        data: getDataHoje(),
        pago: "teste"
    })

    useEffect(()=>{
        if(selectedExpense){
            setDespesas((prev)=> ({...prev, ...selectedExpense}))
        }
    }, [selectedExpense])

    const [erro, setErro] = useState({})
    const [styleErro, setStyleErro] = useState(false)

    function verifyInput(evt){
        //validarInput(evt, setDespesas)
        const {name, value} = evt.target;
        if (name === "valorDespesas"){
            const onlyNumber = value.replace(/\D/g, "")
            const numberFormat = formatarMonetario(onlyNumber)

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

        if (Object.keys(newErro).length === 0){
            setStyleErro(false)

            const novaDespesaComId = {id: despesas.id || uuidv4(), ...despesas}

            if(selectedExpense){
                editExpense(selectedExpense.id, novaDespesaComId)
                setFormEditToggle((prev)=> !prev)
                setDespesas({nomeDespesas: "", valorDespesas: 0, data: getDataHoje(), pago: "teste"})

            }
            else{
                addExpense(novaDespesaComId)
                setDespesas({nomeDespesas: "", valorDespesas: 0, data: getDataHoje(), pago: "teste"})
            }
        }
    }

    return(
        <form onSubmit={handleSubmit} className={styles['form']}>
            <label htmlFor="txtDespesa">Despesa</label>
            <input className={styleErro ? styles['input-error'] : ""} type="text" id="txtDespesa" name="nomeDespesas" value={despesas.nomeDespesas} onChange={verifyInput}/>

            <label htmlFor="txtValor">Valor</label>
            <input type="text" name="valorDespesas" id="txtValor" value={despesas.valorDespesas} onChange={verifyInput}/>

            <label htmlFor="txtData">Data</label>
            <input type="date" name="data" id="txtData" value={despesas.data} onChange={verifyInput}/>

            {selectedExpense ? (<button type="submit">Salvar</button>) : (<button type="submit">Enviar</button>)}
        </form>
    )
}

export default FormNovaDespesa;
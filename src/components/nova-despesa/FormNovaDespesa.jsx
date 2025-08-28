import { useState } from "react";

function FormNovaDespesa(){

    const [despesas, setDespesas] = useState({
        id: Date.now(),
        nomeDespesas: "",
        valorDespesas: "",
        data: getDataHoje(),
        pago: false
    })

    function getDataHoje(){
        const hoje = new Date()
        const dia = String(hoje.getDate()).padStart(2, "0")
        const mes = String(hoje.getMonth() + 1).padStart(2, "0")
        const ano = hoje.getFullYear();
        return `${ano}-${mes}-${dia}`
    }

    function verifyInput(evt){
        const {name, value} = evt.target;
        setDespesas((prev) => ({...prev, [name]: value}))
    }

    function handleSubmit(evt){
        evt.preventDefault()

        console.log(despesas)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="txtDespesa">Despesa: </label>
            <input type="text" id="txtDespesa" name="nomeDespesas" onChange={verifyInput}/>

            <label htmlFor="txtValor">Valor: </label>
            <input type="Number" name="valorDespesas" id="txtValor" onChange={verifyInput} onKeyDown={(evt)=>{if(['e', 'E', '+', '-'].includes(evt.key))
                evt.preventDefault()
            }}/>

            <label htmlFor="txtData">Data: </label>
            <input type="date" name="data" id="txtData" value={despesas.data} onChange={verifyInput}/>

            <button type="submit">ENVIAR</button>
        </form>
    )
}

export default FormNovaDespesa;
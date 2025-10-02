import { formatarMonetario } from "./formatarMonetario"

export function validarInput(evt, setDespesas){
    const {name, value} = evt.target
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

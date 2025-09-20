export const formatarMonetario = (valor) =>{
    return new Intl.NumberFormat("pt-br", {style:"currency", currency: "BRL"}).format(parseFloat(valor)/ 100)
}
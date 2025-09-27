export const converterParaNumero = (valor) =>{
    let valorFormatado = valor.replace("R$", "").replace(".", "").replace(",", ".")

    return parseFloat(valorFormatado) * 100;
}  
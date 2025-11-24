interface Data {
    dia: string 
    mês: string
    ano: string
}

function criaObjeto(StringData): Data {
    const [dia, mês, ano] = StringData.split("/");

    return{
        dia,
        mês,
        ano
    }
}

const objetoData = criaObjeto("04/05/2006");
console.log(objetoData);


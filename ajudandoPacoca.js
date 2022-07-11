var retorno = "9 2y 4 -6 -12 -1y"

// transforma um string em lista, usando com parametro de separação espaços.
retorno = retorno.split(" ") 


function separaY(listaDeRetrono) {
    /* 
    inclui os elementos que possuem "y" em uma lista especial
    e elementos sem "y" em outras lista
    devonvendo depois dessa filtagem um array que comtém dois arrays(ypslons e nYpslons).
    */ 

    let ypslons = []
    let nYpslons = []
        for(let i = 0; i < retorno.length; i++) {
            if (retorno[i].includes("y", 0)) {
            ypslons.push(retorno[i])
            }else {
                nYpslons.push(retorno[i])
            }
        }
        let resultado = [ypslons, nYpslons]
        return resultado;
}


function separaNegativosPositivos(listaComY) {
    /*
    recebe um array e usa apenas o valor necessário,
    remove o caracter "y" de cada elemento da lista
    e separa os elemento em positivos e negativos.
    */
    let negativos = []
    let positivos = []
    listaComY = listaComY[0]

        for(let i = 0; i < listaComY.length; i++) {
            if (listaComY[i].includes("-")) {
            negativos.push(listaComY[i].replace("y", ""))
            } else {
                    positivos.push(listaComY[i].replace("y", ""))
                    }
        }
        let resultado = [positivos, negativos]
        return resultado;
}


function somaY(listaResultadoPosNEg) {
    /*
    recebe um array com dois novos arrays,
    o priemiro com elemento positivos
    e os segundo elementos negativos.
    Logo após retorna a soma dos elementos junto ao caracter "y".
    */
    let pos = listaResultadoPosNEg[0]
    let neg = listaResultadoPosNEg[1]
    let poss = 0 
    let negg = 0 
    for(let i = 0; i < pos.length; i++) {
        poss +=Number(pos[i])
    }
    for(let i = 0; i < neg.length; i++) {
        negg +=Number(neg[i])
    }
    let soma = poss+negg
    let resultado = `${soma}y`
        return resultado;
}
console.log(retorno)
console.log(separaY(retorno))
console.log(separaNegativosPositivos(separaY(retorno)))
console.log(somaY(separaNegativosPositivos(separaY(retorno))))
//somaPositivo - só calcula a soma para numeros positivos
//Caso tenha um numero negativo, deve sinalizar 
//um erro (retornando -1)
function somaPositivo(a,b) {
    if(a >= 0 && b >=0)
        return a+b;
    else {
        //Indicar erro - somente numeros positivos.
        return -1;
    }
}

module.exports = somaPositivo;
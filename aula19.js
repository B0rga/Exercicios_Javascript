
// Aula 19 - Funções

function Verificar(valor){
    if(valor%2==0){
        return `${valor} é par`;
    }
    else{
        return `${valor} é ímpar`;
    }
}

console.log(Verificar(10));
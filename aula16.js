
// Aula 16 - Estrutura de Repetição (for)
var incomodador = 'Elefante'
var incomodam = ""

for(cont=1; cont<=10; cont++){
    incomodam = incomodam + " incomodam"
    if(cont==1){
        console.log(`${cont} ${incomodador} incomoda muita gente.`)
    }
    else if(cont%2==0){
        console.log(`${cont} ${incomodador}s${incomodam} muito mais.`)
    }
    else{
        console.log(`${cont} ${incomodador}s incomodam muita gente.`)
    }
}

// Para executar o programa no modo Debug, basta clicar em Run en Debug,
// sendo útil para a execução de códigos principalmente com estrutura de repetição

// Aula 15 - Estrutura de Repetição (while)

var incomodador = "Fabricio"
var num = 1
var incomodam = ""

while(num<=20){
    incomodam = incomodam+" incomodam"
    if(num==1){
        console.log(`${num} ${incomodador} incomoda muita gente.`)
    }
    else if(num%2==0){
        console.log(`${num} ${incomodador}s${incomodam} muito mais.`)
    }
    else{
        console.log(`${num} ${incomodador}s incomodam muita gente.`)
    }
    num++
}
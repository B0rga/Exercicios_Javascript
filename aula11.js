
// Aula 11 - Quer horas são?

var hr = new Date().getHours()
var min = new Date().getMinutes()
 
console.log(`São ${hr}:${min}`)
if(hr < 12){
    console.log('Bom dia!')
}else if(hr < 19){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
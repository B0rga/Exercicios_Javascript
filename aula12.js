
// Aula 12 - Condição Múltipla (switch, case, default)

var diaSem = new Date().getDay()
/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/
switch(diaSem){
    case 0:
        console.log('Hoje é domingo.')
        break
    case 1:
        console.log('Hoje é segunda-feira.')
        break
    case 2:
        console.log('Hoje é terça-feira.')
        break
    case 3:
        console.log('Hoje é quarta-feira.')
        break
    case 4:
        console.log('Hoje é quinta-freira.')
        break
    case 5:
        console.log('Hoje é sexta-freira (sextou meus bacanos).')
        break
    case 6:
        console.log('Hoje é domingo.')
        break
    default:
        console.log('[ERRO] Caso inválido!')
        break
}
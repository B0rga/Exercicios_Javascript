
// Aula 17 - Array

let pokemons = ["Bulbasaur", "Rattata", "Charizard"];

pokemons.push("Kakuna") // adicionando elemento para array

for(let pokemon in pokemons){
    console.log(`Pokémon ${pokemons[pokemon]}`)
}

console.log(`\nO último pokémon está na posição ${pokemons.indexOf("Kakuna")}`) 
// se o elemento procurado não existir no vetor, a posição exibida será -1

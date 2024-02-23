
// Aula 20 - Objetos

let pessoa = {}; // criação de um objeto

// FUNÇÕES/MÉTODOS
function Cadastrar(){
    pessoa.nome = "Pedro";
    pessoa.idade = 19;
    pessoa.sexo = "Masculino"
    pessoa.peso = 56.5;
    return pessoa;
}

function Engordar(kg){
    pessoa.peso+=kg;
    // ou this.peso+=kg
}

function ExibirDados(){
    console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nSexo: ${pessoa.sexo}\nPeso: ${pessoa.peso}`)
}

// INTERFACE DE USUÁRIO
pessoa = Cadastrar(); // objeto recebendo dados do cadastro
Engordar(5);
ExibirDados();



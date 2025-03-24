// FILTER
// Filtrar números maiores que 2

// const numeros = [1, 2, 3, 4, 5, 6];

// const numerosMaioresQueDois  = numeros.filter(numero => numero > 2);
// console.log(numerosMaioresQueDois);

// Filtrar nomes

// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Fernanda"];

// let nomesLongos = nomes.filter(nome => nome.length > 5);
// console.log(nomesLongos);


// Filtrando números pares
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let pares = numeros.filter(numero => numero % 2 === 0);
// console.log(pares);

// Filtrando objetos, onde a idade é maior que 18

// let pessoas = [
//     { nome: "Lucas", idade: 17},
//     { nome: "Mariana", idade: 22},
//     { nome: "Pedro", idade: 15},
//     { nome: "JUliana", idade: 30}
// ];

// let adultos = pessoas.filter(pessoa => pessoa.idade >= 18)
// console.log(adultos);



// ----------------------------- // ---------------------------- //

// FIND
// Retorna o primeiro elemento da lista correspondente a condição

// Procurar um produtopelo preço
// const produtos = [
//     { id: 1, nome: "Teclado", preco: 100},
//     { id: 2, nome: "Mouse", preco: 50},
//     { id: 3, nome: "Monitor", preco: 700}
// ]

// const produtoCaro = produtos.find(produto => produto.preco = 700);
// console.log(produtoCaro);


// Encontrar número maior que 10

// let numeros = [5, 8, 12, 20, 3, 15];

// let encontrado = numeros.find(numero => numero > 10);
// console.log(encontrado);



// Buscar por um nome, pela primeira letra
// let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Cátia"];

// let nomeEncontrado = nomes.find(nome => nome.startsWith("C"));
// console.log(nomeEncontrado);

// Encontrar um objeto em um array
// let pessoas = [ 
//     { nome: "Lucas", idade: 17},
//     { nome: "Mariana", idade: 22},
//     { nome: "Pedro", idade: 15},
//     { nome: "JUliana", idade: 30}
// ];

// let adulto = pessoas.find(pessoa => pessoa.idade >= 18);
// console.log(adulto);

// -------------------- // -------------------------------- //


// MAP
// Percorre um array e retorna um novo array modificado.

// MUltiplicar todos os números por 2
// const numeros = [1, 2, 3, 4, 5];

// const numerosDobrados = numeros.map(numero => numero * 2);
// console.log(numerosDobrados);

// Criando um array de nomes a partir de objetos.
// let pessoas = [
//     {nome: "Carlos", idade: 25},
//     {nome: "Ana", idade: 30},
//     {nome: "Bruno", idade: 20},
// ];

// let nomes = pessoas.map(pessoa => pessoa.nome);
// console.log(nomes)


// Criando frases com informações de objetos
// let pessoas = [
//     {nome: "Carlos", idade: 25},
//     {nome: "Ana", idade: 30},
//     {nome: "Bruno", idade: 20},
// ];

// let mensagem = pessoas.map(pessoa => `${pessoa.nome} tem ${pessoa.idade} anos.`);
// console.log(mensagem);


// Deixando nomes em maiusculo e adicionando sufixo
// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome => "Colaborador: " + nome.toUpperCase());
// console.log(nomesMaiusculos);


// ------------------------------------- // -------------------------------------- //

// REDUCE

// Somar todos os números do array
// const numeros = [1, 2, 3, 4, 5];

// const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(soma);


// Verificar maior número em uma array

//  const numeros = [10, 5, 8, 20, 3];

//  const maiorNumero = numeros.reduce((max, numero) => {
//     if(numero > max) {
//         return numero; 
//     } else {
//         return max; 
//     }
//  }, numeros[0]);

//  console.log(maiorNumero);

// Contar a frequência de palavras
// const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

// const contagem = palavras.reduce((acumulador, palavra) => {
//     acumulador[palavra] = (acumulador[palavra] || 0) + 1;
//     return acumulador;
// },{})
// console.log(contagem);

// Calcular médias de notas
// const notas = [7, 8, 9, 6, 10];

// const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
// console.log(media);

// ------------------------------ // ------------------------------------------- //

// Uso combinado
const usuarios = [
    { id: 1, nome: "Alice", idade: 25},
    { id: 2, nome: "Bob", idade: 30},
    { id: 3, nome: "Carol", idade: 20}
]

// Filtrar usuários com idade maior que 21.
const maiorDeIdade = usuarios.filter(usuario => usuario.idade > 21);

// Encontrar o primeiro usuário com idade maior que 21
const usuario = usuarios.find(usuario => usuario.idade > 21);


// Criar um array apenas com nomes dos usuários
const nomesUsuarios = usuarios.map(usuario => usuario.nome);

// Somar todas as idades dos usuários usando reduce
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0);


console.log("maiores de idade", maiorDeIdade);
console.log("Primeiro maior de idade: ", usuario);
console.log("Nomes de usuários", nomesUsuarios);
console.log("Soma de idade:",  somaIdades);

// Lista de produtos
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];


// Filtrar produtos com preço acima de 500

const produtosCaros = produtos.filter(produtos => produtos.preco > 500);

// Encontrar o primeiro produto chamado "Mouse"

const mouse = produto.find(produto => produto.nome === ("Mouse"));

// Criar um array apenas com os nomes dos produtos

const nomesProdutos = produtos.map(produtos => produtos.nome);

// Somar todos os preços dos produtos usando reduce

const totalPreco = produtos.reduce((total, produtos) => total + produtos.preco, 0);


// Retorno:

console.log(produtosCaros); // [{ id: 1, nome: "Notebook", preco: 3500 }, { id: 4, nome: "Monitor", preco: 1200 }]
console.log(mouse); // { id: 2, nome: "Mouse", preco: 150 }
console.log(nomesProdutos); // ["Notebook", "Mouse", "Teclado", "Monitor"]
console.log(totalPreco); // 5050
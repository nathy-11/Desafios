// let nome = prompt("Digite seu nome:")
// //console.log("Seu nome é: " + nome);
// alert("Seu nome é: " + nome);

// IF SIMPLES
// let idade = prompt("Digite sua idade: ");

// if(idade >= 18) {
//     console.log("Você é maior de idade.");
// }

// IF / ELSE
// let temperatura = 12;
//     if(temperatura > 25) {
//         console.log("Está calor!");
//     } else {
    //         console.log("Está frio!");
//     }

// IF / ELSE IF / ELSE
// let nota = 8;

// if(nota > 6) {
//     console.log("Aprovado(a)!");
// } else if (nota >= 5) {
//     console.log("Está de recuperação");
// } else {
//     console.log("Reprovado(a)!");
// }

// OPERADOR TERNÁRIO / IF TERNÁRIO
// let saldo = 90; 

// let podeComprar = saldo >= 100 ? "Compra aprovada!" : "Saldo insuficiente.";

// console.log(podeComprar);

// // SWITCH CASE
// let dia = 6;

// switch(dia) {
//     case 1:
//         console.log("Segunda-feira");
//         break;
//     case 2: 
//             console.log("Terça-feira");
//             break;
//     case 3: 
//         console.log("Quarta-feira");
//          break;
//     default:
//         console.log("Dia inválido.");

// }

// CONDICIONAL ALINHADA
// IF DENTRO DE IF
// let idade = 22;
// let temCarteira = true;

// if(idade >= 18) {
//     if(temCarteira) {
//         console.log("Você pode dirigir.");
//     } else {
//         console.log("Você precisa tirar sua carteira de motorista.");
//     }
// } else {
//     console.log("Você ainda não pode dirigir");
// }

// CONDIÇÃO ANINHADA
// MULTIPLAS VERIFICAÇÕES

let hora = 8 ;
let diaDaSemana = "terça";

if(hora >= 6 && hora < 12) {
    console.log("Bom dia!");
} else {
    if(hora >= 12 && hora < 18) {
        if(diaDaSemana === "segunda") {
            console.log("Boa tarde! Ótima semana.")
        } else {
            console.log("Boa tarde!");
        }
    } else {
        console.log("Boa noite!");
    }
}



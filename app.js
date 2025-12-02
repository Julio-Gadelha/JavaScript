//  24/11/25  // VARIAVEIS 

// var
// let
// const

// TIPOS DE DADOS

// Number
// String
// Boolean
// Null
// Undefined

// NUmber
// let numero = 109
// console.log(numero)
// console.log(typeof numero)

// String
// let texto = "Olá meu Amigo, o sonho ira se torna realidade pode ter certeza"
// let nome = "GAbriel"
// console.log(texto + " " + nome)

// Boolean

// let verdadeiro = true
// console.log(typeof verdadeiro)


// LISTA SOBRE OBJECTS TREINO
// const produto = {
//   nome: "Camisa",
//   preco: 59.90,
//   estoque: 12
// };
// console.log(" O preço total da camisa e : " + produto.preco)

// Usando o objeto do exercício anterior, mude o valor de estoque para 7
//   produto.preco = 7
//   console.log(produto.preco)

// Ainda com o mesmo objeto, adicione a propriedade categoria com o valor "Roupas".

// produto.categoria = "Roupas";
// console.log(produto.categoria)




//   ARRAYS TAREFA DE COMO PERCORRER O ARRAY(OBEJTOS)
// let carros = [
//     { 
//         id: 1,
//         modelo: "Fusca",
//         ano: 1979,
//         cor: "Amarela"
//     },
//     { 
//         id: 2,
//         modelo: "Gol",
//         ano: 1990,
//         cor: "Azul"
//     },
//     { 
//         id: 3,
//         modelo: "Civic",
//         ano: 2005,
//         cor: "Preta"
//     },
//     { 
//         id: 4,
//         modelo: "Palio",
//         ano: 2002,
//         cor: "Vermelha"
//     },
//     { 
//         id: 5,
//         modelo: "Fiesta",
//         ano: 2010,
// //         cor: "Branca"
// //     },
// //     { 
// //         id: 6,
// //         modelo: "Kangoo",
// //         ano: 2015,
// //         cor: "Prata"
// //     },
// //     { 
// //         id: 7,
// //         modelo: "Uno",
// //         ano: 1995,
// //         cor: "Verde"
// //     },
// //     { 
// //         id: 8,
// //         modelo: "Saveiro",
// //         ano: 2012,
// //         cor: "Preta"
// //     },
// //     { 
// //         id: 9,
// //         modelo: "Strada",
// //         ano: 2017,
// //         cor: "Branca"
// //     },
// //     { 
// //         id: 10,
// //         modelo: "Siena",
// //         ano: 2008,
// //         cor: "Cinza"
// //     }
// // ];


// //Acesse o modelo do carro que tem o id 3 e exiba uma frase com seu nome.
// // console.log(`O carro do modelo ${carros[2].modelo}`);

// //Acesse a cor do carro com o modelo "Fiesta" e crie uma frase informando a cor do carro.
// // console.log(` o Carro ${carros[4].modelo} e da cor ${carros[4].cor}`)

// //Crie uma frase dizendo o ano do carro que tem o id 7
// //  console.log(` O carro  do modelo  ${carros[6].modelo} e do ano ${carros[6].ano}`)

// //Exiba o modelo e a cor do carro que foi fabricado em 2005.
// // console.log(` O carro de modelo ${carros[2].modelo} tem a cor ${carros[2].cor} e foi fabricado no ano de ${carros[2].ano}`)

// //Crie uma frase que diga o modelo e o ano do carro com id 10.
// // console.log(` O carro de modelo ${carros[9].modelo} e do ano ${carros[9].ano}`)

// //Crie uma frase dizendo que o carro com o id 5 é branco e foi fabricado em 2010.
// // console.log(` O carro de modelo ${carros[4].modelo} foi fabricado no ano de ${carros[4].ano}`)




// // ARRAYS TAREFA PARA TREINAR
// let filmes = [
//     { 
//         id: 1,
//         titulo: "O Senhor dos Anéis: A Sociedade do Anel",
//         ano: 2001,
//         genero: "Fantasia"
//     },
//     { 
//         id: 2,
//         titulo: "O Poderoso Chefão",
//         ano: 1972,
//         genero: "Crime"
//     },
//     { 
//         id: 3,
//         titulo: "Forrest Gump: O Contador de Histórias",
//         ano: 1994,
//         genero: "Drama"
//     },
//     { 
//         id: 4,
//         titulo: "Star Wars: O Império Contra-Ataca",
//         ano: 1980,
//         genero: "Ficção científica"
//     },
//     { 
//         id: 5,
//         titulo: "A Origem",
//         ano: 2010,
//         genero: "Ficção científica"
//     },
//     { 
//         id: 6,
//         titulo: "O Rei Leão",
//         ano: 1994,
//         genero: "Animação"
//     },
//     { 
//         id: 7,
//         titulo: "Titanic",
//         ano: 1997,
//         genero: "Romance"
//     },
//     { 
//         id: 8,
//         titulo: "Vingadores: Ultimato",
//         ano: 2019,
//         genero: "Ação"
//     },
//     { 
//         id: 9,
//         titulo: "O Exorcista",
//         ano: 1973,
//         genero: "Terror"
//     },
//     { 
//         id: 10,
//         titulo: "Jurassic Park",
//         ano: 1993,
//         genero: "Aventura"
//     }	
// ]; 

// Acesse o título do filme com o id 4 e exiba uma frase dizendo que o filme é do gênero "Ficção científica".
// console.log(`O filme ${filmes[3].titulo} é do gênero ${filmes[3].genero}`)

// Acesse o gênero do filme "Titanic" e crie uma frase dizendo o gênero do filme.
// console.log(`O filme ${filmes[3].titulo} é do gênero ${filmes[3].genero}`)


// Crie uma frase dizendo o ano do filme que tem o id 7.
// console.log(`O filme de id 7 tem o ano de ${filmes[6].ano}.`);


// Exiba o título e o ano do filme que foi lançado em 1994.
// console.log(`Os filmes que foram lançados em ${filmes[5].ano} são ${filmes[5].titulo} e ${filmes[2].titulo}`);

// Crie uma frase dizendo o título e o ano do filme com id 3.
// console.log(` O  filme ${filmes[2].titulo} e um filme de ${filmes[2].genero} é e do ano ${filmes[2].ano}`)

// Crie uma frase dizendo que o filme com o id 10 é de "Aventura" e foi lançado em 1993.
// console.log(` O filme ${filmes[9].titulo} e do genero de ${filmes[9].genero} e foi lançado no ano de ${filmes[9].ano}`)

// Exiba o título e o gênero do filme que foi lançado em 2001.
// console.log(` O filme ${filmes[0].titulo} e do genero ${filmes[0].genero} e foi lançado no ano de ${filmes[0].ano}`)



// QUESTIONS SOBRE IF 01/12/25

// Escreva um código que determine se uma pessoa é idosa, considerando que uma pessoa é idosa quando tem 60 anos ou mais.
// 

// let idade = 57
// if (idade > 60) {
//     console.log("Você e considerado idoso ou idosa")
// } else if(idade <60) {
//     console.log("Você não e idoso ou idosa")
// }



// Escreva um código para classificar o desempenho de um aluno com base na sua nota. Se a nota for maior ou igual a 7, o aluno foi aprovado; se for menor que 7 e maior ou igual a 5, o aluno está de recuperação; e se for menor que 5, o aluno foi reprovado.

// let nota = 3

// if (nota >= 7) {
//     console.log("Você foi aprovado")
// } else if (nota < 7 && nota >= 5) {
//     console.log("Você está de recuperação, tenha calma vai dar certo")
// } else if (nota < 5) {
//     console.log("Você foi reprovado")
// }


// // Escreva um código que verifique se a senha fornecida é "1234".
// let senha = "1234"
// if (senha === "1234") {
//     console.log("A senha esta exatamente correta")
// } else {
//     console.log("A senha esta errada")
// }


// Escreva um código que verifique se um número é múltiplo de 3 ou 5. 

// let numero = 15
// if (numero % 3 === 0 || numero % 5 === 0) {
//     console.log("Ele é múltiplo")
// } else {
//     console.log("Não é múltiplo")
// }


// Escreva um código que compare dois números e informe qual deles é maior ou se eles são iguais.


// let numero1 = 2000
// let numero2 = 2000
// if (numero1 > numero2) {
//     console.log(" O primeiro numero e maior")
// } else if (numero2 > numero1) {
//     console.log("O numero 2 e maior")
// } else {
//     console.log("Os numeros são iguais")
// }


// Escreva um código que verifique se um número é divisível por 7.

// let numero = 20

// if (numero %7 === 0) {
//     console.log("E divisivel ")
// } else {
//     console.log("Não e divisivel meu mano")
// }

// Escreva um código que verifique se uma pessoa tem o nome "Maria"

// let nome = "Maria"

// if (nome ==="Maria") {
//     console.log("O nome consta")
// } else {
//     console.log("O nome não consta")
// }



// TRABALHANDO COM FUNÇÕES 

// Escreva uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.

// function somar(numero1, numero2) {
//     let somando = numero1 + numero2
//     return somando
// }

// console.log(somar(2, 5)) 

// // Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.

// function maiorNumero(numero1,numero2,numero3) {
//     if (numero1 >numero2 && numero1 > numero3) {
//         console.log("O primeiro numero1 e maior que o segundo e o terceiro")
//     }  else if(numero2 > numero1 && numero2 > numero3){
//            console.log("O numero dois e maior que todos eles")
//     }  else if(numero3 > numero1 && numero3 > numero2){
//               console.log("O numero 3 e maior que todos eles")
//     }
// } 
// maiorNumero(23000,5400,600)


// Escreva uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número.

// function calcularFatorial(numero) {
//     let resultado = 1;

//     for (let i = numero; i > 1; i--) {
//         resultado *= i;
//     }

//     return resultado;
// }
// console.log(calcularFatorial(5)); 


// USANDO O METODO DO FOR PARA TREINAR PARA AS SOFTS SKILLS


// Contagem Regressiva
// for (let index = 10; index >= 0; index--) {

//     console.log(index)
// }


// Contagem de Números Pares

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// Utilize um loop para imprimir todos os números pares de 1 a 20 no console.

// for (let index = 0; index < 20; index++) {
//     console.log(index)
// }


// Contagem de Números Ímpares
// for (let index = 0; index < 20; index+=3) {

//     console.log(index)
// }


// Soma de Números

// for (let index = 0; index < 30; index+2) {

//     console.log(index)
// }

// 	1. Imprimir o nome de todos os objetos
// Use um laço for para imprimir o nome de cada pessoa no array arrayObj.

// const nomes = [
//     { id: 1, nome: "Ana" },
//     { id: 2, nome: "Carlos" },
//     { id: 3, nome: "Fernanda" },
//     { id: 4, nome: "João" },
//     { id: 5, nome: "Maria" },
//     { id: 6, nome: "Pedro" },
//     { id: 7, nome: "Lucas" },
//     { id: 8, nome: "Beatriz" },
//     { id: 9, nome: "Roberta" },
//     { id: 10, nome: "Gustavo" }
//   ]


//   for (let index = 0; index < nomes.length; index++) {
//     console.log(nomes[index].nome)
//   }

// 2. Filtrar objetos pelo cargo "Student"
// Use um for para encontrar todos os objetos em que o role seja "Student" e imprima o nome dessas pessoas.

// const nomes = [
//   { id: 1, nome: "Ana", roles: "student" },
//   { id: 2, nome: "Carlos", roles: "student" },
//   { id: 3, nome: "Fernanda", roles:  "teacher" },
//   { id: 4, nome: "João", roles:"student",  },
//   { id: 5, nome: "Maria", roles:  "teacher" },
//   { id: 6, nome: "Pedro", roles: "student" },
//   { id: 7, nome: "Lucas", roles: "student"},
//   { id: 8, nome: "Beatriz", roles:  "teacher" },
//   { id: 9, nome: "Roberta", roles: "student" },
//   { id: 10, nome: "Gustavo", roles:  "teacher" }
// ];


// for (let index = 0; index < nomes.length; index++) {
//     if (nomes[index].roles === "student") {
//         console.log(nomes[index].nome);
//     }
// }

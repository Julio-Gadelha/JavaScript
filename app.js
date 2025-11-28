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
//         cor: "Branca"
//     },
//     { 
//         id: 6,
//         modelo: "Kangoo",
//         ano: 2015,
//         cor: "Prata"
//     },
//     { 
//         id: 7,
//         modelo: "Uno",
//         ano: 1995,
//         cor: "Verde"
//     },
//     { 
//         id: 8,
//         modelo: "Saveiro",
//         ano: 2012,
//         cor: "Preta"
//     },
//     { 
//         id: 9,
//         modelo: "Strada",
//         ano: 2017,
//         cor: "Branca"
//     },
//     { 
//         id: 10,
//         modelo: "Siena",
//         ano: 2008,
//         cor: "Cinza"
//     }
// ];


//Acesse o modelo do carro que tem o id 3 e exiba uma frase com seu nome.
// console.log(`O carro do modelo ${carros[2].modelo}`);

//Acesse a cor do carro com o modelo "Fiesta" e crie uma frase informando a cor do carro.
// console.log(` o Carro ${carros[4].modelo} e da cor ${carros[4].cor}`)

//Crie uma frase dizendo o ano do carro que tem o id 7
//  console.log(` O carro  do modelo  ${carros[6].modelo} e do ano ${carros[6].ano}`)

//Exiba o modelo e a cor do carro que foi fabricado em 2005.
// console.log(` O carro de modelo ${carros[2].modelo} tem a cor ${carros[2].cor} e foi fabricado no ano de ${carros[2].ano}`)

//Crie uma frase que diga o modelo e o ano do carro com id 10.
// console.log(` O carro de modelo ${carros[9].modelo} e do ano ${carros[9].ano}`)

//Crie uma frase dizendo que o carro com o id 5 é branco e foi fabricado em 2010.
// console.log(` O carro de modelo ${carros[4].modelo} foi fabricado no ano de ${carros[4].ano}`)




// ARRAYS TAREFA PARA TREINAR
let filmes = [
    { 
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        ano: 2001,
        genero: "Fantasia"
    },
    { 
        id: 2,
        titulo: "O Poderoso Chefão",
        ano: 1972,
        genero: "Crime"
    },
    { 
        id: 3,
        titulo: "Forrest Gump: O Contador de Histórias",
        ano: 1994,
        genero: "Drama"
    },
    { 
        id: 4,
        titulo: "Star Wars: O Império Contra-Ataca",
        ano: 1980,
        genero: "Ficção científica"
    },
    { 
        id: 5,
        titulo: "A Origem",
        ano: 2010,
        genero: "Ficção científica"
    },
    { 
        id: 6,
        titulo: "O Rei Leão",
        ano: 1994,
        genero: "Animação"
    },
    { 
        id: 7,
        titulo: "Titanic",
        ano: 1997,
        genero: "Romance"
    },
    { 
        id: 8,
        titulo: "Vingadores: Ultimato",
        ano: 2019,
        genero: "Ação"
    },
    { 
        id: 9,
        titulo: "O Exorcista",
        ano: 1973,
        genero: "Terror"
    },
    { 
        id: 10,
        titulo: "Jurassic Park",
        ano: 1993,
        genero: "Aventura"
    }	
]; 

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
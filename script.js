// Crie um array que receba 5 itens e exiba no console.
let itens = ["Computador", "Maçã", "Garrafa", "Açúcar", "Pneu"]
console.log(itens)

// Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Monitor")
console.log(itens)

// Utilize um método para remover o último nome do array.
itens.pop()
console.log(itens)

// Utilize um método para adicionar dois nomes ao fim do array.
itens.push("Diferencial", "Cabeçote")
console.log(itens)

// Utilize um método para remover o primeiro nome do array.
itens.shift()
console.log(itens)

// Utilize um método para organizar em ordem crescente o seguinte array:
let numeros = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numeros.sort(function (a, b) { return a - b })
console.log(numeros)

// Crie um objeto que receba ao menos três propriedades sobre você.
let sobremim = {
  nome: "Victor",
  sobrenome: "Menezes",
  idade: "22 anos",
}
console.log(sobremim)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobremim.filme = "Shrek 2"
console.log(sobremim)

// Remova uma propriedade desse objeto.
let novo = {
  nome: "Victor",
  idade: "22 anos",
}
delete novo.idade
console.log(novo)


// Mostre no console todas as propriedades desse objeto.
let objeto = {
  nome: "Victor",
  idade: "22 anos",
}
console.log(objeto)

//Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
let cadastro = [
  {
    nome: "Victor",
    idade: "22 anos",
    telefone: '(71) 00000-0000',
    MusicaFavorita: "Rich Flex",
    GeneroMusical: "Hip-hop/RnB",

    amigos: [
      'Daiane',
      'Iran',
      'Bruno',
      'Danilo',]
  },
  {
  nome:"Daiane",
  idade: "16 anos",
  telefone: '(93) 00000-0000',
  MusicaFavorita: "I was never there",
  GeneroMusical: "RnB",

  amigos: [
    'Victor',
    'Iran',
    'Italo',
    'Junior',]
  },
  {
  nome:"Iran",
  idade:"21 anos",
  telefone: '(71) 00000-0000',
  MusicaFavorita: "War Pigs",
  GeneroMusical: "Metal",

  amigos: [
    'Victor',
    'junior',
    'Lary',
    'Daiane',
  ]
  },
  {

  nome:"Bruno",
  idade:"19 anos",
  telefone: '(71) 00000-0000',
  MusicaFavorita: "Vida Louca",
  GeneroMusical: "Trap/Funk",

  amigos: [
    'Victor',
    'Luan',
    'Luciano',
    'Danilo',
  ]
  },
  {
  nome:"Danilo",
  idade:"20 anos",
  telefone: '(71) 00000-0000',
  MusicaFavorita: "Space Boys",
  GeneroMusical: "Euro Beat",

  amigos: [
    'Victor',
    'Luciano',
    'Bruno',
    'Lucas',
  ]
  },
]
console.log("cadastro posicao 0", cadastro[0].amigos)
console.log("cadastro posicao 1", cadastro[1].amigos)
console.log("cadastro posicao 2", cadastro[2].amigos)
console.log("cadastro posicao 3", cadastro[3].amigos)
console.log("cadastro posicao 4", cadastro[4].amigos)


// Mostre no console o nome de um amigo de cada lista.

console.log("cadastro posicao 0", cadastro[0].amigos[0])
console.log("cadastro posicao 1", cadastro[1].amigos[1])
console.log("cadastro posicao 2", cadastro[2].amigos[1])
console.log("cadastro posicao 3", cadastro[3].amigos[1])
console.log("cadastro posicao 4", cadastro[4].amigos[1])
var numero = 5; // Antiga forma de declarar variável (Não muito utilizada atualmente)
let nome = "John"; // Preferível para variáveis que podem ser reatribuidas.
const pi = 3.14; // Preferível para constantes, não pode ser reatribuida.


// Tipo Number
// Representa números inteiros ou de ponto flutuante.
let idade = 25;
let altura = 1.75;


// Tipo string
// Representa texto, delimitado por aspas simples, duplas ou duas crases.
let nome2 = "Alice";
let sobreNome = 'Soares';
let mensagem = `Olá, mundo!`;


// Tipo Boolean
// Representa valores booleanos, ou seja. True ou false.
let estaChovendo = true;
let solBrilha = false;


// Tipo undefined
// Representa uma variável que foi declarada, mas ainda não tem valor atribuído.
let variavelIndefinida;


// Tipo null
// Representa a ausência intencional de valor.
let valorNulo = null;


// Tipo Symbol
// Introduzido no ECMAScript 6, é usado para criar indentificadores únicos.
let id = Symbol("id");


// Tipo Object
// É um tipo de dado que representa um objeto e pode conter propriedades e métodos.
let pessoa = {
  nome: "Carlos",
  idade: 30,
  altura: 1.80,
};


// Tipo Array / List
// É um tipo de objeto usado para armazenar múltiplos valores em uma única variável.
let numeros = [1, 2, 3, 4, 5];


// Tipo function
function somar(a, b) {
  return (a + b);
}

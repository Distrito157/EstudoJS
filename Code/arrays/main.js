// Criando um array
let frutas = ['Maçã', 'Banana', 'Morango'];


// Acessando Elemento por índice
console.log(frutas[0]); // Saída: 'Maçã'


// Modificando elementos
frutas[1] = 'Abacaxi';


// Adicionando elementos ao final do array
frutas.push('Uva');


// Removendo o último elemento do array
frutas.pop();


// Verificando o tamanho do array
console.log(frutas.length); // Saída: 3


// Métodos úteis para arrays
// map: Cria um novo array com os resultados de uma função aplicada a cada elemento.
// filter: Cria um novo array com elementos que atendem a uma condição específica.
// reduce: Reduz os elemtnso do array a um único valor usando uma função acumuladora.
// forEach: Executa uma função para cada elemento do array.
// splice: Modifica o conteúdo de um array removendo ou substituindo elementos.

let numeros = [1,2,3,4,5,6];
let aoQuadrado = numeros.map(numero => numero ** 2); // [1,4,9,16,25]
let pares = numeros.filter(numero => numero % 2 === 0); // [2,4]


const numeros2 = [1,2,3,4,5,6,7,8,9,10];
const numeroMultiplicadoPorDois = numeros2.map(function(numero) {
  return numero * 2;
})
console.log(numeroMultiplicadoPorDois);


const idades = [10,20,25,30,45,15,29,31,43,13,18,21,23];
const idadefiltrada = idades.filter(function(numero) {
  return (numero % 2 == 0);
})
console.log(idadefiltrada);

const somaIdades = idades.reduce(function(idade, acumulador) {
  return (acumulador += idade);
}, 0)
console.log(somaIdades);

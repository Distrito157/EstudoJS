### [Voltar](../readme.md)

# Sumário
+ [**Controle de Fluxo**](#control-fluxo)
    + [Condicional (if, else, elif)](#condicional)
    + [Switch](#switch)
    + [Loops](#loops)
        + [For](#for)
        + [While](#while)
        + [Do while](#do-while)
        + [Break e Continue](#break-continue)
    + [Operador ternário](#op-ternario)
    + [Estrutura de fluxo para iteráveis](#estrutura-iteraveis)
        + [for of](#for-of)
        + [for in](#for-in)
        + [forEach()](#foreach)

### Controle de Fluxo <a name="control-fluxo"></a>
O controle de fluxo refere-se à capacidade de direcionar a execução do código com base em condições e repetições.

**Condicional if e else** <a name="condicional"></a>
+ Permite executar diferentes blocos de código com base em uma condição.
```javascript
let idade = 18;

if (idade >= 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}
```
**Elif**
+ Usada para testar condições adicionais quando a condição do **if** é falsa.
```javascript
let numero = 0;

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero.");
}
```

<hr>

**Switch** <a name="switch"></a>
+ Oferece uma maneira de lidar com váris condições em um bloco de código.

```javascript
let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    // ... Outros casos ...
    default:
        console.log("Dia inválido");
}
```

<hr>

### Loops <a name="loops"></a>
+ Permitem a execução repetida de um bloco de código enquanto uma condição for verdadeira.

**For** <a name="for"></a>
+ Usado para iterar sobre uma sequência de valroes ou realizar uma tarefa um número específico de vezes.
```javascript
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

**While** <a name="while"></a>
+ Executa um bloco de código enqukanto uma condição específica é verdadeira.
```javascript
let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}
```

**Do-While** <a name="do-while"></a>
+ Semelhante ao **while**, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja inicialmente falsa.
```javascript
let contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 5);
```

**Break e continue** <a name="break-continue"></a>
+ **Break**: Utilizado para interromper a execução de loops ou switch.
+ **Continue**: Pula para a próxima iteração de um loop.
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;  // Interrompe o loop quando i é igual a 5
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;  // Pula para a próxima iteração quando i é igual a 5
  }
  console.log(i);
}
```
<hr>

### Operador ternário <a name="op-ternario"></a>
+ Uma forma concisa de escrever uma instrução **if...else**.
```javascript
let idade = 20;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status)
```
<hr>

### Estrutura de Controle de Fluxo para iteráveis. <a name="estrutura-iteraveis"></a>
+ Estruturas de controle de fluxo para iteráveis são utilizadas para percorrer os elementos de uma coleção (como arrays ou objetos iteráveis) de maneira eficiente.

**For of** <a name="for-of"></a>
+ **for of** é usado para iterar sobre valores de objetos iteráveis (como arrays).
```javascript
let frutas = ["Maça", "Banana", "Morango"];

for (let fruta of frutas) {
    console.log(fruta);

}
// Saída:
    // Maça
    // Banana
    // Morango
```

**For in** <a name="for-in"></a>
+ **for in** é usado para iterar sobre propriedades enumeráveis de um objeto.
```javascript
for (variavel in objeto) {
    // Código a ser executado para cada propriedade do Objeto.
}
```
+ **variável**: Uma variável local que receberá a cada iteração o nome da propriedade atual.
+ **objeto**: O objeto que será iterado.

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}
```

**ForEach()** <a name="foreach"></a>
+ O método **forEach()** é uma maneira de iterar sobre elemento de um array. Ele aceita uma função de callback como argumento, que é executada para cada elemento do array.
```javascript
let numeros = [1,2,3,4,5,6];

numeros.forEach(function(numero) {
  console.log(numero);
});
// Saída:
    // 1
    // 2
    // 3
    // 4
    // 5
```

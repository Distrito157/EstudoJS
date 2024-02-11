<style>
ul li {
    list-style-type: disc;
}
</style>

### [Voltar](../readme.md)

# Sumário
+ [**Tipos de Variáveis**](#tipo-variaveis)
    + [Var](#tipo-var)
        + [Declaração, atribuição, reatribuição](#decr-atr-rea)
        + [Escopo Função e Bloco](#escopo-var)
    + [Let](#tipo-let)
        + [Escopo de Bloco](#escopo-let)
        + [Hoisting](#hoisting-let)
        + [Reatribuição Permitida](#reat-permitida)
        + [Não pode ser Recriada no mesmo Escopo](#recriada-escopo)
    + [Const](#tipo-const)
        + [Atribuição Obrigatória](#at-obrigatoria)
        + [Valor imutável](#valor-imutavel)
        + [Escopo de bloco](#escopo-const)
        + [Não pode ser Redeclarada](#redeclarada-const)
+ [**Tipos de dados**](#tipo-de-dados)
    + [Tipo Primitivo](#tipoPrimitivo)
        + [String](#tipoString)
        + [Número(Number)](#tipoNumber)
        + [Boolean](#tipoBoolean)
        + [undefined](#tipoUndefined)
        + [Null](#tipoNull)
        + [Symbol](#tipoSymbol)
    + [Objetos](#objetos)
        + [Object](#tipoObject)
        + [Array](#tipoArray)
        + [Function](#function)
    + [Especiais](#tipoespeciais)
        + [NaN(Not-a-Number)](#Nan)
        + [Infinity e -Infinity](#infinity)
        + [Bigint](#bigint)


# Tipos de Variáveis <a name="tipo-variaveis"></a>

### Var <a name="tipo-var"></a>
+ **Var** era a única palavra-chave para declarar variáveis antes do ECMAScript 6 (ES6).
+ Ela possui escopo de função, o que significa que é visível dentro da função em que foi declarada.
+ Não possui escopo de bloco, o que pode levar a problemas de vazamento de variáveis.

**Declaração, atribuição e reatribuição.**<a name="decr-atr-rea"></a>
```javascript
var idade = 25; // Declaração + Atribuição

let nome = "João"; // Declaração + Atribuição
nome = "Maria"; // Reatribuição
```

**Escopo de Função e escopo de bloco.** <a name="escopo-var"></a>
```javascript
function exemploVar() {
  if (true) {
    var x = 10;  // Variável declarada com 'var' dentro de um bloco
    console.log(x);  // Saída: 10
  }

  console.log(x);  // Saída: 10
}

exemploVar();

console.log(x);  // Erro! 'x' não é acessível fora da função
```
**Escopo de Função**
+ A variável **x** é declarada com **var** dentro da função **exemploVar()**.
+ Devido ao escopo de função, **x** é visível dentro de toda a função, incluindo blocos dentro dela.

**Ausência de Escopo de Bloco**
+ Dentro do bloco **if**, a variável **x** é declarada. Mesmo que **if (true)** seja um bloco, **var** não respeita o escopo de bloco.
+ Portanto, **x** é acessível fora do bloco **if**.

**Problemas de Vazamento de Variáveis**
+ Se tentarmos acessar **x** fora da função **exemploVar()**, ocorrerá um erro, porque **x** não está visível fora do escopo da função.

> [!WARNING]
> Com o [ECMAScript 6](https://www.w3schools.com/js/js_es6.asp) e a introdução das palavras-chave **let** e **const**, a recomendação geral é preferir essas novas palavras-chave, pois elas respeitam o escopo de bloco, tornando o código mais previsível e menos propenso a erros.

<hr>

### Let <a name="tipo-let"></a>
A palavra-chave **let** é utilizada em JavaScript para declarar variáveis. Ela foi introduzida no ECMAScript 6 (ES6) e oferece algumas melhorias em relação à antiga palavra-chave var.

**Escopo de Bloco** <a name="escopo-let"></a>
+ Uma das principais diferenças entre **let** e **var** é que **let** possui escopo de bloco. Isso significa que a variável é visível apenas dentro do bloco em que foi declarada.
```javascript
if (true) {
  let x = 10;
  console.log(x);  // Saída: 10
}
console.log(x);  // Erro: x não está definido fora do bloco
```

**Não Sofre Hoisting da Mesma Forma que o Var** <a name="hoisting-let"></a>
+ Variáveis declaradas com **let** não são "elevadas" (hoisting) da mesma forma que as variáveis declaradas com **var**. Com **let**, a variável não é inicializada até o ponto onde a declaração é encontrada no código.
```javascript
console.log(y); // Erro: y Não está definido
let y = 5;
```

**Reatribuição Permitida**
+ Você pode reatribuir valores a uma variável declarada com **let** <a name="reat-permitida"></a>
```javascript
let idade = 25;
idade = 26;
```

**Não Pode Ser Recriada no Mesmo Escopo** <a name="recriada-escopo"></a>
+ Você não pode redeclarar uma variável com **let** no mesmo escopo. Isso evita acidentes de redeclaração de variáveis.
```javascript
let nome = "Alice";
let nome = "Bob"; // Erro: 'nome já foi declarado'
```

>[!NOTE]
> Em resumo, **let** é uma palavra-chave mais moderna e flexível para declarar variáveis em JavaScript, especialmente quando você precisa de escopo de bloco e quer evitar algumas das peculiaridades do [var](#tipo-var).

<hr>

### Const <a name="tipo-const"></a>
+ A palavra-chave **const** é usada em JavaScript para declarar constantes, ou seja, valores que não podem ser reatribuídos após a sua inicialização

**Atribuição inicial Obrigatória**<a name="at-obrigatoria"></a>
+ Ao contrário de **var** e **let**, uma variável declarada com **const** deve ser inicializada no momento da declaração.
```javascript
const pi = 3.14;
```
**Valor Imutável** <a name="valor-imutavel"></a>
+ Uma vez atribuído, o valor de uma constante não pode ser alterado.
```javascript
const idade = 25;
idade = 26; // Erro: não é possível reatribuir uma constante
```

**Escopo de Bloco** <a name="escopo-const"></a>
+ Assim como **let**, **const** possui escopo de bloco. A constante é visível apenas dentro do bloco em que foi declarada.
```javascript
if (true) {
  const x = 10;
  console.log(x);  // Saída: 10
}
console.log(x);  // Erro: x não está definido fora do bloco
```

**Não Pode Ser Redeclarada** <a name="redeclarada-const"></a>
+ Você não pode redeclarar uma constante no mesmo escopo
```javascript
const nome = "Alice";
const nome = "Bob"; // Erro: 'nome' já foi declarado
```
>[!NOTE]
> O uso de **const** é recomendado sempre que você precisar declarar variáveis que não serão reatribuídas. Isso ajuda a tornar o código mais legível e a evitar inadvertidamente a modificação de valores que deveriam ser constantes.

<br>

# Tipos de dados <a name="tipo-de-dados"></a>

### Tipo Primitivo <a name="tipoPrimitivo"></a> 
+ São dados mais simples e imutáveis.
+ Quando dizemos que dados primitivos são imutáveis, estamos nos referindo ao fato de que, uma vez que um valor primitivo é atribuído a uma variável, o valor em si não pode ser alterado. No entanto, você pode reatribuir a variável com um novo valor.

**String** <a name="tipoString"></a> 
+ Sequência de chars(caracteres).
```javascript
let texto = "Olá, mundo!";
```
**Number** <a name="tipoNumber"></a> 
+ Números (Inteiros ou de ponto flutuante).
```javascript
let numero = 42;
let numero2 = 452.25; // Ponto flutuante
```
**Boolean** <a name="tipoPrimitivo"></a> 
+ Valor lógico, **true** ou **false**
```javascript
let verdadeiro = true;
let falso = false;
```
**Undefined** <a name="tipoUndefined"></a> 
+ Valor atribuído automaticamente a variáveis que não foram inicializadas.
```javascript
let indefinido; // Undefined
```
**Null** <a name="tipoNull"></a> 
+ Valor nulo.
```javascript
let nulo = null;
```
**Symbol** <a name="tipoSymbol"></a> 
+ Tipo de dado Introduzido no ECMAScript 6 (ES6) para criar identificadores únicos.
```javascript
let simbolo = Symbol("chave");
```

>[!NOTE]
> Quando você realiza operações em variáveis que contêm valores primitivos, essas operações não alteram diretamente o valor original. Em vez disso, elas criam um novo valor, como exemplificado aqui:
```javascript
let nome = "Alice";
let novoNome = nome.ToUpperCase(); // Cria um novo valor em vez de modificar 'nome'
console.log(nome); // Saída: Alice
console.log(novoNome); // Saída: ALICE
```
<hr>

### Objetos <a name="objetos"></a>
+ Estruturas mais complexas que podem armazenar dados e funcionalidades.
>[!NOTE]
> Irei abordar melhor em outra seção. Essa seção só irá cobrir o básico.

**Object** <a name="tipoObject"></a>
+ Coleção de pares chave-valor.
```javascript
let pessoa = {
    nome: "Alice",
    idade: 30,
};
```
**Array** <a name="tipoArray"></a>
+ Lista ordenada de valores.
```javascript
let numeros = [1,2,3,4,5,6];
```
**Function** <a name="function"></a>
+ Bloco de código reutilizável.
```javascript
function saudacao() {
    console.log("Olá!");
}
```

<hr>

### Tipo de dados Especiais <a name="tipoespeciais"></a>
+ Alguns tipos especiais que têm comportamentos particulares.

**NaN** <a name="Nan"></a>
+ **NaN** Representa "Not-a-Number" e é retornado quando ocorrem operações matemáticas inválidas.
```javascript
let resultado = "abc" / 2; // Retorna NaN
```
**Infinity e -Infinity** <a name="infinity"></a>
+ Representam infinito positivo e infinito negativo.
```javascript
let positivoInfinito = Infinity;
let negativoInfinito = -Infinity;
```

**BigInt** <a name="bigint"></a>
+ Tipo de dado introduzido no ECMAScript 202 para representar inteiros arbitrariamente grandes.
```javascript
let valorGrande = BigInt(90000714141512384512356);
```

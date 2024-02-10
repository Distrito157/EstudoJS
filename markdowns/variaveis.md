# Sumário

**Tipos de Variáveis**
+ Var
    + Exemplos
    

**Tipos de dados**


# Tipos de Variáveis
#### Var
+ **Var** era a única palavra-chave para declarar variáveis antes do ECMAScript 6 (ES6).
+ Ela possui escopo de função, o que significa que é visível dentro da função em que foi declarada.
+ Não possui escopo de bloco, o que pode levar a problemas de vazamento de variáveis.

##### </br>Exemplos 
**Declaração e atribuição.**
```javascript
var idade = 25;
```

**Escopo de Função e escopo de bloco.**
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

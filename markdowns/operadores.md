### [Voltar](../readme.md)

# Sumário
+ [**Operadores**](#operadores)
    + [Operadores Aritméticos](#operadores-aritme)
    + [Operadores de Atribuição](#operadores-atrib)
    + [Operadores de Comparação](#operadores-compar)
    + [Operadores Lógicos](#operadores-logic)
    + [Operadores de Incremento e Decremento](#operadores-inc-dec)
    + [Operadores de Concatenação](#operador-concatena)

### Operadores <a name="#operadores"></a>
+ Irei abordar os principais operadores que são essenciais para realizar diversas operações.

**Operadores Aritméticos** <a name="operadores-aritme"></a>
+ Realizam operações matemáticas básicas.
```javascript
let a = 5;
let b = 2;

let soma = a + b; // Adição
let subtracao = a - b; // Subtração
let multiplicacao = a * b; // Multiplicação
let divisao = a / b; // Divisão
let resto = a % b; // Resto da divisão
let exponenciacao = a ** b; // Exponenciação
```
**Operadores de Atribuição** <a name="operadores-atrib"></a>
+ Atribuem valores a variáveis.
```javascript
let x = 10;
x += 5; // x agora é 15 (adição)
x -= 3; // x agora é 12 (subtração)
x *= 2; // x agora é 24 (multiplicação)
x /= 4; // x agora é 6 (divisão)
```
**Operadores de Comparação** <a name="operadores-compar"></a>
+ Comparam dois valores e retornam um valor booleano (**True** ou **false**)
```javascript
let idade = 20;
idade == 20; // Igual a
idade === "20"; // Estritamente igual a (compara valor e tipo)
idade != 25; // Diferente de
idade !== "20" // Estritamente diferente de
idade > 18; // Maior que
idade < 30; // Menor que
idade >= 30; // maior ou igual a
idade <= 25; // Menor ou igual a
```
**Operadores Lógicos** <a name="operadores-logic"></a>
+ Realizam operações lógicas entre valores booleanos.
```javascript
let chuva = true;
let ventoForte = false;

chuva && ventoForte; // E lógico (true apenas se ambos forem true)
chuva || ventoForte; // Ou lógico (true se pelo menos um for true)
!chuva; // Negação lógico (inverte o valor)
```
**Operadores de Incremento e Decremento** <a name="operadores-inc-dec"></a>
+ Modificam o valor de uma variável.
```javascript
let contador = 5;

contador++; // Incremento pós fixo (contador agora é 6)
++contador; // Incremento pré-fixo (contador agora é 7)
contador--; // Decremento pós-fixo (contador agora é 6)
--contador; // Incremento pré-fixo (contador agora é 5)
```

**Operadores de Concatenação** <a name="operador-concatena"></a>
+ Utilizados para concatenar strings.
```javascript
let nome = "João";
let sobrenome = "Silva";

let nomeCompleto = nome + " " + sobrenome; // Concatenação de Strings
```

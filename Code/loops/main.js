// Loop for
for (i = 0; i <= 10; i++) {
  console.log(`Número ${i}`)
}


// loop while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


// Loop do while
let j = 0;
do {
  console.log(j); // Saída: 0, 1, 2, 3, 4
  j++;
} while (j < 5);


// loop for of
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}


// loop for in
let pessoa2 = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

for (let propriedade in pessoa) {
  console.log(propriedade, pessoa[propriedade]);
}

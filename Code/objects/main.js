let pessoa = {
  nome: "Felipi",
  idade: 20,
  cidade: "São paulo",
};

// Outro jeito de criar objetos
let carro = new Object();
carro.modelo = "Fusca";
carro.ano = 1970;

// Acessando elementos
carroNome = carro['modelo'];
carroNome2 = carro.modelo;
pessoaNome = pessoa.nome;

// Modificando e adicionando Propriedades
pessoa.idade = 31;
pessoa.profissao = "Desenvolvedor";

// Métodos
let pessoa2 = {
  nome: "Fernando",
  idade: 41,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};

pessoa2.saudacao(); // Saída: 'Olá, meu nome é Fernando';


// Iterando sobre Propriedades
for (let chave in pessoa2) {
  console.log(`${chave}: ${pessoa2[chave]}`)
}




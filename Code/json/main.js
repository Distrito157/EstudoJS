const pessoa = [
  {
    id: 1,
    nome: "Alice",
    idade: 25,
    cidade: "Nova York",
  },
  {
    id: 2,
    treinar: true,
    isCompleted: false,
  },
  {
    id: 3,
    estudar: true,
    isCompleted: true,
  },
];

// Convertendo objeto para JSON
const jsonPessoa = JSON.stringify(pessoa);

// Convertendo JSON para objeto
const objetoPessoa = JSON.parse(jsonPessoa);

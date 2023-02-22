// Desafio: Encontre a única string que não tem um par correspondente em uma lista de strings.

// Descrição: Dada uma lista de strings, cada uma aparecendo duas vezes, exceto por uma string que aparece apenas uma vez, 
// escreva um programa que encontre essa string única. A lista pode conter milhares de strings e as strings podem ter comprimentos diferentes.

// Exemplo:

// Input: ["a", "b", "c", "a", "b"]
// Output: "c"

// Explicação: A string "c" não tem um par correspondente na lista.

// --------------------------------------------------------------------------------------------------------------------------------------

var arr = ["a", "b", "c", "a", "b"];

// const repeated = arr.filter((element, index) => arr.indexOf(element) !== index);
const repeatedAndUnique = arr.filter((element, index) => arr.indexOf(element) === index);
const unique = repeatedAndUnique.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element));

// console.log(repeated);
console.log(`A string que nunca se repente dentro do array é: ${unique}`);
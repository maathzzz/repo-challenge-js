// Desafio: Escreva uma função em JavaScript que receba como parâmetro um array de 
// números e retorne um objeto contendo as seguintes informações:
// A soma de todos os números no array;
// A média de todos os números no array;
// O número mínimo no array;
// O número máximo no array.
// Por exemplo, se a função receber o array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3], ela deve retornar o seguinte objeto:
// {
//   soma: 39,
//   media: 3.9,
//   minimo: 1,
//   maximo: 9
// }

// --------------------------------------------------------------------------------------------------------------
// A soma de todos os números no array;

// var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// const SumAll = function(){

//     var sum = 0;
//     for(var i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
    
//     return sum
// }

// const result = SumAll(array)
// console.log(`A soma de todos os números dentro do array é ${result}`)

// --------------------------------------------------------------------------------------------------------------
// A média de todos os números no array;

// var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// const averageAll = function(){

//     var aver = 0;
//     for(var i = 0; i < array.length; i++ ) {
//         aver += array[i];
//     }

//     return aver
// }

// const result = averageAll(array) / array.length
// console.log(`A média de todos os números dentro do array é ${result}`)

// --------------------------------------------------------------------------------------------------------------
// O número mínimo no array;

// const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

// const minArr = function(){

//     let minimum = Math.min(...array)
//     return minimum

// }

// const result = minArr(array)
// console.log(`O valor mínimo do array é ${result}`)

// --------------------------------------------------------------------------------------------------------------
// O número máximo no array

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

const maxArr = function(){

    let maximum = Math.max(...array)
    return maximum

}

const result = maxArr(array)
console.log(`O valor máximo do array é ${result}`)
/* 
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se 
o número informado pertence ou não a sequência. 
*/

function Fibonacci(num: number, sup1 = 0, sup2 = 1) {
  if (sup2 === num) {
    return true;
  } else if (sup2 > num) {
    return false;
  } else {
    let nextNumber = sup1 + sup2;
    return Fibonacci(num, sup2, nextNumber);
  }
}

const numTeste = 34; // Outro numero para teste seria o 25, que não pertence.
const inFibonacciSequence = Fibonacci(numTeste);
console.log(`${!inFibonacciSequence ? 'não' : ''} pertence à sequência de Fibonacci.`)
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/ 

// solicita ao usuário um número para verificar se pertence sequência de Fibonacci
const num = parseInt(prompt("Digite um número para verificar na sequência de Fibonacci:"));

// função para calcular a sequência de Fibonacci até um determinado número
function fibonacci(num) {
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else {
    const seq = fibonacci(num - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
}

// chama a função fibonacci com o número informado pelo usuário
const fibSeq = fibonacci(num);

// verifica se o número informado está na sequência de Fibonacci
if (fibSeq.includes(num)) {
  console.log(`${num} pertence à sequência de Fibonacci: ${fibSeq}`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci: ${fibSeq}`);
}

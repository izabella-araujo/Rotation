/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

// string de exemplo
const stringOriginal = 'Pode se encontrar a felicidade mesmo nas horas mais sombrias';

// variável para armazenar a string invertida
let stringInvertida = '';

// percorre a string de trás para frente e adiciona cada caractere a stringInvertida
for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

// exibe a string invertida no console
console.log(stringInvertida);

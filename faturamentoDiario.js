/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

// URL do arquivo JSON ou XML com os dados de faturamento diário
const url = 'https://colona.com/faturamento.json';

// carrega os dados do arquivo usando a API Fetch
fetch(url)
  .then(response => response.json()) // converte a resposta em JSON
  .then(data => {
    // filtra os valores de faturamento diário que não são nulos 
    const faturamentoDiario = data.filter(valor => valor !== null && valor !== undefined);

    // calcula o menor e o maior valor de faturamento diário
    const menorValor = Math.min(...faturamentoDiario);
    const maiorValor = Math.max(...faturamentoDiario);

    // calcula a média mensal de faturamento diário, ignorando dias sem faturamento
    const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, valor) => total + valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // calcula o número de dias em que o faturamento diário foi superior à média mensal
    let numDiasAcimaMedia = 0;
    diasComFaturamento.forEach((valor) => {
      if (valor > mediaMensal) {
        numDiasAcimaMedia++;
      }
    });

    // exibe os resultados no console
    console.log(`Menor valor do faturamento diário: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor do faturamento diário: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Número do dias com faturamento diário acima da média mensal: ${numDiasAcimaMedia}`);
  })
  .catch(error => console.error(error)); // exibe uma mensagem de erro se houver problemas ao carregar os dados


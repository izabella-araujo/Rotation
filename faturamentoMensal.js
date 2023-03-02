/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // calcula a soma total de faturamento
  const somaFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  
  // calcula o percentual de representação de cada estado
  const percentuaisPorEstado = {};
  for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / somaFaturamento) * 100;
    percentuaisPorEstado[estado] = percentual.toFixed(2);
  }
  
  // exibe os resultados no console
  console.log(`Percentual do faturamento por estado:`);
  for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
  }

  
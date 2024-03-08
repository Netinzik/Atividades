/* Observe o trecho de código abaixo:
 int INDICE = 13, SOMA = 0, K = 0;
 enquanto K < INDICE faça
 {
 K = K + 1;
 SOMA = SOMA + K;
 }
 imprimir(SOMA);
 Ao final do processamento, qual será o valor da variável SOMA? */

 /*
  O resultado final será 91, ele soma 1 em k a cada vez que passa pelo looping e
  somará esse valor com soma. O que ocorre é que soma só é alterado a partir de k
  gerando uma progressão aritmétca.
 */ 
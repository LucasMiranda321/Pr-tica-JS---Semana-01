//Aula 08 - Comandos de Decisão Aninhados - Questão 01

const prompt = require('prompt-sync')();

n1 = parseInt(prompt("Digite o primeiro número inteiro: "));
n2 = parseInt(prompt("Digite o segundo número inteiro: "));

if (n1 > 0 && n2 > 0){
  
  if(n1 % 2 == 0 && n2 % 2 == 0){
    console.log("Os dois números são pares");
  } else if ((n1 % 2 == 1) && (n2 % 2 == 1)){
    console.log("Os dois números são impares");
  }else{
    console.log("Um par e um impar");
  }
  
} else{
  console.log("Existe pelo menos um número 0 ou negativo");
}
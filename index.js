//Aula 08 - Comandos de Decisão Aninhados - Questão 02

const prompt = require('prompt-sync')();

a1 = parseInt(prompt("Digite o primeiro ângulo interno: "));
a2 = parseInt(prompt("Digite o segundo ângulo interno: "));
a3 = parseInt(prompt("Digite o terceiro ângulo interno: "));

if (a1 + a2 + a3 == 180){
  
  if(a1 < 90 && a2 < 90 && a3 < 90){
    console.log("\nÉ um Triângulo Acutângulo");
  } else if (a1 == 90 || a2 == 90 || a3 == 90){
    console.log("\nÉ um Triângulo Retângulo");
  }else{
    console.log("\nÉ um Triângulo Obtusângulo");
  }
  
} else{
  console.log("\nNão é triângulo!");
}
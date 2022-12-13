//Aula 07 - Comandos de Decisão - Questão 03

const prompt = require('prompt-sync')();

cliente = prompt("Digite o nome do cliente: ");
compra = parseFloat(prompt("Digite o valor da compra: "));

if(compra < 1000){
  desconto = compra * 0.05;
  console.log("\nDesconto de 5%!");
  console.log("Valor do desconto: ", desconto);
  
} else if(compra >= 5000){
  desconto = compra * 0.15;
  console.log("\nDesconto de 15%!");
  console.log("Valor do desconto: ", desconto);
  
}else{
  desconto = compra * 0.10;
  console.log("\nDesconto de 10%!");
  console.log("Valor do desconto: ", desconto);
}

valorliquido = compra - desconto;

console.log("O valor da compra com desconto será de: ", valorliquido);
//Aula 07 - Comandos de Decisão - Questão 02

const prompt = require('prompt-sync')();

nome = prompt("Digite o nome do aluno: ");
n1 = parseFloat(prompt("Digite a primeira nota: "));
n2 = parseFloat(prompt("Digite a segunda nota: "));
n3 = parseFloat(prompt("Digite a terceira nota: "));

media = (n1 + n2 + n3) / 3;

console.log("\nMédia: ", media);
if(media >= 6){
  console.log("Resultado: Aprovado!");
} else if(media <= 3){
  console.log("Resultado: Reprovado!");
} else{
  console.log("Resultado: Recuperação!");
}
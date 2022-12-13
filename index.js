//Aula 06 - Entrada de Dados

const prompt = require('prompt-sync')();

modelo = prompt("Digite o modelo do seu veículo: ");
km = parseFloat(prompt("Digite a distância em km: "));
comb = parseFloat(prompt("Digite quantos litros de combustível foram gastos: "));

consumo = km / comb;

console.log("O consumo do carro", modelo, "é de", consumo, "km/L");
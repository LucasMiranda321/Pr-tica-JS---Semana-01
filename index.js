//Aula 05 - Operadores

const prompt = require('prompt-sync')();

a = 1;
b = 2;
c = 3;
d = "3";
e = false;
f = true;

op_1 = (a + b ** c - c % 2);
op_2 = (b * (c / a - a));
op_3 = ((c == d) != e);
op_4 = ((b >= a) == f);
op_5 = ((c !== d) && (b % 1 == 0));
op_6 = (e || (b > c || f));

console.log("Operação 1: ", op_1);
console.log("Operação 2: ", op_2);
console.log("Operação 3: ", op_3);
console.log("Operação 4: ", op_4);
console.log("Operação 5: ", op_5);
console.log("Operação 6: ", op_6);
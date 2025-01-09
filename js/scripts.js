// Aula 3
// var latitude = 40.87663;
// var longitude = -8.08373;

// console.log(latitude);
// console.log(longitude);

// Aula 4
// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

//concatenar
// console.log('Nome completo: ' + nome + '' + sobrenome);
// console.log (ddd + '-' + telefone);

//posição de caracteres e tamanho da string
// console.log('Primeira letra do nome: ' + nome[0]);
// console.log('Última letra do nome: ' + nome[3]);

// console.log('Tamanho do número do telefone: ' + telefone.length);

// Aula 5
// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;
// console.log('A média é: ' + media);

// console.log(Math.pow(num1, 4));


// var increment = 20;
// increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
// console.log(increment); // O console mostrará 25

// // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

// increment = 1;
// increment += 5;
// console.log(increment); // O console mostrará 6

// //conversão de variável
// var telefone = 998887655;
// var ddd = 21;

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log (ddd_string + '-' + tel_string);

// var idade = '17';

// idade = parseInt(idade);
// idade++;
// console.log(idade);


// Aula 6

var idade = "65";
var teste = idade == 60;

console.log(teste); //false

var teste = idade === 65;

console.log(teste); //false
//igual 3 vezes verifica valor e TIPO


var teste = idade != 65;

console.log(teste); //false

var vtype = true;

//tipo de variável
console.log(typeof vtype == "boolean"); //true


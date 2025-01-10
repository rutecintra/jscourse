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

// var idade = "65";
// var teste = idade == 60;

// console.log(teste); //false

// var teste = idade === 65;

// console.log(teste); //false
// //igual 3 vezes verifica valor e TIPO


// var teste = idade != 65;

// console.log(teste); //false

// var vtype = true;

// //tipo de variável
// console.log(typeof vtype == "boolean"); //true

// Aula 7

// var undf;

// console.log(undf); //undefined

// var temperatura = 35;
// temperatura = null;
// console.log(temperatura); //null

//null é typeof object
//se comparar null == undefined retorna true, mas
//se comparar null === undefined retorna false

// Aula 10

// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo_caixa + '</h1>';

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

//Aula 11

// function soma_numeros()
// {
//     var x = 5;
//     var y = 2;
//     var soma = x + y;
//     console.log(soma);
// }

// soma_numeros();

// function soma_args(num1, num2)
// {
//     var soma = num1 + num2;
//     return soma;
// }

// // console.log('Resultados da soma: ' + soma_args(10, 25));

// var soma_f = soma_args(10, 25);

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// console.log(typeof meu_peso);

// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// var meu_imc = valor_imc(meu_peso,minha_altura);

// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

//Aula 12

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[0][1]);

//Aula 13

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

//duas formas de acessar elemento
console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

funcionario.cargo = "Gerente de TI";
funcionario.cnh = "456789";

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = 'administração de empresas';
console.log(cursos[2].categorias[1]);
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

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// //duas formas de acessar elemento
// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de TI";
// funcionario.cnh = "456789";

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1].categorias[0]);

// cursos[2].categorias[1] = 'administração de empresas';
// console.log(cursos[2].categorias[1]);

//Aula 14

// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     'ano_nasc': 1992,
//     'nome_completo': function() {
//         var nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return nomeCompleto;
//     },
//     'idade': function() {
//         var idade = new Date().getFullYear() - this.ano_nasc;
//         return idade;
//     }
// };

// console.log(aluno.nome_completo());
// console.log(aluno.idade());

//Aula 16

// document.getElementById("click-me").onclick = function () {
//     alert("Você clicou no botão");
// }

// document.getElementById("hover-me").onmouseover = function () {
//     alert("Você passou com o cursor no botão");
// }

// document.getElementById("leave-me").onmouseout = function () {
//     alert("Você saiu com o cursor no botão");
// }

// document.onkeydown = function(event) {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };

// function button_clicked() {
//     alert("Você clicou no botão");
// }

//Aula 17

// var botao = document.getElementById("botao_cor");

// botao.onclick = function() {
//     // document.getElementById("botao_cor").style['background-color'] = "purple";
//     // this.style['background-color'] = "purple";
//     botao.style['background-color'] = "purple";
//     botao.style.transform = "translateX(100px)";
// }

//Aula 18

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste1";
// console.log(exemplo);

// var exemplo = document.getElementsByTagName("p");

// console.log(exemplo);

//Aula 19

// for (var a = 0; a < 5; a++) {
//     console.log(a);
// }

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for  (var b = 0; b < alunos.length; b++) {
//     console.log(alunos[b]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'

// }

// for (var prop in carro) {
//     console.log(prop + ': ' + carro[prop])
// }

// var elementos = document.getElementsByTagName("p");

// for (var c = 0; c < elementos.length; c++) {
//     elementos[c].style.color = "orange";
//     elementos[c].style['font-weight'] = "bold";
// }

// Aula 19

// var count = 0;

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// var count2 = 10;

// do {
//     console.log(count2);
//     count2++;
// } while (count2 < 5);

// Aula 20

// var idade = 18;

// if (idade < 18) {
//     console.log("Menor de idade");
// } else if (idade == 18) {
//     console.log("Tem 18 anos");
// } else {
//     console.log("Maior de idade");
// }

// var nota = 8;
// var faltas = 4;

// if (nota >= 7 && faltas <= 4) {
//     console.log("Passou");
// } else {
//     console.log("Rodou");
// }

// var nome = "Ivan";

// if (nome) {
//     console.log("Nome: " + nome);
// } else {
//     console.log("Nome não informado")
// }

// Aula 22

// var socio = true;
// var idade = 25;

// if (socio || idade >= 65) {
//     console.log("Ingresso gratuito");
// } else {
//     if(idade < 18) {
//         console.log("Preço a pagar: R$6.00");
//     } else {
//         console.log("Preço a pagar: R$12.00");
//     }
// }

// var funcionarios = [
        
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': undefined
        
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }

// ];

// var list_element = document.getElementById("filhos");
// list_element.innerHTML = "";

// for (var a = 0; a < funcionarios.length; a++) {

//     if ( ! funcionarios[a].filhos) {
//         continue;
//     }

//     var lista_filhos = funcionarios[a].filhos;

//     for (var b = 0; b<lista_filhos.length; b++) {
//         list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome;
//     }
// }


//Aula 24

// window.onmousemove = function(e) {

//     if (e.pageY < 5) {
//         alert("Não perca os descontos exclusivos na seção de promoções!");
//     }
// };

//Aula 25

// window.localStorage.setItem("nome", "João");

// document.getElementById("enviar-nome").onclick = function() {
//     var nome = document.getElementById("nome-usuario").value;
//     localStorage.setItem("nome", nome);

//     document.getElementById("name-field").style.display = "none";
    
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";
// }

// if (localStorage.nome) {

//     document.getElementById("name-field").style.display = "none";
    
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";
// }

// document.getElementById("not-me").onclick = function() {

//     localStorage.removeItem("nome");

//     document.getElementById("welcome-area").style.display = "none";
//     document.getElementById("name-field").style.display = "initial";
// }

//Aula 26

// var data_hoje = new Date(2016,0,10);
// var data_hoje = new Date("2020-03-18");
// var data_hoje = new Date();

// console.log(data_hoje.getDate());

// var data_nascimento = "1997-07-19";

// var ano_nasc = new Date(data_nascimento).getFullYear();
// var ano_atual = new Date().getFullYear();
// console.log(ano_atual - ano_nasc);

// var envio = new Date("2018-03-20").getTime();
// var entrega = new Date("2018-04-06").getTime();

// var total = (entrega - envio)/86400000;

// document.getElementById("dias_entrega").innerHTML = total;

//Aula 27

// console.log('Mensagem 1');

// window.setTimeout(function(){
//     console.log('Mensagem 2');
// },3000);

// document.getElementById("mostrar-loader").onclick = function() {

//     document.getElementById("spinner-loader").style.display = "initial";

//     window.setTimeout(function() {
//         document.getElementById("spinner-loader").style.display = "none";
//     }, 5000);
// }

// var count = 0;

// var interval = window.setInterval(function() {
//     console.log(count);
//     count++;

//     if (count >= 10) {
//         window.clearInterval(interval);
//     }

// }, 1000);

// window.setInterval(function() {

//     var hora_atual = format_time(new Date().getHours()) + ':' + format_time(new Date().getMinutes()) + ':' + format_time(new Date().getSeconds());

//     function format_time (time) {

//         if (time >= 0 && time <=9) {

//             var formatted_time = time.toString();
//             formatted_time = '0' + formatted_time;

//         } else {

//             var formatted_time = time.toString();
//         }

//         return formatted_time;
//     }

//     document.getElementById("relogio").innerHTML = hora_atual;

// }, 1000)

//Aula 28

// function valor_pedagio (categoria) {

//     switch(categoria) {

//         case '1':
//             return 11.22;
//             break;
//         case '2':
//             return 22.45;
//             break;
//         case '3':
//             return 16.88;
//             break;
//         case '4':
//             return 33.65;
//             break;
//         default:
//             return 'Categoria não encontrada';
//     }
// }

// var categoria_veiculo = '15';
// console.log(valor_pedagio(categoria_veiculo));

//Aula 29

// var x = 0;

// while (x < 10) {
//     console.log(x);
//     x++;

//     if (x == 5) {
//         break;
//     }
// }

// var lista = [1, 5, 9, 33, 36, 56, 89, 100, 103, 150, 145];

// for (var i = 0; i < lista.length; i++) {

//     if (lista[i] == 33) {

//         console.log("CU");
//         break;
//     }

//     console.log('Tentativa: ' + i);
// }

// var num = 0;

// while (num < 20) {

//     num++;

//     if (num % 2 == 0) {
//         continue;
//     }

//     console.log(num);
// }

//Aula 30

//select box

// document.getElementById("mostrar_opcao").onclick = function() {

//     // var campo_select = document.getElementById("options");
//     // var indice_selecionado = campo_select.options.selectedIndex;
//     // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;

//     // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

//     var valor_selecionado = document.getElementById("options").value;
//     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
// }

//radio buttons

// document.getElementById("mostrar_radio").onclick = function () {

//     var radio = document.getElementsByName("genero");
    
//     var radio_selected;
     
//     for (var a = 0;  a < radio.length; a++) {
//         if (radio[a].checked) {
//             radio_selected = radio[a].value;
//             break;
//         }
//     }
    
//     document.getElementById("radio_selecionado").innerHTML = radio_selected;

// };

//CheckBoxes

// document.getElementById("mostrar_check").onclick = function () {


//     var check = document.getElementsByName("interesse");

//     document.getElementById("check_selecionado").innerHTML = "";

//     for (var b = 0;  b < check.length; b++) {
//         if (check[b].checked) {
//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//         }
//     }


// };

//date

// document.getElementById("mostrar_data").onclick = function() {

//     var date_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(date_select);

//     document.getElementById("data_selecionada").innerHTML = data_completa;
// }

//Aula 31

// select box
// document.getElementById("escolaridade").onchange = function () {

//     var campo_select = document.getElementById("escolaridade");
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

// };

// // check box

// var check = document.getElementsByName("lanche");

// for (var a = 0;  a < check.length; a++) {

//     check[a].onchange = function () {

//         document.getElementById("check_selecionado").innerHTML = "";
        
//         for (var b = 0;  b < check.length; b++) {
            
//             if (check[b].checked) {
//                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//             }
//         }
//     }  
// }


//Aula 33

// document.getElementById("exemplo").innerHTML = "Olá";
// $("#elemento").html("Olá");

var oculto = false;

$("#esconder").click(function() {
    if ( ! oculto) {

        $(".exemplo").hide();
        oculto = true;
        $("#esconder").html("Mostrar");

    } else {
        
        $(".exemplo").show();
        oculto = false;
        $("#esconder").html("Esconder");
    } 
});
// Questão 1

document.getElementById("converter").onclick = function() {
    ctemp = parseFloat(document.getElementById("temp_celsius").value);

    if (ctemp) {
        var far = (9 * ctemp / 5) + 32;
        document.getElementById("temp_fahr").innerHTML = far;
    }
}

// Questão 2

ano = 1930;

var list_element = document.getElementById("anos_copa");
list_element.innerHTML = "";

while (ano <= 2018) {
    list_element.innerHTML += '<li>' + ano;
    ano+=4;
}

// Questão 3

document.getElementById("result").innerHTML = "Resultado do aluno: ";

document.getElementById("calcular").onclick = function() {
    document.getElementById("result").innerHTML = "Resultado do aluno: ";
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var faltas = parseFloat(document.getElementById("n_faltas").value);

    if ( ! nota1 || ! nota2 || ! faltas) {
        document.getElementById("result").innerHTML = "Preencha todos os campos!";
        return;
    }

    var presenca = (20 - faltas)/20;
    var media = (nota1+nota2)/2.0;

    var situacao;

    if (presenca >= 0.7 && media >= 6.5) {
        situacao = "Aluno aprovado!";
    } else if (presenca < 0.7 && media >= 6.5) {
        situacao = "Aluno reprovado por falta.";
    } else if (presenca >= 0.7 && media < 6.5) {
        situacao = "Aluno reprovado por nota.";
    } else {
        situacao = "Aluno reprovado por falta e por nota.";
    }

    document.getElementById("result").innerHTML += situacao;

}

// Questão 4

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

lista_vendas = document.getElementById("vendas_cursos");
lista_vendas.innerHTML = "";

var total_vendas = 0;

for (var i = 0; i < vendas_cursos.length; i++) {
    
    if ( ! vendas_cursos[i].reembolso) {
        
        lista_vendas.innerHTML += "<td>" + vendas_cursos[i].aluno + "</td>" + "<td>" + vendas_cursos[i].data + "</td>" + "<td>" + vendas_cursos[i].valor + "</td>";

        total_vendas += parseFloat(vendas_cursos[i].valor);
    }
}

document.getElementById("total_vendas").innerHTML = total_vendas;
//Questão 1

num1 = parseInt(document.getElementById("num_1").innerHTML);
num2 = parseInt(document.getElementById("num_2").innerHTML);
soma = num1 + num2;

document.getElementById("resultado").innerHTML = '<strong>' + soma + '</strong>';

//Questão 2

function c_to_f(temp) {
    var far = (9 * parseInt(temp) / 5) + 32;
    return far;
}

document.getElementById("caixa_amarela").innerHTML = c_to_f(document.getElementById("caixa_azul").innerHTML);

//Questão 3

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 


var newgrupos = grupos.slice(-2, );

console.log(newgrupos);

newgrupos.push(["Mariana", "Felipe", "Carla"]);

console.log(newgrupos);

//Questão 4

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_avaliacoes': function() {
        var total =
            this.n_aval_1_estrela +
            this.n_aval_2_estrelas +
            this.n_aval_3_estrelas +
            this.n_aval_4_estrelas +
            this.n_aval_5_estrelas
        ;
        return total;
    },
    'media_avaliacoes': function() {
        var media =
            (
                (this.n_aval_1_estrela * 1) +
                (this.n_aval_2_estrelas * 2) +
                (this.n_aval_3_estrelas * 3) +
                (this.n_aval_4_estrelas * 4) +
                (this.n_aval_5_estrelas * 5)
            )
            /
            (
                this.n_aval_1_estrela +
                this.n_aval_2_estrelas +
                this.n_aval_3_estrelas +
                this.n_aval_4_estrelas +
                this.n_aval_5_estrelas
            )
        ;
        return media.toFixed(1);
    }
}

//a
document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

//b
document.getElementById("total_aval").innerHTML = curso.total_avaliacoes();
document.getElementById("media_aval").innerHTML = curso.media_avaliacoes();

//Questão 5

var gatinha = {
    'nome': 'Leticya',
    'sobrenome': 'Cintra',
    'email': 'leticyacintra@gmail.com'
}

function htmlcontent(person) {
    var content = `
    <div class="tableBox">

        <table>

            <tr>
                <th>Nome Completo</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>` + person.nome + ' ' + person.sobrenome + `</td>
                <td>` + person.email + `</td>
            </tr>
            <tr>
                <td>Rute Cintra</td>
                <td>rutecintra@gmail.com</td>
            </tr>

        </table>
        
    </div>`;
    return content;
}

document.getElementById("tabela").innerHTML = htmlcontent(gatinha);


// Menu Mobile

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0px";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for (var i = 0; i < about_tags.length; i++) {

  about_tags[i].onclick = function() {  
    
    for (var j = 0; j < about_tags.length; j++) {

      about_tags[j].style['background-color'] = unselected_color;
      about_tags[j].style['font-weight'] = 'normal';

    }

    this.style['background-color'] = selected_color;
    this.style['font-weight'] = 'bold';
    document.getElementById("box-text").innerHTML = aboutUs[this.innerHTML];
  }
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var servico_atual = 0;

document.getElementById("service-previous").onclick = function() {

  servico_atual = servico_atual == 0 ? our_services.length - 1 : servico_atual - 1;

  document.getElementById("service-title").innerHTML = our_services[servico_atual].title;
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text;
}

document.getElementById("service-next").onclick = function() {

  servico_atual = servico_atual == our_services.length - 1 ? 0 : servico_atual + 1;

  document.getElementById("service-title").innerHTML = our_services[servico_atual].title;
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text;
}


// Data Footer

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();

document.getElementById("current_year").innerHTML = ano_atual;
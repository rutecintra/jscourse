//Questão 1

document.getElementById("estados").onchange = function() {

    var option_field = document.getElementById("estados");
    var option_index = option_field.options.selectedIndex;

    window.localStorage.setItem("estados", option_index);
}

if (window.localStorage.estados) {

    document.getElementById("estados").options.selectedIndex = window.localStorage.estados;
}

//Questão 2

document.getElementById("confirmar_pedido").onclick = function() {

    function format_time(time) {

        if (time >= 0 && time <=9) {

            var formatted_time = time.toString();
            formatted_time = '0' + formatted_time;

        } else {

            var formatted_time = time.toString();
        }

        return formatted_time;
    }
        

    today = new Date();

    var day = format_time(today.getDate());
    var month = format_time(today.getMonth() + 1);
    var year = today.getFullYear();

    orderdate = `${day}-${month}-${year}`;

    document.getElementById("data_pedido").innerHTML = orderdate;

    var option_order = document.getElementById("envios");
    var option_orderindex = option_order.options.selectedIndex;
    var option_ordervalue = option_order.options[option_orderindex].value;

    switch (option_ordervalue) {

        case 'normal':

            var deliverydays = 18;

            break;

        case 'express':


            var deliverydays = 12;

            break;
    }

    var deliverytime = new Date();
    deliverytime.setDate(deliverytime.getDate() + deliverydays);

    var delivery_day = format_time(deliverytime.getDate());
    var delivery_month = format_time(deliverytime.getMonth() + 1);
    var delivery_year = deliverytime.getFullYear();

    deliverydate = `${delivery_day}-${delivery_month}-${delivery_year}`;

    document.getElementById("data_entrega").innerHTML = deliverydate;
}

//Questão 3

var intervalId;
var isRunning = false;

var startTime = 0;
var elapsedTime = 0;

document.getElementById("comecar_parar").onclick = function () {

    if ( ! isRunning) {

        document.getElementById("comecar_parar").innerHTML = "Parar";

        isRunning = true;

        startTime = Date.now() - elapsedTime;

        intervalId = setInterval(function () {

            elapsedTime = Date.now() - startTime;

            var miliseconds = Math.floor(elapsedTime % 1000);
            var seconds = Math.floor((elapsedTime / 1000) % 60);
            var minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
            var hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

            function format_time(time) {
                return time < 10 ? '0' + time : time.toString();
            }

            function format_miliseconds(time) {
                if (time < 10) return '00' + time;
                if (time < 100) return '0' + time;
                return time.toString();
            }

            var cronometer =
                format_time(hours) +
                ':' +
                format_time(minutes) +
                ':' +
                format_time(seconds) +
                ' ' +
                format_miliseconds(miliseconds);

            document.getElementById("cronometro").innerHTML = cronometer;
        }, 10);

    } else {

        document.getElementById("comecar_parar").innerHTML = "Começar";
        clearInterval(intervalId);
        isRunning = false;
    }
};

document.getElementById("zerar").onclick = function () {
    clearInterval(intervalId);
    isRunning = false;

    elapsedTime = 0;
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
};

//Questão 4

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

total = 0;

for (var i = 0; i < carros.length; i++) {

    category = carros[i].categoria;

    console.log(category);
    console.log(total);

    switch(category) {

        case '1':
            total += 11.22;
            break;
        
        case '2':
            total += 22.45;
            break;

        case '3':
            total += 16.88;
            break;

        case '4':
            total += 33.65;
            break;

        default:
    }
}

document.getElementById("faturamento_total").innerHTML = total.toFixed(2);
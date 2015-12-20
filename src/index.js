/**
 * Created by eliasib on 20/12/2015.
 */

(function(){
    var button = document.getElementById('predict');
    var prediction = document.getElementsByClassName('prediction')[0];

    var SUJETO = [
        'El PP',
        'El PSOE',
        'Izquierda Unida',
        'Podemos',
        'Ciudadanos',
        'La Falange Española',
        'El Partido Comunista',
        'Mariano Rajoy',
        'Pedro Sánchez',
        'Alberto Garzón',
        'Pablo Iglesias',
        'Albert Rivera'
    ];

    var VERBO = [
        {
            main: ' pacta con ',
            follow: ''
        },
        {
            main: ' obtiene escaños para desbancar a ',
            follow: ''
        },
        {
            main: ' no negociará con ',
            follow: ''
        }
    ];

    var PREDICADO = [
        'el PP.',
        'el PSOE.',
        'Izquierda Unida.',
        'Podemos.',
        'Ciudadanos.',
        'la Falange Española.',
        'el Partido Comunista.',
        'Mariano Rajoy.',
        'Pedro Sánchez.',
        'Alberto Garzón.',
        'Pablo Iglesias.',
        'Albert Rivera.',
        'Angela Merkel.',
        'Barack Obama.',
        'Chiquito de la Calzada.',
        'La Veneno.',
        'Ylenia.',
        'Mario Vaquerizo.',
        'Luis Bárcenas.'
    ];

    var getRandomIndex = function (max) {
        return Math.floor(Math.random() * max);
    };

    button.addEventListener('click', function() {
        var pred_str = SUJETO[getRandomIndex(SUJETO.length)] + VERBO[getRandomIndex(VERBO.length)].main + PREDICADO[getRandomIndex(PREDICADO.length)];
        prediction.innerHTML = pred_str;
    });
})();
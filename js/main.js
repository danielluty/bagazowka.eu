/* Navigation */
$(function () {
    $('#toggler')
        .click(function () {
            if ($(window).innerWidth() < 600) {
                $('#js-nav').slideToggle(200);
            }
        });

    $('.navigation__link').click(function () {
        if ($(window).innerWidth() < 600) {
            $('#js-nav').slideUp(200);
        }
    });

    $('.navigation__logo').click(function () {
        if ($(window).innerWidth() < 600) {
            $('#js-nav').slideUp(200);
        }
    });
});

// Smooth scrolling

/* *** Cennik Transportow *** */

const formTrans = document.querySelector('#form-trans');

formTrans.addEventListener('submit', (e) => {
    e.preventDefault();

    let cena = 0,
        km = document
        .querySelector('#km')
        .value,
        cenaTrans = document.querySelector('#cenaTrans'),
        poleCena = document.querySelector('.cena-trans');

    if (km > 0 && km < 10000) {
        km = km - 3;
        cena = km * 5 + 50;
        poleCena.style = 'display: block;';
        cenaTrans.innerHTML = `${cena} zł`;
    } else {
        cenaTrans.innerHTML = 'Podaj poprawną wartość';
        km = 0;
    }
});

/* *** Cennik Przeprowadzek *** */

const formPrzep = document.getElementById('form-przep');

formPrzep.addEventListener('submit', (e) => {
    e.preventDefault();

    let cena = 0,
        hours = document
        .getElementById('hours')
        .value,
        workers = document
        .querySelector('#workers')
        .value,
        poleCena = document.querySelector('.cena-przep');

    cena = hours * workers;

    poleCena.style = 'display: block;';
    poleCena.innerHTML = `${cena} zł`;
});
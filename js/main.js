/* Navigation */
const nav = document.querySelector('.nav'),
    toggler = document.querySelector('.nav-toggle'),
    links = document.querySelectorAll('li a'),
    linksArr = Array.from(links);

if (window.innerWidth <= 768) {
    toggler.addEventListener('click', () => {
        nav.classList.toggle('nav__shown');
        linksArr.forEach(link => {
            link.style.opacity = 1;
        });
    });
    linksArr.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav__shown');
        });
    });
}

/* *** Price Calc Transport *** */
const formTrans = document.querySelector('#form-trans');

formTrans.addEventListener('submit', (e) => {
    e.preventDefault();

    let cena = 0,
        km = document.querySelector('#km').value,
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

/* *** Price Calc Moving *** */
const formPrzep = document.querySelector('#form-przep');

formPrzep.addEventListener('submit', (e) => {
    e.preventDefault();

    let cena = 0,
        hours = document.querySelector('#hours').value,
        workers = document.querySelector('#workers').value,
        poleCena = document.querySelector('.cena-przep');

    cena = hours * workers;

    poleCena.style = 'display: block;';
    poleCena.innerHTML = `${cena} zł`;
});
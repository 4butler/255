let link = [
    document.getElementById('sun-mercury'),
    document.getElementById('mercury-venus'),
    document.getElementById('venus-earth'),
    document.getElementById('earth-mars'),
    document.getElementById('mars-jupiter'),
    document.getElementById('jupiter-saturn'),
    document.getElementById('saturn-uranus'),
    document.getElementById('uranus-neptune')
];

let planet = [
    document.getElementById('mercury'),
    document.getElementById('venus'),
    document.getElementById('earth'),
    document.getElementById('mars'),
    document.getElementById('jupiter'),
    document.getElementById('saturn'),
    document.getElementById('uranus'),
    document.getElementById('neptune')
];

let panel = [
    document.getElementById('Mercury-panel'),
    document.getElementById('Venus-panel'),
    document.getElementById('Earth-panel'),
    document.getElementById('Mars-panel'),
    document.getElementById('Jupiter-panel'),
    document.getElementById('Saturn-panel'),
    document.getElementById('Uranus-panel'),
    document.getElementById('Neptune-panel')

];

let onfbtn = document.getElementById('switch');
let btn = document.getElementById('close');
let check = -1;

/* 행성 크기 조절 온오프 버튼 */
onfbtn.addEventListener('change', () => {
    if (onfbtn.checked) {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.toggle('on');
            planet[i].classList.toggle('on');
        }
    }

    else {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('on');
            planet[i].classList.remove('on');
        }
    }
});

/* 행성 소개 */
planet[0].addEventListener('click', function () {
    planet[0].classList.toggle('Active');
    panel[0].classList.toggle('open')
    planets.classList.toggle('hide')
})

btn.addEventListener('click', function () {
    sun.classList.remove('sunActive');
    panel.classList.remove('open');
    planets.classList.remove('hide')
})
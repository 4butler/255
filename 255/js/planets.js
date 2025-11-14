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
    document.getElementById('mercury-panel'),
    document.getElementById('venus-panel'),
    document.getElementById('earth-panel'),
    document.getElementById('mars-panel'),
    document.getElementById('jupiter-panel'),
    document.getElementById('saturn-panel'),
    document.getElementById('uranus-panel'),
    document.getElementById('neptune-panel')

];

let onfbtn = document.getElementById('switch');
let btn = document.getElementById('close');
let sun = document.getElementById('sun');
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
planet.forEach((plan, num) => {
    plan.addEventListener('click', function () {
        let check = num;
        plan.classList.toggle('Active');
        panel[num].classList.toggle('open');
        planet.forEach((p, i) => {
            if (i === check) return;
            p.classList.toggle('hide');
        });
        sun.classList.toggle('hide');
    });
});

btn.addEventListener('click', function () {
    planet[check].classList.remove('Active');
    panel[check].classList.remove('open');
    for (let i = 0; i < planet.length; i++) {
        if (i == check) continue;
        planet[i].classList.remove('hide');
    }
    sun.classList.remove('hide');
    check = -1;
})
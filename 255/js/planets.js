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

let satellite = [
    document.getElementById('earth-moon'),
    document.getElementById('mars-phobos'),
    document.getElementById('jupiter-ganymede'),
    document.getElementById('saturn-titan'),
    document.getElementById('uranus-titania'),
]

let planetContent = document.querySelectorAll(".planetContent");
let satelliteContent = document.querySelectorAll(".satelliteContent");
let onfbtn = document.getElementById('switch');
let sun = document.getElementById('sun');
let earthDetailyBtn = document.getElementById('earth_detaily');
let closeBtns = document.getElementById('close');
let check = -1;
let panelCheck = 0;
let scrollBackup = { x: 0, y: 0 };

function saveScroll() {
    scrollBackup.x = window.scrollX;
    scrollBackup.y = window.scrollY;
}

function restoreScroll() {
    window.scrollTo({
        top: scrollBackup.y,
        left: scrollBackup.x,
        behavior: "smooth"
    });
}


onfbtn.addEventListener('change', () => {
    if (onfbtn.checked) {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.toggle('on');
            planet[i].classList.toggle('on');
        }
    } else {
        for (let i = 0; i < link.length; i++) {
            link[i].classList.remove('on');
            planet[i].classList.remove('on');
        }
    }
});

planet.forEach((plan, num) => {
    plan.addEventListener('click', function () {
        if (panelCheck) {
            panelCheck = 1;
            satelliteContent.forEach(i => i.classList.remove("Active"));
            planetContent.forEach(i => i.classList.add("Active"));
        }

        saveScroll();
        check = num;
        panelCheck = 1;

        plan.classList.add('Active');
        panel[num].classList.add('open');
        closeBtns.classList.add('Active');
        planetContent.forEach(i => i.classList.add("Active"));

        planet.forEach((p, i) => {
            if (i === check) return;
            p.classList.add('hide');
        });
        sun.classList.add('hide');
        if (2 <= num <= 6) {
            satellite[num - 2].classList.add('Active');
        }
        window.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    });
});

satellite.forEach((sat, num) => {
    sat.addEventListener('click', function () {
        panelCheck = 2;
        planetContent.forEach(i => i.classList.remove("Active"));
        satelliteContent.forEach(i => i.classList.add("Active"));
    })
})

closeBtns.addEventListener('click', function () {
    restoreScroll();

    panelCheck = 0;
    planet[check].classList.remove('Active');
    panel[check].classList.remove('open');
    closeBtns.classList.remove('Active');
    planetContent.forEach(i => i.classList.remove("Active"));
    satelliteContent.forEach(i => i.classList.remove("Active"));

    for (let i = 0; i < planet.length; i++) {
        if (i === check) continue;
        planet[i].classList.remove('hide');
    }
    sun.classList.remove('hide');

    if (2 <= check <= 6) {
        satellite[check - 2].classList.remove('Active');
    }
    check = -1;
})

document.getElementById("earth_detaily").onclick = function () {
    window.location.href = "inearth/map.html";
};
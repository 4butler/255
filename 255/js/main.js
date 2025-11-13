let sun = document.getElementById('sun-img');
let panel = document.getElementById('sun-panel')
let planets = document.getElementById('planets-img')
let btn = document.getElementById('close');


sun.addEventListener('click', function() {
    sun.classList.toggle('Active');
    panel.classList.toggle('open')
    planets.classList.toggle('hide')
})

btn.addEventListener('click', function(){
    sun.classList.remove('Active');
    panel.classList.remove('open');
    planets.classList.remove('hide')
})
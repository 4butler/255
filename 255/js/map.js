let continents = [
  document.getElementById('asia'),
  document.getElementById('africa'),
  document.getElementById('europe'),
  document.getElementById('northamerica'),
  document.getElementById('southamerica'),
  document.getElementById('oceania'),
  document.getElementById('antarctica')
];

let panels = [
  document.getElementById('asia-panel'),
  document.getElementById('africa-panel'),
  document.getElementById('europe-panel'),
  document.getElementById('northamerica-panel'),
  document.getElementById('southamerica-panel'),
  document.getElementById('oceania-panel'),
  document.getElementById('antarctica-panel')
];

let backcontinents = [
  document.getElementById('backasia'),
  document.getElementById('backafrica'),
  document.getElementById('backeurope'),
  document.getElementById('backnorthamerica'),
  document.getElementById('backsouthamerica'),
  document.getElementById('backoceania'),
  document.getElementById('backantarctica')
];

let closeBtns = document.querySelectorAll('.close');
let check = -1;

backcontinents.forEach((con, num) => {
  con.addEventListener('click', function () {
    check = num;
    continents[num].classList.toggle('Active');
    panels[num].classList.toggle('open');

    continents.forEach((c, i) => {
      if (i === check) return;
      c.classList.toggle('hide');
    });
  });
});

closeBtns.forEach(button => {
  button.addEventListener('click', function () {
    if (check === -1) return;

    continents[check].classList.remove('Active');
    panels[check].classList.remove('open');

    continents.forEach((c, i) => {
      if (i === check) return;
      c.classList.remove('hide');
    });

    check = -1;
  });
});

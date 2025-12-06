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

let closeBtns = document.getElementById('close');
let check = -1;

backcontinents.forEach((con, num) => {
  con.addEventListener('click', function () {
    check = num;

    if (num === 0) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('asiaActive');
        backcontinents[i].classList.add('asiaActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 1) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('africaActive');
        backcontinents[i].classList.add('africaActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 2) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('europeActive');
        backcontinents[i].classList.add('europeActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 3) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('northamericaActive');
        backcontinents[i].classList.add('northamericaActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 4) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('southamericaActive');
        backcontinents[i].classList.add('southamericaActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 5) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('oceaniaActive');
        backcontinents[i].classList.add('oceaniaActive');
      }
      panels[num].classList.add('open');
    }

    if (num === 6) {
      for (let i = 0; i < 7; i++) {
        continents[i].classList.add('antarcticaActive');
        backcontinents[i].classList.add('antarcticaActive');
      }
      panels[num].classList.add('open');
    }

  });
});

closeBtns.addEventListener('click', function () {
  if (check === 0) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('asiaActive');
      backcontinents[i].classList.remove('asiaActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 1) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('africaActive');
      backcontinents[i].classList.remove('africaActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 2) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('europeActive');
      backcontinents[i].classList.remove('europeActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 3) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('northamericaActive');
      backcontinents[i].classList.remove('northamericaActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 4) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('southamericaActive');
      backcontinents[i].classList.remove('southamericaActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 5) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('oceaniaActive');
      backcontinents[i].classList.remove('oceaniaActive');
    }
    panels[check].classList.remove('open');
  }

  if (check === 6) {
    for (let i = 0; i < 7; i++) {
      continents[i].classList.remove('antarcticaActive');
      backcontinents[i].classList.remove('antarcticaActive');
    }
    panels[check].classList.remove('open');
  }

  check = -1;
});

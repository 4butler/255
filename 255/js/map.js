let continents = [
  document.getElementById('asia'),
  document.getElementById('africa'),
  document.getElementById('europe'),
  document.getElementById('northAmerica'),
  document.getElementById('southAmerica'),
  document.getElementById('oceania'),
  document.getElementById('antarctica')
];

let panel = [
  document.getElementById('asia-panel'),
  document.getElementById('africa-panel'),
  document.getElementById('europe-panel'),
  document.getElementById('northAmerica-panel'),
  document.getElementById('southAmerica-panel'),
  document.getElementById('oceania-panel'),
  document.getElementById('antarctica-panel')
];
let closeBtns = document.querySelectorAll('.close');

continent.forEach((con, num) => {
  con.addEventListener('click', function () {
    check = num;
    con.classList.toggle('Active');
    panel[num].classList.toggle('open');
    conet.forEach((c, i) => {
      if (i === check) return;
      c.classList.toggle('hide');
    });
  });
});

closeBtns.forEach(button => {
    button.addEventListener('click', function () {
        if (check === -1) return;

        continents[check].classList.remove('Active');
        panel[check].classList.remove('open');
        for (let i = 0; i < continents.length; i++) {
            if (i == check) continue;
            continents[i].classList.remove('hide');
        }
        check = -1;
    })
});

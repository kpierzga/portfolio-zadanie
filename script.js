const ciekawostkaBtn = document.querySelector("#ciekawostkaBtn");
const ciekawostkaDiv = document.querySelector("#ciekawostkaDiv");


var aktualnaCiekawostka = 0;
function ciekawostka() {
    const ciekawostki = [
        "Ciekawostka 1: JavaScript został stworzony w 10 dni przez Brendana Eicha w 1995 roku.",
        "Ciekawostka 2: HTML oznacza HyperText Markup Language."
    ];

    if (aktualnaCiekawostka >= ciekawostki.length) {
        aktualnaCiekawostka = 0;
    }
    const randomCiekawostka = ciekawostki[aktualnaCiekawostka];
    ciekawostkaDiv.innerHTML = randomCiekawostka;
    aktualnaCiekawostka++;
}

ciekawostkaBtn.addEventListener("click", ciekawostka);
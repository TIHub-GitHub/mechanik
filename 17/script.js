function zrobDuzeLitery(slowa) {
    var oddzielSlowa = slowa.toLowerCase().split(' ');
    for (var i = 0; i < oddzielSlowa.length; i++) {
        oddzielSlowa[i] = oddzielSlowa[i].charAt(0).toUpperCase() +
            oddzielSlowa[i].substring(1);
    }
    return oddzielSlowa.join(' ');
}

function duzeLitery() {
    const imieinazwisko = document.getElementById("imieinazwisko");
    const wynik = zrobDuzeLitery(imieinazwisko.value);
    imieinazwisko.value = wynik;

    const spanimieinazwisko = document.getElementById("span-imieinazwisko");
    spanimieinazwisko.innerText = wynik;
}

const tak = document.getElementById("tak");
const takdiv = document.getElementById("takdiv");
tak.addEventListener("click", () => {
    takdiv.style.display = "block";
})
const nie = document.getElementById("nie");
const niediv = document.getElementById("takdiv");
nie.addEventListener("click", () => {
    niediv.style.display = "none";
})
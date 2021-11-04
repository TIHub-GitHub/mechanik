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
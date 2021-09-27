const poczatek = document.getElementById("poczatek");
const kontakt = document.getElementById("kontakt");
const zdjecie = document.getElementById("zdjecie");

poczatek.addEventListener("click", () => {
    window.scrollTo(0, 0);
})
kontakt.addEventListener("click", () => {
    window.location.href = "mailto:ostryjanekx69@wp.pl";
})
zdjecie.addEventListener("click", () => {
    window.open("http://wikipedia.pl");
})
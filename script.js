let klucze = {
    1: "papier",
    2: "kamień",
    3: "nożyce"
}

function Wynik(wyborUzytkownika){
    //Losowanie komputera
    let wyborKomputera = Math.floor((Math.random() * 3) + 1);
    let pKomputera = document.getElementById("wybor_komputera");
    pKomputera.innerHTML = (klucze[wyborKomputera]);
    //Mapowanie wyboru uzytkownika
    let pUzytkownika = document.getElementById("wybor_uzytkownika");
    pUzytkownika.innerHTML = (klucze[wyborUzytkownika]);
    //Sprawdzanie wyniku
    let roznica = wyborUzytkownika - wyborKomputera;
    let wynik = document.getElementById("wynik");
    if (roznica === 0){
        wynik.innerHTML = ("Remis!");
    } else if ((roznica === -1) || (roznica == 2)){
        wynik.innerHTML = ("Wygrana!");
    } else {
        wynik.innerHTML = ("Przegrana!");
    }
};
// Hae kaikki luukut
const calendar = document.querySelector('.calendar');
const doors = Array.from(calendar.children); // Muunna kaikki luukut taulukoksi

// Sekoita luukut Fisher-Yates-algoritmilla
for (let i = doors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doors[i], doors[j]] = [doors[j], doors[i]];
}

// Tyhjennä kalenterin sisältö ja lisää luukut satunnaisessa järjestyksessä
calendar.innerHTML = ""; // Poista vanha järjestys
doors.forEach(door => calendar.appendChild(door)); // Lisää satunnaistettu järjestys

// Hanki tämänhetkinen päivämäärä
const today = new Date().getDate();

// Lisää avaamislogiikka jokaiseen luukkuun
doors.forEach(door => {
    const day = parseInt(door.dataset.day, 10); // Hae luukun päivämäärä

    // Estetään avaamattomien luukkujen klikkaaminen
    if (day > today) {
        door.classList.add('disabled');
        door.title = "Ei vielä avattavissa!";
    } else {
        // Lisää klikkaustapahtuma avattavalle luukulle
        door.addEventListener('click', () => {
            if (!door.classList.contains('open')) { // Tarkista, ettei luukku ole jo avattu
                door.classList.add('open'); // Lisää "open"-luokka
            }
        });
    }
});

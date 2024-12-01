// Hae kaikki luukut
const doors = document.querySelectorAll('.door');

// Hanki tämänhetkinen päivämäärä
const today = new Date().getDate();

// Lisää klikkauslogiikka jokaiseen luukkuun
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

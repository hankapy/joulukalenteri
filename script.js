// Hae kaikki luukut
const doors = document.querySelectorAll('.door');

// Hanki tämänhetkinen päivä
const today = new Date().getDate();

// Lisää avaamislogiikka jokaiseen luukkuun
doors.forEach(door => {
    const day = parseInt(door.dataset.day, 10); // Hae luukun päivästä

    // Estetään luukun avaaminen, jos päivä ei ole vielä saavutettu
    if (day > today) {
        door.classList.add('disabled');
        door.title = "Ei vielä avattavissa!";
    } else {
        // Lisää klikkauskuuntelija avattavaksi luukulle
        door.addEventListener('click', () => {
            if (!door.classList.contains('open')) {
                door.classList.add('open'); // Lisää "open"-luokka, joka avaa luukun
            }
        });
    }
});

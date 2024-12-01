// Hae kaikki luukut
const doors = document.querySelectorAll('.door');

// Hanki tämänhetkinen päivä
const today = new Date().getDate();

// Lisää avaamislogiikka
doors.forEach(door => {
    const day = parseInt(door.dataset.day, 10);

    // Varmista, että luukku ei aukea liian aikaisin
    if (day > today) {
        door.classList.add('disabled');
        door.title = "Ei vielä avattavissa!";
    } else {
        door.addEventListener('click', () => {
            door.classList.add('open');
        });
    }
});

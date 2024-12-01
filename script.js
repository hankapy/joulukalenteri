// Hae kalenterielementti
const calendar = document.querySelector('.calendar');

// Tyhjennä mahdolliset olemassa olevat luukut (jos niitä on)
calendar.innerHTML = "";

// Luo numerot 1–24 ja sekoita ne
const doors = Array.from({ length: 24 }, (_, i) => i + 1);
const shuffledDoors = doors.sort(() => Math.random() - 0.5);

// Luo kalenterin luukut
shuffledDoors.forEach(day => {
    // Luo yksi luukku
    const door = document.createElement('div');
    door.classList.add('door');
    door.dataset.day = day;

    // Luo luukun etu- ja takapuoli
    const front = document.createElement('div');
    front.classList.add('door-content', 'door-front');
    front.innerText = day; // Numerot näkyvät etupuolella
    door.appendChild(front);

    const back = document.createElement('div');
    back.classList.add('door-content', 'door-back');
    back.style.backgroundImage = ('image${day}.jpg'); // Kuva-polku
    door.appendChild(back);

    // Estä avaamattomat luukut
    const today = new Date().getDate();
    if (day > today) {
        door.classList.add('disabled');
        door.title = "Ei vielä avattavissa!";
    } else {
        door.addEventListener('click', () => {
            door.classList.add('open');
        });
    }

    // Lisää luukku kalenteriin
    calendar.appendChild(door);
});

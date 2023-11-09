let jel = 'X';
const dobozok = document.getElementsByClassName("doboz");
const torolgomb = document.getElementById("torol");
const tarolo = document.getElementById("cont");

function dobozKatt(index) {
    if (!dobozok[index].textContent.trim()) {
        dobozok[index].textContent = jel;
        jel = (jel === "X") ? "O" : "X";
    }
    console.log("Kattintás a négyzetre:", index);
}

function tablaTorles() {
    dobozok.forEach(doboz => {
        doboz.textContent = "";
    });
    console.log("Törölve");
}

torol.addEventListener("click", tablaTorles);

torol.addEventListener("click", function () {
    tarolo.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
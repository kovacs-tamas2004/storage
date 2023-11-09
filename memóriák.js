function mentettAdatok() {
    let storageTipus = document.getElementById("storageSelector").value;
    let key = document.getElementById("keyInput").value;
    let value = document.getElementById("valueInput").value;

    if (key && value) {
        if (storageTipus === "localStorage") {
            localStorage.setItem(key, value);
        } else if (storageTipus === "sessionStorage") {
            sessionStorage.setItem(key, value);
        }

        mentettKepernyo();

    } else {
        alert("Add meg a key-t és a value-t!");
    }
}

function mentettKepernyo() {
    let storageTipus = document.getElementById("storageSelector").value;
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

    outputDiv.innerHTML += "<p>" + key + ": " + value + "</p>";
    }

    if (outputDiv.innerHTML === "") {
        outputDiv.innerHTML = "<p>Adat nem érhető el</p>";
    }
}

function torolAdatok() {
    let storageTipus = document.getElementById("storageSelector").value;

    if (storageTipus === "localStorage") {
        localStorage.clear();
    } else if (storageTipus === "sessionStorage") {
        sessionStorage.clear();
    }

    mentettKepernyo();
}

window.onload = mentettKepernyo;
const item = document.getElementById("item");
const areaDrop = document.getElementById("area-drop");

// Evento quando começa a arrastar
item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", "item");
});

// Evento necessário para permitir o drop
areaDrop.addEventListener("dragover", function (e) {
    e.preventDefault();
});

// Evento quando solta dentro da área
areaDrop.addEventListener("drop", function (e) {
    e.preventDefault();
    areaDrop.textContent = "Item solto aqui!";
    areaDrop.style.backgroundColor = "lightgreen";
});
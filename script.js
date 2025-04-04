let modal = document.getElementById("modal");
let modalMessage = document.getElementById("modal-message");
let modalContent = document.getElementById("modal-content");


document.getElementById("inscripcion").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const email = document.getElementById("email").value;
    const pago = document.getElementById("pago").value;
    const juego = document.getElementById("juego").value;

    if (!nombre || !email || !pago || !juego || !edad) {
        showModal("Por favor, completa todos los campos.");
        return;
    }

    if (edad < 14) {
        showModal("Debes tener 14 años o más para inscribirte.");
        return;
    }

    let precio;
    if (juego === "lol") {
        precio = 50;
    } else if (juego === "fortnite") {
        precio = 60;
    } else if (juego === "valorant") {
        precio = 70;
    }

    let montoPago = parseFloat(pago);
    if (montoPago < precio) {
        showModal(`El pago debe ser al menos ${precio} soles para ${juego}.`);
        return;
    }

    let vueltoAmount = montoPago - precio;
    document.getElementById("vuelto").value = vueltoAmount;

    showModal("¡Inscripción exitosa! Estás inscrito en el torneo.");
});


function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = "flex"; 
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

modalContent.addEventListener("click", function(event) {
    event.stopPropagation(); 
});
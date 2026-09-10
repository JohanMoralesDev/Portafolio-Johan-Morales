const formulario = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();


    if (nombre === "") {
        mensajeFormulario.textContent = "Por favor, escribe tu nombre.";
        return;
    }


    if (email === "") {
        mensajeFormulario.textContent = "Por favor, escribe tu correo electrónico.";
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        mensajeFormulario.textContent = "Por favor, introduce un correo electrónico válido.";
        return;
    }

    if (mensaje === "") {
        mensajeFormulario.textContent = "Por favor, escribe un mensaje.";
        return;
    }

    if (mensaje === "") {

    mensajeFormulario.textContent =
        "Por favor, escribe un mensaje.";

    return;
}

    if (mensaje.length < 10) {
        mensajeFormulario.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return;
}

    mensajeFormulario.textContent = "¡Mensaje enviado correctamente!";
    formulario.reset();
});
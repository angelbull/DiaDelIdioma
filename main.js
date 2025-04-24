/* main.js */
function mostrarBienvenida() {
    console.log("¡Bienvenido/a al sitio del Día del Idioma!");
    alert("¡Bienvenido/a al sitio del Día del Idioma!");
}

function mostrarCita() {
    const cita = "\"El idioma es la sangre del alma.\" - Oliver Wendell Holmes";
    document.getElementById("cita").innerText = cita;
}

function cambiarFondo() {
    document.body.classList.toggle("fondo-alterno");
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (!nombre || !correo) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
}
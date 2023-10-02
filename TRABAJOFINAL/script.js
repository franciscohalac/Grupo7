// Capturamos el botón en el DOM
const cambiarServiciosButton = document.getElementById("cambiarServicios");

// Función para cambiar el contenido de la sección de servicios
function cambiarServicios() {
    const serviciosSection = document.querySelector("section h2");
    const serviciosDescription = document.querySelector("section p");

    serviciosSection.textContent = "Nuevos Servicios";
    serviciosDescription.textContent = "Descripción de los nuevos servicios de Parsii.";
}

// Agregamos un evento click al botón para llamar a la función
cambiarServiciosButton.addEventListener("click", cambiarServicios);

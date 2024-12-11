let opcion;

do {
    console.log("Menú:");
    console.log("1. Saludar");
    console.log("2. Mostrar la hora actual");
    console.log("3. Salir");
    opcion = parseInt(prompt("Elige una opción (1-3):"), 10);

    switch (opcion) {
        case 1:
            console.log("¡Hola, usuario!");
            break;
        case 2:
            console.log("La hora actual es:", new Date().toLocaleTimeString());
            break;
        case 3:
            console.log("¡Adiós!");
            break;
        default:
            console.log("Opción no válida. Inténtalo de nuevo.");
    }
} while (opcion !== 3);

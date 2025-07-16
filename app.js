// ===============================
// DEFINICIÓN DE VARIABLES
// ===============================

// Referencia a los elementos del DOM
const clicButton = document.querySelector("#click-button");
const counterClic = document.querySelector("#number-clics");
const resetButton = document.querySelector("#reset-button");

// El botón de reinicio comienza deshabilitado
resetButton.disabled = true;

// Inicialización del contador de clics
let counter = 0;

// ===============================
// FUNCIONALIDADES
// ===============================

// Función que incrementa y actualiza el contador
function incrementCounter() {
  counter++; // Incrementa el contador en 1
  counterClic.textContent = counter; // Actualiza el número mostrado en pantalla

  if (counter > 0) {
    resetButton.disabled = false; // Habilita el botón y lo muestra
  }
}

// Función para que oculta boton de reinicio
function resetCounter() {
  counter = 0; // Reinicia el contador
  counterClic.textContent = counter; // Actualiza el número mostrado en pantalla
  resetButton.disabled = true; // Desactiva y oculta el botón de reinicio
}


// ===============================
// EVENTOS
// ===============================

// Escucha el evento 'click' del botón de conteo
clicButton.addEventListener("click", incrementCounter);

// Escucha el evento 'click' del botón reinicio
resetButton.addEventListener("click", resetCounter);

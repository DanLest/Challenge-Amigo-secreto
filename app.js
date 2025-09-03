// keypress al input de amigo cuando de enter que agrege el amigo
const input = document.getElementById("amigo");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

// Crear un array para almacenar los nombres
let amigos = [];
function agregarAmigo() {
  // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío
  const nombre = input.value.trim();
  // Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  // Limpiar la lista existente
  input.value = "";
}
// Función que recorre el array y actualiza la lista HTML
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  // Limpiar la lista existente
  lista.innerHTML = "";
  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    // Agregar elementos a la lista
    lista.appendChild(li);
  }
}

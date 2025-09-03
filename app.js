// keypress al input de amigo cuando de enter que agrege el amigo
const input = document.getElementById("amigo");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

// agrega amigos a la lista
let amigos = [];
function agregarAmigo() {
  const nombre = input.value.trim();
  // si el nombre es vacio se manda una alerta y no agrega nada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  // si no es vacio agrega el nombre a la lista
  amigos.push(nombre);
  mostrarAmigos();
  input.value = "";
}// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

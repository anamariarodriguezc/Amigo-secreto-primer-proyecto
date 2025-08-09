// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo"); 
  const nombre = input.value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  resultado.innerHTML = "";
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() { 
  if (amigos.length === 0) {
    alert("La lista está vacía, agregue un nombre");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.innerHTML = `Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
  resultado.appendChild(li);
}
document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    agregarAmigo();
  }
});
const borrartxt = document.getElementById('borrar');
const divtexto = document.getElementById('texto');

function borrar() {
    divtexto.hidden = true;
}

borrartxt.addEventListener('click', borrar);

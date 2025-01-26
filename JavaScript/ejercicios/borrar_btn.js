const borrartxt = document.getElementById('borrar');
const divtexto = document.getElementById('texto')

function borrar() {
    divtexto.style.visibility = 'hidden';
}

document.getElementById('borrar').addEventListener('click', borrar);

const pantalla = document.getElementById('pantalla');
const botones = Array.from(document.getElementsByClassName('botones'));
const btn_igual = document.getElementById('igual');
const btn_limpiar = document.getElementById('limpio');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.getAttribute('data-value');
        pantalla.value += valor;
    });
});

btn_limpiar.addEventListener('click', () => {
    pantalla.value = '';
});

btn_igual.addEventListener('click', () => {
    try {
        pantalla.value = eval(pantalla.value);
    } catch {
        pantalla.value = 'Error';
    }
});
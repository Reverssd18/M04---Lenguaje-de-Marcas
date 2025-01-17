const pantalla = document.getElementById('pantalla');
const botones = Array.from(document.getElementsByClassName('botones'));
const btn_igual = document.getElementById('igual');
const btn_limpiar = document.getElementById('limpio');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.getAttribute('data-value');
        if (valor) {
            pantalla.value += valor;
        }


    });
});

btn_limpiar.addEventListener('click', () => {
    pantalla.value = '';
});

btn_igual.addEventListener('click', () => {
    if (pantalla.value === 'Error ("C" to clear)') {
        pantalla.value = '';
    }
    try {
        const result = eval(pantalla.value);
        if (result === undefined) {
            pantalla.value = 'Error ("C" to clear)';
        } else {
            pantalla.value = result;
        }
    } catch {
        pantalla.value = 'Error ("C" to clear)';
    }
});


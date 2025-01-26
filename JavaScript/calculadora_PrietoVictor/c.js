const pantalla = document.getElementById('pantalla');
const botones = Array.from(document.getElementsByClassName('botones'));
const btn_igual = document.getElementById('igual');
const btn_limpiar = document.getElementById('limpio');
const btn_retroceso = document.getElementById('retroceso');

let nuevaOperacion = false;
let operadorIngresado = false;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.getAttribute('data-value');

        if (valor) {
            if (['+', '-', '*', '/'].includes(valor)) {
                if (operadorIngresado) {
                    pantalla.value = pantalla.value.slice(0, -1) + valor;
                } else {
                    if (nuevaOperacion) {
                        nuevaOperacion = false;
                    }
                    pantalla.value += valor;
                    operadorIngresado = true;
                    nuevaOperacion = false;
                }
            } else {
                if (nuevaOperacion) {
                    pantalla.value = '';
                    nuevaOperacion = false;
                }
                pantalla.value += valor;
                operadorIngresado = false;
            }
        }
    });
});

btn_limpiar.addEventListener('click', () => {
    pantalla.value = '';
    nuevaOperacion = false;
    operadorIngresado = false;
});

btn_igual.addEventListener('click', () => {
    try {
        if (pantalla.value.trim() === '' || ['+', '-', '*', '/'].includes(pantalla.value.slice(-1))) {
            pantalla.value = 'Error';
            return;
        }

        const result = Function('"use strict";return (' + pantalla.value + ')')();
        pantalla.value = result;
        nuevaOperacion = true;
        operadorIngresado = false;
    } catch {
        pantalla.value = 'Error';
    }
});

btn_retroceso.addEventListener('click', () => {
    pantalla.value = pantalla.value.slice(0, -1);
    operadorIngresado = false;
});

const result = document.getElementById('result');
const precio_original = document.getElementById('prize');
const edad = document.getElementById('age');

let descuento = 0;

function getDescuentos() {
    const age = parseInt(edad.value);
    console.log(age);
    if (isNaN(age)) {
        console.log('No es un número');
        descuento = 0;
    } else if (age <= 17) {
        descuento = -1;
    } else if (age >= 18 && age <= 30) {
        descuento = 25;
    } else if (age > 30 && age <= 60) {
        descuento = 0;
    } else if (age > 60) {
        descuento = 15;
    } else {
        descuento = 0;
    }
}

function calcularDescuentos() {
    getDescuentos();
    if (parseInt(descuento) == -1) {
        result.value ='No se puede vender a menores de edad';
    }
    else {
        result.textContent = precio_original.value - (precio_original.value * descuento / 100);
    }
}

document.getElementById('prize').addEventListener('input', calcularDescuentos);
document.getElementById('age').addEventListener('input', calcularDescuentos);

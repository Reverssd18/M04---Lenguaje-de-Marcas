const diaInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const result = document.getElementById('result');

function calcularResult() {
    const dia = diaInput.value;
    const mes = monthInput.value;
    const year = yearInput.value;

    if (!year || !mes || !dia) {
        result.textContent = 'Rellena los campos.';
        return;
    }

    let yearSum = 0;
    for (let i = 0; i < year.length; i++) {
        yearSum += parseInt(year[i]);
    }

    let dayResult = 1;
    for (let i = 0; i < dia.length; i++) {
        dayResult *= parseInt(dia[i]);
    }

    const resultTotal = yearSum - parseInt(mes) + dayResult;
    result.textContent = resultTotal;
}

diaInput.addEventListener('input', calcularResult);
monthInput.addEventListener('input', calcularResult);
yearInput.addEventListener('input', calcularResult);
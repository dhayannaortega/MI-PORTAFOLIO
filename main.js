// --- FUNCION PARA ABRIR Y CERRAR TARJETAS DESPLEGABLES ---
function toggleProyecto(id) {
    let elem = document.getElementById(id);
    elem.classList.toggle('calculadora-visible');
}

// --- PROYECTO 1: CALCULADORA WEB ---
let operacionSeleccionada = '+';

function seleccionarOperacion(op) {
    operacionSeleccionada = op;
}

function ejecutarCalculo() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultadoP = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        resultadoP.textContent = "Por favor ingresa ambos números";
        resultadoP.style.color = "#c0392b";
        return;
    }

    let resultado = 0;

    if (operacionSeleccionada === '+') {
        resultado = n1 + n2;
    } else if (operacionSeleccionada === '-') {
        resultado = n1 - n2;
    } else if (operacionSeleccionada === '*') {
        resultado = n1 * n2;
    } else if (operacionSeleccionada === '/') {
        if (n2 === 0) {
            resultadoP.textContent = "Error: División por cero";
            resultadoP.style.color = "#c0392b";
            return;
        }
        resultado = n1 / n2;
    }

    resultadoP.textContent = "Resultado: " + resultado;
    resultadoP.style.color = "#27ae60";
}

// --- PROYECTO 2: LISTA DE COMPRAS (INTERACTIVA) ---
function agregarProducto() {
    let input = document.getElementById('nuevoProducto');
    let lista = document.getElementById('listaCompras');
    let texto = input.value.trim();

    if (texto === "") {
        alert("Por favor escribe un producto.");
        return;
    }

    let li = document.createElement('li');
    li.textContent = texto;
    li.style.padding = "6px 0";
    li.style.cursor = "pointer";
    li.style.borderBottom = "1px solid #e0d4d1";
    
    // Tachar el producto al hacer clic sobre él
    li.onclick = function() {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
            li.style.color = "inherit";
        } else {
            li.style.textDecoration = "line-through";
            li.style.color = "#95a5a6";
        }
    };

    lista.appendChild(li);
    input.value = ""; // Limpiar campo
}

// --- PROYECTO 3: SIMULADOR DE PRESUPUESTO ---
function calcularSaldo() {
    let pres = parseFloat(document.getElementById('presupuesto').value);
    let gasto = parseFloat(document.getElementById('gasto').value);
    let resultadoP = document.getElementById('resultadoSaldo');

    if (isNaN(pres) || isNaN(gasto)) {
        resultadoP.textContent = "Por favor ingresa valores numéricos válidos";
        resultadoP.style.color = "#c0392b";
        return;
    }

    let saldo = pres - gasto;

    if (saldo < 0) {
        resultadoP.textContent = "Saldo disponible: $" + saldo.toFixed(2) + " (Presupuesto excedido)";
        resultadoP.style.color = "#c0392b";
    } else {
        resultadoP.textContent = "Saldo disponible: $" + saldo.toFixed(2);
        resultadoP.style.color = "#27ae60";
    }
}
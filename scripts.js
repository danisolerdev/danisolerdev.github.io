// Obtén una referencia al select y al contenedor
const selectNumeroMeses = document.querySelector('#numeroMeses');
const contenedorMesesGenerados = document.querySelector('#contenedorMesesGenerados');
const divOriginal = document.querySelector('.added-month-original'); // Cambiado de ID a clase
const inputMes = document.querySelector('#mes'); // Agregamos referencia al campo de mes

// Agrega eventos de cambio al select y al campo de mes
selectNumeroMeses.addEventListener('change', crearElementos);
inputMes.addEventListener('change', crearElementos);

function crearElementos() {
  contenedorMesesGenerados.innerHTML = '';
  const mesSeleccionado = inputMes.value; // Utilizamos el campo de mes

  const numeroMeses = parseInt(selectNumeroMeses.value);

  // Obtener el año y el mes desde la fecha seleccionada
  const fechaSeleccionada = new Date(mesSeleccionado + '-01');
  let anio = fechaSeleccionada.getFullYear();
  let mes = fechaSeleccionada.getMonth();

  // Avanzar al siguiente mes antes de crear el primer clon
  mes++;
  if (mes > 11) {
    mes = 0; // Reinicia a enero si llega a diciembre
    anio++;
  }

  for (let i = 0; i < numeroMeses; i++) {
    const divClone = divOriginal.cloneNode(true);
    divClone.style.display = 'grid';

    // Modifica el contenido de "Nombre Mes" y "Año" en el clon basado en el mes actual
    const addedMonthName = divClone.querySelector('.added-month-name');
    const year = divClone.querySelector('.year');

    // Configura el contenido del clon basado en el mes y el año actuales
    addedMonthName.textContent = obtenerNombreMes(mes);
    year.textContent = anio;

    contenedorMesesGenerados.appendChild(divClone);

    // Avanza al siguiente mes
    mes++;
    if (mes > 11) {
      mes = 0; // Reinicia a enero si llega a diciembre
      anio++;
    }
  }
}

// Función para obtener el nombre del mes a partir del número del mes (0-11)
function obtenerNombreMes(numeroMes) {
  const nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return nombresMeses[numeroMes];
}

// Llama a la función una vez al cargar la página para crear elementos iniciales
crearElementos();
